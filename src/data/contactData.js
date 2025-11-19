import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const contactData = {
  title: "Get In Touch",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  social: [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      handle: "@yourusername"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      handle: "Your Name"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      handle: "@yourusername"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      handle: "your.email@example.com"
    }
  ]
};
