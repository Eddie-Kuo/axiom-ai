"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Circle,
  Clock,
  Trophy,
  BookOpen,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockCourse } from "@/data/mockData";

export default function CourseOverviewPage() {
  const { courseId } = useParams();
  const course = mockCourse; // In a real app, fetch by courseId

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link href="/create-course">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Course Creation
              </Button>
            </Link>
          </div>

          {/* Course Header */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  className={`${getDifficultyColor(
                    course.difficulty
                  )} text-white`}
                >
                  {course.difficulty}
                </Badge>
                <Badge variant="outline">
                  <Clock className="w-3 h-3 mr-1" />
                  {course.estimatedDuration}
                </Badge>
              </div>

              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {course.units.length} Units
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  {course.units.reduce(
                    (acc, unit) => acc + unit.chapters.length,
                    0
                  )}{" "}
                  Chapters
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Progress: {course.progress}%
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Overall Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="text-center pt-4">
                      <Link
                        href={`/course/${course.id}/unit/${course.units[0].id}`}
                      >
                        <Button variant="gradient" className="w-full">
                          <Play className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Course Units */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Course Curriculum</h2>

            {course.units.map((unit, unitIndex) => (
              <Card
                key={unit.id}
                className="shadow-lg border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        Unit {unitIndex + 1}: {unit.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {unit.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">
                        {unit.chapters.filter((c) => c.completed).length} /{" "}
                        {unit.chapters.length} completed
                      </div>
                      <Progress value={unit.progress} className="w-24 h-2" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {unit.chapters.map((chapter, chapterIndex) => (
                      <div
                        key={chapter.id}
                        className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {chapter.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-muted-foreground" />
                          )}
                          <div>
                            <h4 className="font-medium">
                              Chapter {chapterIndex + 1}: {chapter.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {chapter.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-sm text-muted-foreground">
                            {chapter.duration}
                          </div>
                          <Link
                            href={`/course/${course.id}/unit/${unit.id}/chapter/${chapter.id}`}
                          >
                            <Button
                              variant={
                                chapter.completed ? "outline" : "default"
                              }
                              size="sm"
                            >
                              {chapter.completed ? "Review" : "Start"}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <Link href={`/course/${course.id}/unit/${unit.id}`}>
                      <Button variant="outline" className="w-full">
                        View Unit Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
