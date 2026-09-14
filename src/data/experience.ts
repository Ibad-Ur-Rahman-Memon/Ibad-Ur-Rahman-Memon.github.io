import type { Experience } from './types';

/**
 * Employment and internship history.
 *
 * The TechInn Global internship is described as an internship — no paid
 * employment claim is made. Fiverr roles are stored as additional
 * experience with multiple roles at one platform.
 */
export const experience: Experience[] = [
  {
    organization: 'TechInn Global',
    role: 'Generative AI Intern – Custom Chatbot Development',
    location: 'Lahore, Pakistan (On-site)',
    startDate: '06/2025',
    endDate: '07/2025',
    current: false,
    responsibilities: [
      'Worked on AI-powered chatbot and NLP applications integrating OpenAI, Hugging Face, and Google Gemini APIs.',
      'Developed intelligent systems using LangChain, Streamlit, and FAISS for real-time information retrieval and automation.',
    ],
    technologies: ['OpenAI', 'Hugging Face', 'Google Gemini', 'LangChain', 'Streamlit', 'FAISS'],
    projects: ['ScholarBot', 'StyleHubAI', 'HalalRestaurantNameGenerator'],
  },
  {
    organization: 'Fiverr',
    role: 'Online Tutor (Math & Algebra)',
    roles: ['Online Tutor (Math & Algebra)', 'Graphic Designer', 'Programmer'],
    startDate: undefined,
    endDate: undefined,
    current: undefined,
    responsibilities: [
      'Provided online tutoring in Mathematics and Algebra.',
      'Delivered graphic design services.',
      'Delivered programming services.',
    ],
    technologies: undefined,
    projects: undefined,
  },
];
