import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  BookOpen,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Course Generation",
      description:
        "Our advanced AI analyzes your learning goals and creates personalized course roadmaps tailored to your pace and style.",
    },
    {
      icon: Target,
      title: "Structured Learning Path",
      description:
        "Break down complex topics into digestible units and chapters with clear progression tracking.",
    },
    {
      icon: BookOpen,
      title: "Interactive Content",
      description:
        "Each chapter includes curated videos, comprehensive summaries, and reinforcement quizzes.",
    },
    {
      icon: Zap,
      title: "Accelerated Learning",
      description:
        "Learn faster with AI-optimized content sequencing and adaptive difficulty adjustment.",
    },
    {
      icon: Users,
      title: "Diverse Topics",
      description:
        "From programming languages to life skills, our AI can create courses for virtually any subject.",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed analytics and achievement milestones.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Tell Us What You Want to Learn",
      description:
        "Simply input any topic you're interested in - from 'Python Programming' to 'How to Cook Italian Food'",
    },
    {
      step: "2",
      title: "AI Generates Your Course",
      description:
        "Our AI creates a comprehensive course structure with units, chapters, and learning objectives",
    },
    {
      step: "3",
      title: "Start Learning",
      description:
        "Follow your personalized roadmap with videos, summaries, and quizzes for each chapter",
    },
    {
      step: "4",
      title: "Track Your Progress",
      description:
        "Monitor your advancement and celebrate achievements as you master new skills",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-full px-4 py-2 mb-6 border border-ai-purple/20">
              <Sparkles className="w-4 h-4 text-ai-purple" />
              <span className="text-sm font-medium text-ai-purple">
                AI-Powered Learning Revolution
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Accelerate Your Learning with{" "}
              <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform any topic into a comprehensive, personalized course
              roadmap. Our AI creates structured learning paths with videos,
              summaries, and quizzes to help you master new skills faster than
              ever before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/create-course">
                <Button
                  variant="gradient"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Learning Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                See How It Works
              </Button>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-border/50">
                <Image
                  src="/hero-image.jpg"
                  alt="AI Learning Platform"
                  className="object-cover w-full h-full"
                  fill={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/5 to-ai-blue/5 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Axiom.ai?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of personalized education with our
              cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-ai-purple to-ai-blue rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and transform your learning experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-ai-purple to-ai-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of learners who are already accelerating their
              skills with AI-powered education
            </p>
            <Link href="/create-course">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 "
              >
                Create Your First Course
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
                Axiom.ai
              </span>
            </div>
            <div className="text-muted-foreground">
              © 2024 Axiom.ai. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
