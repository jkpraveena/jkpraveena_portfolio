import { Project } from '../types';

export const projects: Project[] = [

    {
        "id": "code-collaborator-tool",
        "title": "CoCode: Real-Time Code Collaboration Tool",
        "description": "A web-based platform enabling real-time collaborative coding with multiple users.",
        "longDescription": "CoCode is an innovative real-time collaborative coding platform designed to enhance productivity for developers working remotely. It integrates live code sharing, chat functionalities, and multi-language support with minimal latency, enabling seamless teamwork. With advanced features like version control integration and live debugging tools, it redefines how teams approach coding projects collaboratively.",
        "tags": ["Collaboration", "WebRTC", "JavaScript", "Node.js"],
        "imageUrl": "p_assets/cocode.jpg",
        "githubUrl": "https://github.com/jkpraveena/CoCode.git",
        "demoUrl": "https://drive.google.com/file/d/1_jNFUgf0CKRtnbciiQRUb0Xwvo9nJF1c/view?usp=drive_link",
        "highlights": [
            "Achieved sub-50ms latency for real-time multi-user coding sessions.",
            "Integrated syntax highlighting for 20+ programming languages.",
            "Implemented conflict resolution algorithms to ensure code consistency.",
            "Integrated live chat and video conferencing for effective communication.",
            "Built a scalable architecture handling 500+ concurrent users."
        ],
        "techStack": ["Node.js", "Socket.IO", "React", "Redis", "PostgreSQL"],
        "technicalDetails": [
            {
                "title": "Real-Time Synchronization",
                "description": "Implemented WebRTC and Socket.IO to achieve real-time, low-latency synchronization of code changes across users."
            },
            {
                "title": "Scalable Backend Architecture",
                "description": "Designed a server-side architecture using Redis for session management and PostgreSQL for persistent storage, ensuring scalability for high user traffic."
            },
            {
                "title": "Version Control Integration",
                "description": "Integrated Git for version control, allowing users to commit, push, and revert changes directly within the platform."
            },
            {
                "title": "Interactive Frontend Design",
                "description": "Developed a user-friendly interface using React with features like real-time syntax highlighting, debugging tools, and a drag-and-drop file system."
            }
        ]
    },

    {
        id: 'ai-powered-faq-chatbot',
        title: 'AI-Powered FAQ Chatbot',
        description: 'A chatbot leveraging NLP and SQLite for intelligent FAQ management',
        longDescription: 'Developed a robust chatbot capable of understanding and answering user queries with high accuracy. This project integrates SQLite for dynamic FAQ storage, uses advanced NLP techniques for preprocessing, and applies TF-IDF vectorization with cosine similarity for contextual fallback responses.',
        tags: ['AI/ML', 'NLP', 'Python', 'SQLite'],
        imageUrl: 'p_assets/ai_bot.jpg',
        githubUrl: 'https://github.com/jkpraveena/AI_ChatBot.git',
        demoUrl: 'https://drive.google.com/file/d/1XW-exN_M0h4DFVwTMjCN8cF10OjaePin/view?usp=drive_link',
        highlights: [
          'Achieved 90% accuracy in query matching using SQLite and cosine similarity',
          'Handled both exact matches and contextual fallback with seamless integration',
          'Preprocessed text data using lemmatization and tokenization for enhanced understanding',
          'Designed an extensible architecture to support future feature expansions',
          'Optimized query handling for scalability and multi-domain adaptability'
        ],
        techStack: ['Python', 'NLTK', 'SQLite', 'TF-IDF', 'Cosine Similarity'],
        technicalDetails: [
          {
            title: 'Database Integration',
            description: 'Integrated SQLite to dynamically store and retrieve FAQs, enabling real-time updates without service disruption.'
          },
          {
            title: 'Natural Language Processing',
            description: 'Leveraged NLTK for text preprocessing, including tokenization, lemmatization, and punctuation removal, to ensure accurate query understanding.'
          },
          {
            title: 'TF-IDF and Cosine Similarity',
            description: 'Implemented TF-IDF vectorization to evaluate term importance and cosine similarity to find the most relevant response for fallback queries.'
          },
          {
            title: 'Fallback Mechanism',
            description: 'Developed a fallback mechanism that intelligently provides responses based on similarity scores when exact matches are unavailable.'
          },
          {
            title: 'Scalability and Extensibility',
            description: 'Built a modular architecture to adapt to new domains by updating the database, ensuring high scalability and long-term use cases.'
          }
        ]
      },
     
  {
    "id": "fake-news-detection",
    "title": "Fake News Detection System",
    "description": "A machine learning model that classifies news articles as real or fake.",
    "longDescription": "Developed a fake news detection system using Logistic Regression and TF-IDF Vectorization. The model preprocesses text data through stemming and missing value handling and achieves 95% accuracy on the test set. The application is scalable for large datasets and can be deployed for real-time fake news detection on news platforms and social media.",
    "tags": ["AI/ML", "Python", "Logistic Regression", "TF-IDF", "Natural Language Processing"],
    "imageUrl": "p_assets/fake_news.jpg",
    "githubUrl": "https://github.com/jkpraveena/Fake_News_Detection.git",
    "demoUrl": "https://drive.google.com/file/d/1ueHfzyZp8b2BNS20eZzOuQVjSYjJtHal/view?usp=drive_link",
    "highlights": [
        "Achieved 95% accuracy on the test set",
        "Built a robust text preprocessing pipeline including stemming and handling missing values",
        "Integrated TF-IDF vectorization for effective text representation",
        "Implemented a scalable model capable of handling large datasets",
        "Can be deployed for real-time fake news detection across news platforms"
    ],
    "techStack": ["Python", "scikit-learn", "NLTK", "Pandas", "Logistic Regression", "TF-IDF"],
    "technicalDetails": [
        {
            "title": "Text Preprocessing Pipeline",
            "description": "Developed a preprocessing pipeline that includes handling missing values, combining text features (author + title), and applying Porter Stemmer for text normalization."
        },
        {
            "title": "Model Training & Evaluation",
            "description": "Trained a Logistic Regression model using TF-IDF vectorized text data. Evaluated the model with a 95% accuracy on the test set, ensuring its reliability and efficiency."
        },
        {
            "title": "Scalability & Deployment",
            "description": "Designed the system to be scalable for large datasets and real-time predictions, making it suitable for deployment in news websites and social media platforms."
        },
        {
            "title": "Real-time Prediction",
            "description": "Implemented real-time prediction functionality, allowing users to classify news articles as real or fake with high confidence."
        }
    ]
 },

 {
    "id": "biometric-pdf-encryption",
    "title": "Biometric PDF Encryption and Decryption System",
    "description": "A secure document management system that uses face recognition for locking and unlocking PDFs.",
    "longDescription": "Developed a secure system where users can lock and unlock PDF documents using biometric authentication. The system leverages real-time face recognition to unlock encrypted PDFs, ensuring that sensitive documents are accessed only by authorized users.",
    "tags": ["AI/ML", "Face Recognition", "Python", "OpenCV", "PyPDF2"],
    "imageUrl": "p_assets/pdf.jpg",
    "githubUrl": "https://github.com/jkpraveena/pdf_unlocking_using_FaceRecognition.git",
    "demoUrl": "https://drive.google.com/file/d/1d-oOXyzh1E8fhfscLJ46LbWdr1-EAV9c/view?usp=drive_link",
    "highlights": [
      "Implemented face recognition-based authentication for secure PDF decryption",
      "Encrypted and decrypted PDF files using PyPDF2 library with password protection",
      "Achieved 95% accuracy in face recognition under varied lighting conditions",
      "Developed scalable system that can handle multi-user face registration",
      "Ensured high document security by integrating biometric login with encryption"
    ],
    "techStack": ["Python", "OpenCV", "face_recognition", "PyPDF2", "NumPy"],
    "technicalDetails": [
      {
        "title": "Face Registration and Recognition",
        "description": "Utilized the 'face_recognition' library to capture and encode facial features, allowing for secure authentication and unlocking of PDF files."
      },
      {
        "title": "PDF Encryption and Decryption",
        "description": "Leveraged PyPDF2 to implement password-based encryption and decryption of PDF documents, enabling secure storage and access control."
      },
      {
        "title": "Real-Time Face Detection",
        "description": "Built a real-time face detection system using OpenCV to authenticate users before allowing them to access locked PDFs."
      },
      {
        "title": "Multi-User Scalability",
        "description": "Designed the system to support multi-user face registration and recognition, making it suitable for enterprise use where different users may access various encrypted documents."
      }
    ]
},

{
    "id": "voice-activated-image-capture",
    "title": "Voice-Activated Image Capture System",
    "description": "A hands-free system that captures images on voice commands using speech recognition and computer vision.",
    "longDescription": "Developed an innovative voice-activated image capture system that integrates speech recognition with OpenCV, enabling seamless image capture without user interaction. The system listens for specific voice commands and automatically triggers the camera to take high-quality images, optimized for real-time use cases such as healthcare, security, and accessibility.",
    "tags": ["AI/ML", "Python", "OpenCV", "Speech Recognition"],
    "imageUrl": "p_assets/voice.jpg",
    "githubUrl": "https://github.com/jkpraveena/capture_img_with_voice.git",
    "demoUrl": "https://drive.google.com/file/d/1TxPfonotMyh3xyH5tkjj27z4BrCpsxcV/view?usp=drive_link",
    "highlights": [
      "Achieved 95% speech command recognition accuracy in noisy environments",
      "Ensured 99% image capture success rate for reliable results",
      "Built scalable solution suitable for healthcare and security applications",
      "Improved accessibility for hands-free photo-taking, especially in fieldwork",
      "Real-time image processing with seamless integration of voice and vision"
    ],
    "techStack": ["Python", "OpenCV", "SpeechRecognition", "Flask", "TensorFlow"],
    "technicalDetails": [
      {
        "title": "Voice Command Integration",
        "description": "Utilized the SpeechRecognition library for accurate and responsive voice command recognition, enabling hands-free image capture with 95% accuracy."
      },
      {
        "title": "Image Capture and Processing",
        "description": "Integrated OpenCV for real-time camera access and image capture, ensuring high-quality image processing with a 99% success rate."
      },
      {
        "title": "Scalable Application",
        "description": "Designed the system to be easily scalable for integration with other AI-driven applications such as medical imaging or security systems."
      },
      {
        "title": "User-Centric Accessibility",
        "description": "Developed a user-friendly interface to provide accessibility for individuals with limited mobility or disabilities, enhancing interaction via voice commands."
      }
    ]
  },
  {
    "id": "ocr-image-text-extraction",
    "title": "OCR-based Text Extraction Tool",
    "description": "A powerful tool for extracting text from images using EasyOCR and OpenCV.",
    "longDescription": "Developed an advanced OCR-based text extraction tool that leverages EasyOCR for detecting text in images. This tool supports text recognition with high accuracy, processes images, and visualizes the extracted text, making it ideal for use in document digitization and automated form processing.",
    "tags": ["AI/ML", "Python", "Computer Vision"],
    "imageUrl": "p_assets/text.jpg",
    "githubUrl": "https://github.com/jkpraveena/text-from-image.git",
    "demoUrl": "https://drive.google.com/file/d/1o09rr3K7Cvyvj4LNafMb_wMNawwXRyhO/view?usp=drive_link",
    "highlights": [
      "Leveraged EasyOCR and OpenCV for real-time text extraction from images",
      "Implemented confidence-based filtering to ensure text accuracy",
      "Designed an intuitive display that highlights detected text regions",
      "Optimized the text extraction pipeline for faster processing times",
      "Enabled direct export of extracted text to CSV files"
    ],
    "techStack": ["Python", "EasyOCR", "OpenCV", "Matplotlib"],
    "technicalDetails": [
      {
        "title": "OCR Model Integration",
        "description": "Utilized EasyOCR, a deep learning-based OCR library, for accurate text recognition in multiple languages. Integrated with OpenCV for image preprocessing and visualization."
      },
      {
        "title": "Image Processing Pipeline",
        "description": "Built a pipeline using OpenCV to handle image preprocessing tasks such as resizing, filtering, and contrast enhancement to improve OCR accuracy."
      },
      {
        "title": "Confidence-based Filtering",
        "description": "Implemented a confidence threshold filter to ensure only text with a high probability of accuracy is displayed, making the extraction process more reliable."
      },
      {
        "title": "Text Visualization",
        "description": "Developed a system to visualize detected text and its bounding boxes directly on the input image using OpenCV and Matplotlib, providing an intuitive result display."
      }
    ]
},

{
  id: 'dream-insight-analyzer',
  title: 'Dream Oracle (Insight Analyzer)',
  description: 'A web application that interprets dreams and provides motivational insights',
  longDescription: 'Developed an interactive platform that takes user-input dreams and provides tailored insights, interpretations, and growth-oriented messages. The application is designed to inspire and motivate users, with a visually appealing interface and robust backend logic.',
  tags: ['AI/ML', 'Psychology', 'Web Development'],
  imageUrl: 'p_assets/dream.jpg',
  githubUrl: 'https://github.com/jkpraveena/Dream-Oracle.git',
  demoUrl: 'https://drive.google.com/file/d/1ODX96mv4qnw56eDX2h_8hUj8LGPndGCy/view?usp=drive_link',
  highlights: [
    'Built an intuitive and responsive user interface using modern web technologies',
    'Implemented a rule-based engine for interpreting dreams and delivering insights',
    'Included motivational quotes and growth messages personalized for users',
    'Optimized backend to handle multiple user sessions seamlessly',
    'Ensured cross-browser compatibility and mobile responsiveness'
  ],
  techStack: ['TypeScript', 'HTML', 'CSS', 'JavaScript'],
  technicalDetails: [
    {
      title: 'Dream Interpretation Engine',
      description: 'Developed a backend logic that analyzes dream input and matches it with pre-defined psychological and motivational patterns.'
    },
    {
      title: 'Frontend User Experience',
      description: 'Created a visually appealing and highly interactive interface with animations and dynamic content to engage users.'
    },
    {
      title: 'Responsive Design',
      description: 'Ensured the platform is fully responsive and accessible across devices, providing a consistent experience for mobile and desktop users.'
    },
    {
      title: 'Motivational Insights',
      description: 'Integrated a database of motivational quotes and growth messages, tailored based on dream interpretations.'
    }
  ]
},
{
  id: 'global-happiness-dashboard',
  title: 'Global Happiness Dashboard',
  description: 'A simple yet interactive dashboard visualizing global happiness trends based on country-wise data',
  longDescription: 'Built an engaging dashboard to display happiness metrics for countries using a static sample database. The dashboard showcases trends based on age demographics, happiness scores, and basic analysis of available data. Featuring stunning visualizations, the platform highlights the top 5 happiest countries dynamically.',
  tags: ['Data Visualization', 'Web Development', 'JavaScript'],
  imageUrl: 'p_assets/happiness.jpg',
  githubUrl: 'https://github.com/jkpraveena/global_happiness_dashboard.git',
  demoUrl: 'https://drive.google.com/file/d/1nmkeNX9nGGAeB93SXS8SnWt-KO60XbhQ/view?usp=drive_link',
  highlights: [
    'Designed interactive visualizations using vanilla JavaScript and chart libraries',
    'Developed a sample database for different countries with age-based happiness metrics',
    'Highlighted top 5 happiest countries dynamically from the database',
    'Ensured responsiveness for desktop and mobile devices',
    'Focused on simple implementation with highly intuitive user interactions'
  ],
  techStack: ['HTML', 'CSS', 'JavaScript'],
  technicalDetails: [
    {
      title: 'Sample Database Design',
      description: 'Created a static JSON database for countries, containing happiness scores by age groups, and used JavaScript to filter and display data dynamically.'
    },
    {
      title: 'Data Visualization',
      description: 'Implemented bar charts, line graphs, and pie charts using lightweight JavaScript libraries like Chart.js for interactive visualizations.'
    },
    {
      title: 'Top 5 Happiest Countries',
      description: 'Built a simple JavaScript function to calculate and display the top 5 happiest countries from the dataset dynamically.'
    },
    {
      title: 'User Interaction',
      description: 'Developed features such as hover effects, dropdown filters, and zoomable charts to enhance user engagement with the data.'
    },
    {
      title: 'Responsive Design',
      description: 'Ensured the dashboard adapts seamlessly across devices with media queries and flexible layouts in CSS.'
    }
  ]
},

{
  id: 'market-basket-analysis',
  title: 'Market Basket Analysis using Apriori Algorithm',
  description: 'A Python project implementing the Apriori algorithm to identify association rules in transaction data',
  longDescription: 'Developed a Market Basket Analysis tool that identifies frequent itemsets and generates association rules to provide actionable insights into customer purchase behavior. The project uses transactional data to predict items that are often bought together, helping businesses design better promotional strategies.',
  tags: ['Data Analysis', 'Python', 'Machine Learning'],
  imageUrl: 'p_assets/recommendation.jpg',
  githubUrl: 'https://github.com/jkpraveena/recommendation_apriori_system.git',
  demoUrl: 'https://drive.google.com/file/d/1Kk4kfOgu-ZJ6PIb2cBwMILDZMra9ldvT/view?usp=drive_link',
  highlights: [
    'Implemented the Apriori algorithm for rule mining',
    'Processed transactional data with over 7500 transactions',
    'Identified top association rules with high confidence and lift',
    'Customizable parameters for support, confidence, and lift',
    'Generated insights for cross-selling and promotional strategies'
  ],
  techStack: ['Python', 'Pandas', 'Matplotlib', 'Apyori'],
  technicalDetails: [
    {
      title: 'Data Preprocessing',
      description: 'Converted transactional data into a format suitable for association rule mining.'
    },
    {
      title: 'Apriori Algorithm',
      description: 'Implemented the Apriori algorithm to extract association rules with user-defined thresholds.'
    },
    {
      title: 'Rule Visualization',
      description: 'Displayed the strongest rules using metrics like confidence and lift, highlighting their potential for actionable insights.'
    },
    {
      title: 'Customizability',
      description: 'Allowed adjustment of parameters such as support, confidence, and lift to tailor results for different datasets.'
    }
  ]
},

{
  id: 'cancer-prediction',
  title: 'Cancer Prediction System',
  description: 'A system to predict cancer diagnosis (benign/malignant) using multiple machine learning models.',
  longDescription: 'Built a cancer prediction system that evaluates multiple machine learning models for accuracy. The project uses Grid Search for hyperparameter tuning and visualizes model performance for better insights.',
  tags: ['Machine Learning', 'Data Science', 'Healthcare'],
  imageUrl: 'p_assets/cancer.jpg',
  githubUrl: 'https://github.com/jkpraveena/cancer_prediction.git',
  demoUrl: 'https://drive.google.com/file/d/1svkgZlM9oR2kS6Wt2KnHVx_yv0sUeZgA/view?usp=drive_link',
  highlights: [
    'Implemented multiple ML models and optimized them with Grid Search.',
    'Achieved high accuracy by preprocessing and scaling the dataset.',
    'Visualized model performance with interactive graphs.',
    'Trained and evaluated models with cross-validation.',
    'Selected the best-performing model for cancer prediction.'
  ],
  techStack: ['Python', 'scikit-learn', 'Matplotlib', 'Pandas', 'Numpy'],
  technicalDetails: [
    {
      title: 'Data Preprocessing',
      description: 'Normalized features and transformed data for better model performance. Removed unnecessary columns for cleaner input.'
    },
    {
      title: 'Model Training',
      description: 'Trained models like SVM, Random Forest, Logistic Regression, etc., and used Grid Search for parameter optimization.'
    },
    {
      title: 'Performance Comparison',
      description: 'Used cross-validation and visualized results to compare model performance and select the best-performing model.'
    },
    {
      title: 'Polynomial Regression',
      description: 'Implemented Polynomial Regression to capture non-linear patterns in data and evaluated its performance.'
    }
  ]
}
  

 
];
