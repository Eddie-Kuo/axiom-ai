export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  videoTitle: string;
  summary: string;
  duration: string;
  quiz: Quiz[];
  completed: boolean;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
  progress: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedDuration: string;
  units: Unit[];
  progress: number;
  createdAt: string;
}