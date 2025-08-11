"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Circle,
  Clock,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { mockCourse } from "@/data/mockData";

const UnitViewPage = () => {
  const { courseId, unitId } = useParams();
  const course = mockCourse;
  const unit = course.units.find((u) => u.id === unitId);

  if (!unit) {
    return <div>Unit not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href={`/course/${courseId}`}>
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Course Overview
              </Button>
            </Link>
          </div>

          {/* Unit Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <BookOpen className="w-4 h-4" />
              {course.title}
            </div>

            <h1 className="text-4xl font-bold mb-4">{unit.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {unit.description}
            </p>

            <div className="flex items-center justify-between bg-secondary/30 rounded-lg p-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Unit Progress
                </div>
                <div className="text-2xl font-bold">{unit.progress}%</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">
                  {unit.chapters.filter((c) => c.completed).length} of{" "}
                  {unit.chapters.length} chapters completed
                </div>
                <Progress value={unit.progress} className="w-48 h-3" />
              </div>
            </div>
          </div>

          {/* Chapters List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Chapters</h2>

            {unit.chapters.map((chapter, index) => (
              <Card
                key={chapter.id}
                className="shadow-lg border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {chapter.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">
                            Chapter {index + 1}: {chapter.title}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {chapter.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {chapter.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Play className="w-4 h-4" />
                              Video + Quiz
                            </div>
                          </div>
                        </div>

                        <div className="flex-shrink-0 ml-4">
                          <Link
                            href={`/course/${courseId}/unit/${unitId}/chapter/${chapter.id}`}
                          >
                            <Button
                              variant={
                                chapter.completed ? "outline" : "gradient"
                              }
                              className="min-w-[100px]"
                            >
                              {chapter.completed ? "Review" : "Start"}
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {chapter.completed && (
                        <div className="inline-flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          <CheckCircle className="w-4 h-4" />
                          Completed
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Unit Preview */}
          {course.units.findIndex((u) => u.id === unitId) <
            course.units.length - 1 && (
            <Card className="mt-8 border border-ai-purple/20 bg-gradient-to-r from-ai-purple/5 to-ai-blue/5">
              <CardHeader>
                <CardTitle className="text-lg">Coming Next</CardTitle>
                <CardDescription>
                  Continue your learning journey with the next unit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">
                      {
                        course.units[
                          course.units.findIndex((u) => u.id === unitId) + 1
                        ]?.title
                      }
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {
                        course.units[
                          course.units.findIndex((u) => u.id === unitId) + 1
                        ]?.description
                      }
                    </p>
                  </div>
                  <Button variant="outline" disabled>
                    Complete current unit first
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitViewPage;
