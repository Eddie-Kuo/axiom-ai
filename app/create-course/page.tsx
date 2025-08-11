"use client";

import { useState } from "react";
import { ArrowLeft, Sparkles, ArrowRight, Book, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateCoursePage() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const exampleTopics = [
    "Python Programming Language",
    "How to Swim",
    "Digital Marketing Fundamentals",
    "Guitar Playing for Beginners",
    "Investment and Stock Trading",
    "Japanese Language Basics",
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      // Navigate to course overview with the topic
      router.push(`/course/1`);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-full px-4 py-2 mb-6 border border-ai-purple/20">
                <Sparkles className="w-4 h-4 text-ai-purple" />
                <span className="text-sm font-medium text-ai-purple">
                  AI Course Generator
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                What do you want to{" "}
                <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                  learn today?
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tell our AI what you're interested in learning, and we'll create
                a comprehensive course roadmap just for you.
              </p>
            </div>
          </div>

          <Card className="mb-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5 text-ai-purple" />
                Course Topic
              </CardTitle>
              <CardDescription>
                Enter the subject you want to master. Be as specific or general
                as you'd like.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Input
                  placeholder="e.g., Python Programming Language, How to Cook Italian Food, Digital Photography..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="text-lg py-6"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Additional Context (Optional)
                </label>
                <Textarea
                  placeholder="Tell us about your current skill level, specific goals, or any particular areas you want to focus on..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!topic.trim() || isGenerating}
                className="w-full text-lg py-6"
                variant="gradient"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                    Generating Your Course...
                  </>
                ) : (
                  <>
                    Generate My Course
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {isGenerating && (
            <Card className="mb-8 border border-ai-purple/20 bg-gradient-to-r from-ai-purple/5 to-ai-blue/5">
              <CardContent className="py-8">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-ai-purple border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Creating Your Personalized Course
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI is analyzing your topic and generating a
                    comprehensive learning roadmap...
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    This usually takes 30-60 seconds
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Popular Course Topics
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {exampleTopics.map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-left h-auto py-3 px-4 hover:border-ai-purple/50 hover:bg-ai-purple/5"
                  onClick={() => setTopic(example)}
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
