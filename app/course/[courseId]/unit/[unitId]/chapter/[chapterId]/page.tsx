"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play, CheckCircle, Clock, FileText, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { mockCourse } from "@/data/mockData";

export default function ChapterViewPage() {
  const { courseId, unitId, chapterId } = useParams();
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  
  const course = mockCourse;
  const unit = course.units.find(u => u.id === unitId);
  const chapter = unit?.chapters.find(c => c.id === chapterId);

  if (!unit || !chapter) {
    return <div>Chapter not found</div>;
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < chapter.quiz.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    chapter.quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / chapter.quiz.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href={`/course/${courseId}/unit/${unitId}`}>
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Unit
              </Button>
            </Link>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{course.title}</span>
              <span>•</span>
              <span>{unit.title}</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline">
                <Clock className="w-3 h-3 mr-1" />
                {chapter.duration}
              </Badge>
              {chapter.completed && (
                <Badge className="bg-green-500 text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{chapter.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {chapter.description}
            </p>
          </div>

          {!showQuiz ? (
            <div className="space-y-8">
              {/* Video Section */}
              <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-ai-purple" />
                    Video Lesson
                  </CardTitle>
                  <CardDescription>{chapter.videoTitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-70" />
                      <p className="text-lg">Video: {chapter.videoTitle}</p>
                      <p className="text-sm opacity-70">{chapter.duration}</p>
                      <Button variant="hero" className="mt-4">
                        <Play className="w-4 h-4 mr-2" />
                        Play Video
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Summary Section */}
              <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-ai-blue" />
                    Chapter Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">{chapter.summary}</p>
                </CardContent>
              </Card>

              {/* Quiz CTA */}
              <Card className="shadow-lg border border-ai-purple/20 bg-gradient-to-r from-ai-purple/5 to-ai-blue/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-ai-purple" />
                    Test Your Knowledge
                  </CardTitle>
                  <CardDescription>
                    Ready to test what you've learned? Take the quiz to reinforce your understanding.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {chapter.quiz.length} questions • Estimated time: 5 minutes
                      </p>
                    </div>
                    <Button onClick={() => setShowQuiz(true)} variant="gradient">
                      Start Quiz
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-8">
              {!showResults ? (
                <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Quiz Question {currentQuestion + 1} of {chapter.quiz.length}</CardTitle>
                      <Badge variant="outline">
                        Question {currentQuestion + 1}/{chapter.quiz.length}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <h3 className="text-xl font-semibold">
                      {chapter.quiz[currentQuestion].question}
                    </h3>
                    
                    <RadioGroup
                      value={selectedAnswers[currentQuestion]?.toString()}
                      onValueChange={(value) => handleAnswerSelect(currentQuestion, parseInt(value))}
                    >
                      {chapter.quiz[currentQuestion].options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                        disabled={currentQuestion === 0}
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={handleNextQuestion}
                        disabled={selectedAnswers[currentQuestion] === undefined}
                        variant="gradient"
                      >
                        {currentQuestion === chapter.quiz.length - 1 ? "Finish Quiz" : "Next Question"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-center">Quiz Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-ai-purple to-ai-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">{calculateScore()}%</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {calculateScore() >= 70 ? "Great job!" : "Keep practicing!"}
                      </h3>
                      <p className="text-muted-foreground">
                        You scored {calculateScore()}% on this quiz
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {chapter.quiz.map((question, index) => {
                        const isCorrect = selectedAnswers[index] === question.correctAnswer;
                        return (
                          <div key={index} className={`p-4 rounded-lg border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                            <div className="flex items-center gap-2 mb-2">
                              {isCorrect ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                                  <span className="text-white text-xs">✕</span>
                                </div>
                              )}
                              <span className="font-medium">Question {index + 1}</span>
                            </div>
                            <p className="text-sm mb-2">{question.question}</p>
                            <p className="text-sm text-muted-foreground">
                              <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm mt-2 text-muted-foreground">
                                <strong>Explanation:</strong> {question.explanation}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex gap-4 justify-center">
                      <Button variant="outline" onClick={() => {
                        setShowQuiz(false);
                        setShowResults(false);
                        setCurrentQuestion(0);
                        setSelectedAnswers({});
                      }}>
                        Review Content
                      </Button>
                      <Link href={`/course/${courseId}/unit/${unitId}`}>
                        <Button variant="gradient">
                          Back to Unit
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}