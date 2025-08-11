import { Course } from "../types/course";

export const mockCourse: Course = {
  id: "1",
  title: "Python Programming Language",
  description: "Master Python from basics to advanced concepts with this comprehensive AI-generated course",
  difficulty: "Beginner",
  estimatedDuration: "8 weeks",
  progress: 25,
  createdAt: "2024-01-15",
  units: [
    {
      id: "unit-1",
      title: "Python Fundamentals",
      description: "Learn the basic syntax, variables, and data types in Python",
      progress: 75,
      chapters: [
        {
          id: "chapter-1-1",
          title: "Getting Started with Python",
          description: "Introduction to Python programming language and setting up your development environment",
          videoUrl: "dQw4w9WgXcQ",
          videoTitle: "Python Basics - Getting Started",
          duration: "12:30",
          summary: "This chapter covers the basics of Python installation, IDE setup, and writing your first Python program. You'll learn about Python's philosophy and why it's a great language for beginners.",
          completed: true,
          quiz: [
            {
              id: "q1",
              question: "What is Python?",
              options: [
                "A type of snake",
                "A programming language",
                "A web browser",
                "A database"
              ],
              correctAnswer: 1,
              explanation: "Python is a high-level, interpreted programming language known for its simplicity and readability."
            },
            {
              id: "q2",
              question: "Which of the following is the correct way to print 'Hello World' in Python?",
              options: [
                "echo('Hello World')",
                "print('Hello World')",
                "console.log('Hello World')",
                "printf('Hello World')"
              ],
              correctAnswer: 1,
              explanation: "In Python, we use the print() function to output text to the console."
            }
          ]
        },
        {
          id: "chapter-1-2",
          title: "Variables and Data Types",
          description: "Understanding different data types and how to work with variables",
          videoUrl: "dQw4w9WgXcQ",
          videoTitle: "Python Variables and Data Types",
          duration: "15:45",
          summary: "Learn about Python's dynamic typing system, different data types like strings, integers, floats, and booleans. Understand variable naming conventions and best practices.",
          completed: true,
          quiz: [
            {
              id: "q3",
              question: "Which of the following is NOT a valid Python data type?",
              options: ["int", "float", "string", "char"],
              correctAnswer: 3,
              explanation: "Python doesn't have a separate 'char' data type. Single characters are represented as strings of length 1."
            }
          ]
        },
        {
          id: "chapter-1-3",
          title: "Basic Operators",
          description: "Arithmetic, comparison, and logical operators in Python",
          videoUrl: "dQw4w9WgXcQ",
          videoTitle: "Python Operators Explained",
          duration: "18:20",
          summary: "Explore Python's operators including arithmetic (+, -, *, /), comparison (==, !=, <, >), and logical operators (and, or, not). Learn operator precedence and common use cases.",
          completed: false,
          quiz: [
            {
              id: "q4",
              question: "What is the result of 10 // 3 in Python?",
              options: ["3.33", "3", "4", "3.0"],
              correctAnswer: 1,
              explanation: "The // operator performs floor division, returning the integer part of the division result."
            }
          ]
        }
      ]
    },
    {
      id: "unit-2",
      title: "Control Structures",
      description: "Master conditional statements, loops, and control flow",
      progress: 0,
      chapters: [
        {
          id: "chapter-2-1",
          title: "Conditional Statements",
          description: "If, elif, and else statements for decision making",
          videoUrl: "dQw4w9WgXcQ",
          videoTitle: "Python Conditional Statements",
          duration: "14:15",
          summary: "Learn how to make decisions in your code using if, elif, and else statements. Understand indentation in Python and nested conditions.",
          completed: false,
          quiz: [
            {
              id: "q5",
              question: "What keyword is used for 'else if' in Python?",
              options: ["elseif", "elif", "else if", "elsif"],
              correctAnswer: 1,
              explanation: "Python uses 'elif' as the keyword for 'else if' conditions."
            }
          ]
        },
        {
          id: "chapter-2-2",
          title: "Loops in Python",
          description: "For loops, while loops, and loop control statements",
          videoUrl: "dQw4w9WgXcQ",
          videoTitle: "Mastering Python Loops",
          duration: "22:30",
          summary: "Understand how to repeat code execution using for and while loops. Learn about range(), loop control statements like break and continue, and nested loops.",
          completed: false,
          quiz: [
            {
              id: "q6",
              question: "Which statement is used to exit a loop prematurely?",
              options: ["exit", "break", "stop", "end"],
              correctAnswer: 1,
              explanation: "The 'break' statement is used to exit a loop before it has completed all iterations."
            }
          ]
        }
      ]
    },
    {
      id: "unit-3",
      title: "Functions and Modules",
      description: "Creating reusable code with functions and organizing code with modules",
      progress: 0,
      chapters: [
        {
          id: "chapter-3-1",
          title: "Defining Functions",
          description: "How to create and use functions in Python",
          videoUrl: "dQw4w9WgXcQ",
          videoTitle: "Python Functions Explained",
          duration: "19:45",
          summary: "Learn to define functions using the 'def' keyword, understand parameters and arguments, return values, and scope in Python functions.",
          completed: false,
          quiz: [
            {
              id: "q7",
              question: "What keyword is used to define a function in Python?",
              options: ["function", "def", "func", "define"],
              correctAnswer: 1,
              explanation: "The 'def' keyword is used to define functions in Python."
            }
          ]
        }
      ]
    }
  ]
};

export const mockCourses = [
  mockCourse,
  {
    id: "2",
    title: "How to Swim",
    description: "Learn swimming from basic water safety to advanced techniques",
    difficulty: "Beginner" as const,
    estimatedDuration: "6 weeks",
    progress: 0,
    createdAt: "2024-01-20",
    units: [
      {
        id: "swim-unit-1",
        title: "Water Safety & Basics",
        description: "Essential safety knowledge and getting comfortable in water",
        progress: 0,
        chapters: [
          {
            id: "swim-chapter-1-1",
            title: "Pool Safety Rules",
            description: "Important safety guidelines for swimming pools",
            videoUrl: "dQw4w9WgXcQ",
            videoTitle: "Swimming Pool Safety Essentials",
            duration: "8:15",
            summary: "Learn essential pool safety rules, understanding pool depths, and basic emergency procedures.",
            completed: false,
            quiz: [
              {
                id: "sq1",
                question: "What should you always do before entering a pool?",
                options: [
                  "Jump in immediately",
                  "Check the water depth",
                  "Start swimming right away",
                  "Ignore the rules"
                ],
                correctAnswer: 1,
                explanation: "Always check water depth and pool conditions before entering to ensure safety."
              }
            ]
          }
        ]
      }
    ]
  }
];