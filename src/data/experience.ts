import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    "id": "farmo_sih",
    "title": "FarmO - AI-powered Crop Disease Prediction and Market Access",
    "company": "Smart India Hackathon (SIH)",
    "period": "December 2024",
    "description": [
      "Developed an AI-powered app for crop disease detection and prediction using image recognition and historical data.",
      "Implemented core features including AI disease detection, AI disease prediction, and direct market access for farmers.",
      "Led the backend and AI/ML development, ensuring seamless integration of machine learning models with the app.",
      "The app supports multiple Indian languages, making it accessible to farmers across diverse regions.",
      "Incorporated a community platform within the app, enabling farmers to connect, share tips, and discuss farming practices.",
      "Built a direct sales feature that allows farmers to sell their produce to consumers, eliminating middlemen and maximizing profits.",
      "Participated in the Smart India Hackathon (SIH) with FarmO, competing among hundreds of teams, showcasing the app's potential to assist both urban and traditional farmers.",
      "Though not selected for the final round, the project received valuable feedback and has the potential for future development."
    ],
    "skills": ["Backend Development", "AI/ML", "Flask API", "TensorFlow", "Problem Solving", "Teamwork", "Community Building", "Direct Sales Integration"]
  },
  {
    "id": "hackbattle_gravitas_vit_ieee",
    "title": "Health and Fitness AR Platform with Dashboard",
    "company": "HackBattle Gravitas - VIT IEEE CS Society",
    "period": "November 2024",
    "description": [
      "Developed an AR-powered health and fitness platform with a gamified experience and a comprehensive dashboard to track progress.",
      "Implemented core fitness features using C++ to provide a smooth user experience and real-time performance tracking.",
      "Integrated cancer prediction model using AI/ML techniques to analyze health data and predict potential cancer risks.",
      "Built a text detection feature to extract medical information from scanned images of medical documents, improving accessibility for users.",
      "While the project was not selected as the winner, it demonstrated potential to impact the health and fitness domain through innovative use of AR, AI, and gamification."
    ],
    "skills": ["C++", "AI/ML", "Augmented Reality (AR)", "Text Detection", "Gamification", "Health & Fitness", "Dashboard Development"]
  },
];


export const education: Education[] = [
  {
    degree: 'B Tech in Computer Science',
    school: 'Vellore Institute of Technology, Vellore',
    period: '2023-2027',
    description: 'Focused on Software Development & Problem Solving',
  },
  {
    degree: 'HSC',
    school: 'Spring Days School, Vellore',
    period: '2022-2023',
    description: 'CBSE',
  },
];

export const certificates = [
  {
    id: 'monitoring-devops',
    title: 'Monitoring and Observability for Development and DevOps',
    company: 'IBM Developer Skills Network',
    period: 'July 16, 2024',
    description: [
      'Gained insights into monitoring and observability practices in software development and DevOps',
      'Learned to use tools for real-time application monitoring and performance analysis',
      'Built workflows to enhance software reliability and troubleshoot effectively',
    ],
    skills: ['Monitoring', 'Observability', 'DevOps', 'Performance Analysis'],
    imageUrl: 'p_assets/ibm.png',
  },
  {
    id: 'data-science',
    title: 'Introduction to Data Science',
    company: 'Cisco',
    period: 'March 17, 2024',
    description: [
      'Completed an in-depth course on the fundamentals of data science',
      'Learned data analysis, visualization, and introductory machine learning techniques',
      'Practiced with Python-based tools such as Pandas, Matplotlib, and Scikit-learn',
    ],
    skills: ['Data Science', 'Python', 'Data Visualization'],
    imageUrl: 'p_assets/CCisco.png',
  },
  
];