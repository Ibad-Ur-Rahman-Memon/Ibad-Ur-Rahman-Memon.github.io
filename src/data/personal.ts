import type { Profile } from './types';

/**
 * Single source of truth for personal identity.
 *
 * Phone number and detailed home/location information are intentionally
 * excluded from the public portfolio.
 */
export const profile: Profile = {
  name: 'Ibad Ur Rahman',
  title: 'Computer Systems Engineer',
  summary:
    'Computer Systems Engineering graduate from Sukkur IBA University with hands-on experience in Artificial Intelligence, Machine Learning, Robotics, Embedded Systems, Full-Stack Development, and Cybersecurity fundamentals. Built 15+ academic and industry-oriented projects spanning Generative AI, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Computer Vision, Robotics (ROS2), Mobile Applications, ASP.NET Core, Flutter, Digital System Design, Operating Systems, and Embedded Systems. Completed a Generative AI internship focused on designing intelligent chatbot solutions using OpenAI, LangChain, Hugging Face, Google Gemini, FAISS, and Streamlit. Co-authored a peer-reviewed research publication in medical image analysis, demonstrating strong research aptitude and practical application of deep learning.',
  additionalContext:
    'Recognized for combining hardware and software engineering to solve real-world problems through interdisciplinary projects, leadership roles, technical event organization, and academic excellence. Passionate about AI, Intelligent Systems, Software Engineering, Robotics, and Cybersecurity, with a strong interest in pursuing research-driven graduate studies and contributing to innovative engineering teams worldwide.',
  location: 'Shikarpur, Pakistan',
  email: 'ibad.cse@gmail.com',
  phone: undefined,
  avatar: '/images/profile.jpg',
  resumeUrl: './resume/Ibad-Ur-Rahman-Detailed-Resume.pdf',
  social: [
    {
      type: 'email',
      label: 'Email',
      value: 'ibad.cse@gmail.com',
      href: 'mailto:ibad.cse@gmail.com',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'Ibad-Ur-Rahman-Memon',
      href: 'https://github.com/Ibad-Ur-Rahman-Memon',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'ibad-ur-rahman-memon',
      href: 'https://www.linkedin.com/in/ibad-ur-rahman-memon/',
    },
  ],
  interests: [
    'Artificial Intelligence',
    'Natural Language Processing',
    'Software Engineering',
    'Computer Vision',
    'Machine Learning',
    'Robotics',
    'Cybersecurity',
    'Human-Computer Interaction',
    'Embedded Systems',
    'Intelligent Systems',
    'Research & Innovation',
  ],
  languages: ['English', 'Sindhi', 'Urdu', 'Arabic'],
};
