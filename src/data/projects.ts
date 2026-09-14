import type { Project } from './types';

/**
 * Portfolio projects.
 *
 * Featured projects receive the strongest visual emphasis.
 * URLs are populated only where verified. No live-demo URLs are invented.
 */
export const projects: Project[] = [
  {
    title: 'OmniMind – AI-Powered Mental Health Monitoring System',
    slug: 'omnimind',
    shortDescription:
      'AI-powered mental health monitoring system combining LLMs, RAG, and NLP with clinically validated assessments (PHQ-9, GAD-7, PSS-10, SPIN) to deliver personalized, evidence-based mental health support via a Flutter mobile app with real-time emotion detection and crisis intervention.',
    description:
      'AI-powered mental health monitoring system combining LLMs, RAG, and NLP with clinically validated assessments (PHQ-9, GAD-7, PSS-10, SPIN) to deliver personalized, evidence-based mental health support via a Flutter mobile app with real-time emotion detection and crisis intervention.',
    category: 'AI / Generative AI',
    technologies: ['LLMs', 'RAG', 'NLP', 'Flutter', 'Firebase'],
    featured: true,
    githubUrl: 'https://github.com/Ibad-Ur-Rahman-Memon/OmniMind',
    status: 'completed',
  },
  {
    title: 'ResumeForge AI – AI-Powered Career Toolkit',
    slug: 'resumeforge-ai',
    shortDescription:
      'Full-stack AI career toolkit built with ASP.NET Core 8 and Groq LLaMA 3.1, featuring a real-time resume builder, AI-driven ATS compatibility checker, and automated cover letter generation.',
    description:
      'Full-stack AI career toolkit built with ASP.NET Core 8 and Groq LLaMA 3.1, featuring a real-time resume builder, AI-driven ATS compatibility checker, and automated cover letter generation.',
    category: 'Software Engineering',
    technologies: ['ASP.NET Core', 'Groq LLaMA 3.1'],
    featured: true,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'FYP-Assist – Project Management Platform',
    slug: 'fyp-assist',
    shortDescription:
      'Mobile application using Flutter and Kotlin to streamline the management of Final Year Projects (FYP) for university students and supervisors, with automated project proposal tracking, task management, and repository linking.',
    description:
      'Developed a mobile application using Flutter and Kotlin to streamline the management of Final Year Projects (FYP) for university students and supervisors. Features automated project proposal tracking, task management, and repository linking to enhance academic collaboration. Built a robust backend to handle real-time project documentation and milestone tracking for university departments.',
    category: 'Software Engineering',
    technologies: ['Flutter', 'Kotlin'],
    featured: true,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'LiDAR-Reactive-Navigation – ROS2 Robotics',
    slug: 'lidar-reactive-navigation',
    shortDescription:
      'Reactive navigation system for autonomous robots using ROS2 and LiDAR sensor integration, with obstacle avoidance algorithms based on real-time sensor data and sensor fusion for autonomous path-planning.',
    description:
      'Developed a reactive navigation system for autonomous robots using ROS2 and LiDAR sensor integration. Implemented obstacle avoidance algorithms based on real-time sensor data, enabling the robot to navigate complex environments dynamically. Focused on mobile robot kinematics and sensor fusion to optimize autonomous path-planning and navigation efficiency.',
    category: 'Robotics',
    technologies: ['ROS2', 'LiDAR'],
    featured: true,
    githubUrl: 'https://github.com/Ibad-Ur-Rahman-Memon/Lidar-Reactive-Navigation-ROS2',
    status: 'completed',
  },
  {
    title: 'ScholarBot – AI-Powered Research Assistant',
    slug: 'scholarbot',
    shortDescription:
      'AI-powered academic assistant that lets users upload research PDFs or insert up to 3 article URLs, ask academic questions, and receive citation-aware responses in real time using OpenAI GPT-3.5, LangChain, FAISS, and sentence-transformers.',
    description:
      'Developed an AI-powered academic assistant that allows users to upload research PDFs or insert up to 3 article URLs, ask academic questions, and receive citation-aware responses in real time. Integrated OpenAI GPT-3.5, LangChain, FAISS, and sentence-transformers for intelligent document retrieval and summarization. Deployed using Streamlit for both local and Colab environments, enabling seamless academic exploration.',
    category: 'AI / Generative AI',
    technologies: ['OpenAI GPT-3.5', 'LangChain', 'FAISS', 'Sentence Transformers', 'Streamlit'],
    featured: true,
    githubUrl: 'https://github.com/Ibad-Ur-Rahman-Memon/ScholarBot',
    status: 'completed',
  },
  {
    title: 'StyleHub AI – Smart Inventory Q&A System',
    slug: 'stylehub-ai',
    shortDescription:
      'AI-driven inventory management system that answers natural language queries about T-shirt stock using Google Gemini for SQL generation, MySQL for real-time queries, and Streamlit for the web interface.',
    description:
      'Created an AI-driven inventory management system that answers natural language queries about T-shirt stock using Google Gemini for SQL generation, MySQL for real-time queries, and Streamlit for web interface. Implemented NLP-based query handling, discount-aware revenue calculations, and cached responses for efficiency. Designed responsive UI and optimized query performance using Python\u2019s lru_cache and LangChain few-shot learning.',
    category: 'AI / Generative AI',
    technologies: ['Google Gemini', 'MySQL', 'Streamlit', 'NLP', 'Python', 'LangChain'],
    featured: true,
    githubUrl: 'https://github.com/Ibad-Ur-Rahman-Memon/StyleHub-T-Shirts',
    status: 'completed',
  },
  {
    title: 'Halal Restaurant Name Generator – AI-Based Application',
    slug: 'halal-restaurant-generator',
    shortDescription:
      'AI-powered web app that generates culturally appropriate halal restaurant names and traditional menu items based on Islamic countries, featuring prompt-based regional authenticity and secure API handling through .env configuration.',
    description:
      'Developed an AI-powered web app that generates culturally appropriate halal restaurant names and traditional menu items based on Islamic countries. Built with Python, Streamlit, LangChain, and OpenAI API, featuring prompt-based regional authenticity and secure API handling through .env configuration. Showcases fusion of cultural heritage with modern AI technology.',
    category: 'AI / Generative AI',
    technologies: ['Python', 'Streamlit', 'LangChain', 'OpenAI API'],
    featured: false,
    githubUrl: 'https://github.com/Ibad-Ur-Rahman-Memon/halal-restaurant-generator',
    status: 'completed',
  },
  {
    title: 'Automatic Railway Gate Controller – DSD Project',
    slug: 'automatic-railway-gate-controller',
    shortDescription:
      'Automated railway safety system designed and simulated using Verilog HDL as part of a Digital System Design course, using a Finite State Machine (FSM) to control gate operations based on sensor inputs.',
    description:
      'Designed and simulated an automated railway safety system using Verilog HDL as part of a Digital System Design course. Implemented a Finite State Machine (FSM) to control gate operations based on sensor inputs, ensuring real-time responsiveness and mechanical reliability. Verified the hardware logic through extensive testbench simulations to handle diverse railway traffic scenarios and ensure safety standards.',
    category: 'Digital Systems',
    technologies: ['Verilog HDL', 'FSM'],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'RealixOS – Mini Operating System',
    slug: 'realixos',
    shortDescription:
      'Real-time OS featuring process management, memory management, and a CLI, with a round-robin scheduler for efficient task execution. Presented in a departmental exhibition.',
    description:
      'Developed a real-time OS featuring process management, memory management, and a CLI. Implemented a round-robin scheduler for efficient task execution. Presented in a departmental exhibition, aiming for top position.',
    category: 'Operating Systems',
    technologies: [],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'Autonomous Mobile Robot for Corrosion Detection',
    slug: 'autonomous-mobile-robot-corrosion-detection',
    shortDescription:
      'AMR designed for underground pipeline inspection using Arduino, with corrosion detection via ultrasonic sensors and a copper coil mechanism. Won 1st Position at the Tecnofun event at Shaikh Ayaz University.',
    description:
      'Designed an AMR for underground pipeline inspection using Arduino. Implemented corrosion detection via ultrasonic sensors and a copper coil mechanism. Won 1st Position at the Tecnofun event at Shaikh Ayaz University.',
    category: 'Robotics',
    technologies: ['Arduino', 'ultrasonic sensors', 'copper coil mechanism'],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'Network Security Implementation',
    slug: 'network-security-implementation',
    shortDescription:
      'Network topology simulating a secure corporate network, with firewalls, VLANs, and access control lists configured for secure communication.',
    description:
      'Configured firewalls, VLANs, and access control lists for secure communication. Designed a network topology simulating a secure corporate network.',
    category: 'Cybersecurity / Networking',
    technologies: ['Cisco Packet Tracer'],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'Image Deblurring and Restoration Using Wiener Filter',
    slug: 'image-deblurring-wiener-filter',
    shortDescription:
      'Simulation of motion blur and deblurring processes, exploring the impact of Gaussian noise and noise estimation on image quality improvement using MATLAB.',
    description:
      'Simulated motion blur and deblurring processes, exploring the impact of Gaussian noise and noise estimation on image quality improvement using MATLAB.',
    category: 'Computer Vision',
    technologies: ['MATLAB'],
    featured: false,
    githubUrl: 'https://github.com/Ibad-Ur-Rahman-Memon/image-deblurring-project',
    status: 'completed',
  },
  {
    title: '3D Model of Malaysian Petronas Twin Towers',
    slug: 'petronas-twin-towers-autocad',
    shortDescription:
      '3D model of the Petronas Towers created as part of the CAD course, improving 3D modeling and architectural visualization skills.',
    description:
      'Created a 3D model of the Petronas Towers as part of the CAD course, improving 3D modeling and architectural visualization skills.',
    category: 'CAD / Engineering',
    technologies: ['AutoCAD'],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'CSE Search Engine – GUI-Based',
    slug: 'cse-search-engine',
    shortDescription:
      'Search engine developed in Java as part of Object-Oriented Programming, featuring a Google-inspired GUI that displays department student data upon CMS ID or name search.',
    description:
      'Developed a search engine in Java as part of Object-Oriented Programming. Featured a Google-inspired GUI that displayed department student data upon CMS ID or name search.',
    category: 'Software Engineering',
    technologies: ['Java'],
    featured: false,
    githubUrl: 'https://github.com/Ibad-Ur-Rahman-Memon/CSE_Search_Engine',
    status: 'completed',
  },
  {
    title: 'Currency Converter – CLI-Based',
    slug: 'currency-converter',
    shortDescription:
      'Real-time Currency Converter developed using C++ that supports conversions between multiple currencies.',
    description:
      'Developed a real-time Currency Converter using C++ that supported conversions between multiple currencies.',
    category: 'Programming',
    technologies: ['C++'],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'LED Cube – The Basis of Hologram Technology',
    slug: 'led-cube',
    shortDescription:
      '3D LED cube demonstrating hologram technology concepts and screen structuring.',
    description:
      'Designed a 3D LED cube demonstrating hologram technology concepts and screen structuring.',
    category: 'Embedded Systems',
    technologies: [],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
  {
    title: 'Hydraulic Crane',
    slug: 'hydraulic-crane',
    shortDescription:
      'Hydraulic crane built using recycled materials as a physics project, winning 1st position at a district-level project expo.',
    description:
      'Built a hydraulic crane using recycled materials, won 1st position at a district-level project expo.',
    category: 'Digital Systems',
    technologies: [],
    featured: false,
    githubUrl: undefined,
    status: 'completed',
  },
];

/** Slugs of projects that should be featured on the landing page. */
export const featuredProjectSlugs: string[] = [
  'omnimind',
  'resumeforge-ai',
  'fyp-assist',
  'lidar-reactive-navigation',
  'scholarbot',
  'stylehub-ai',
];
