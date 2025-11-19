import { 
  Code2, 
  Palette, 
  Database, 
  Layout, 
  Terminal,
  GitBranch,
  Smartphone,
  Server,
  Cloud,
  Cpu,
  FileJson,
  Workflow
} from 'lucide-react';

export const skillsData = {
  title: "Skills & Technologies",
  description: "Technologies and tools I work with to bring ideas to life",
  categories: [
    {
      name: "Core Skills",
      skills: [
        { icon: Code2, name: "JavaScript", color: "text-yellow-500" },
        { icon: Code2, name: "React", color: "text-blue-500" },
        { icon: Layout, name: "HTML5", color: "text-orange-500" },
        { icon: Palette, name: "CSS3", color: "text-blue-400" },
        { icon: FileJson, name: "TypeScript", color: "text-blue-600" },
        { icon: GitBranch, name: "Git & GitHub", color: "text-gray-600 dark:text-gray-400" }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { icon: Layout, name: "Tailwind CSS", color: "text-cyan-500" },
        { icon: Workflow, name: "Framer Motion", color: "text-purple-500" },
        { icon: Code2, name: "Next.js", color: "text-gray-800 dark:text-gray-200" },
        { icon: Smartphone, name: "Responsive Design", color: "text-green-500" }
      ]
    },
    {
      name: "Backend & Tools",
      skills: [
        { icon: Server, name: "Node.js", color: "text-green-600" },
        { icon: Database, name: "MongoDB", color: "text-green-500" },
        { icon: Terminal, name: "VS Code", color: "text-blue-500" },
        { icon: Cloud, name: "Vercel", color: "text-gray-800 dark:text-gray-200" }
      ]
    }
  ],
  learning: [
    { icon: Cpu, name: "Advanced React Patterns", color: "text-blue-500" },
    { icon: Server, name: "Express.js", color: "text-gray-600 dark:text-gray-400" },
    { icon: Cloud, name: "AWS Services", color: "text-orange-500" },
    { icon: Database, name: "PostgreSQL", color: "text-blue-600" }
  ]
};
