// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import bennettLogo from './assets/Bennett.jpg';
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import i1Logo from './assets/I1.jpg';
import i2Logo from './assets/I2.png';
import i3Logo from './assets/I3.png';
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: mysqlLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'PyTorch', logo: pythonLogo },
      { name: 'TensorFlow', logo: pythonLogo },
      { name: 'Scikit-learn', logo: pythonLogo },
      { name: 'LangChain', logo: pythonLogo },
      { name: 'OpenCV', logo: pythonLogo },
      { name: 'NLTK', logo: pythonLogo },
      { name: 'Hugging Face', logo: pythonLogo },
      { name: 'BERT', logo: pythonLogo },
    ],
  },
  {
    title: 'Web/Backend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'FastAPI', logo: pythonLogo },
      { name: 'Flask', logo: pythonLogo },
      { name: 'Django', logo: pythonLogo },
      { name: 'Socket.IO', logo: nodejsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Docker', logo: postmanLogo },
      { name: 'JWT', logo: javaLogo },
    ],
  },
  {
    title: 'Tools & Concepts',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'GitHub', logo: githubLogo },
    ],
  },
];

  /*
  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "1st Place Winner",
      company: "TechArena 2025 - Bennett University",
      date: "2025",
      desc: "Secured 1st place by developing EcoSaathi, an AI-powered WasteBot & ReuseBot using CNN models for automated waste segregation and classification. Architected real-time complaint system using Django & Flask with Flutter frontend, enabling citizen reporting to municipal authorities via RESTful APIs and geospatial tracking.",
      skills: [
        "Flutter",
        "Django",
        "Flask",
        "Python",
        "TensorFlow Lite",
        "MongoDB",
        "Google Maps API",
        "CNN",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "AI/ML Engineer",
      company: "MyProblem - Citizen Grievance Portal",
      date: "On-going",
      desc: "Developed full-stack AI grievance platform using MERN Stack and FastAPI microservices to auto-classify and route civic complaints using NLP. Trained and deployed BERT-based NLP classifier on 175,000+ records achieving 88% accuracy and 0.86 F1-score. Implemented severity prediction using XGBoost and duplicate detection via Word2Vec.",
      skills: [
        "PyTorch",
        "FastAPI",
        "React.js",
        "Node.js",
        "MongoDB",
        "BERT",
        "NLP",
        "Docker",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Computer Vision Engineer",
      company: "SaveLife - Accident Detection System",
      date: "On-going",
      desc: "Engineered AI emergency response system using MERN Stack and FastAPI to detect accidents from video feeds. Designed ResNet50 CNN + Bi-LSTM hybrid model achieving 92% accuracy and 0.89 F1-score. Automated workflow extracts frames, detects crash, calculates GPS, queries nearest hospitals, and sends real-time Socket.IO alerts.",
      skills: [
        "OpenCV",
        "ResNet50",
        "PyTorch",
        "Bi-LSTM",
        "FastAPI",
        "React.js",
        "Socket.IO",
        "MongoDB",
      ],
    },
  ];
  */

  // Experiences hidden from UI per user request
  export const experiences = [];
  
  export const education = [
    {
      id: 0,
      img: bennettLogo,
      school: "Bennett University, Gautam Buddh Nagar",
      date: "Aug 2023 - May 2027",
      grade: "On-going",
      desc: "Computer Science Engineering undergraduate specializing in Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision. Relevant Coursework: Data Structures, Algorithms, OOP, DBMS, Software Engineering, Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision. Winner of TechArena 2025 for developing EcoSaathi - AI-powered waste segregation and classification system.",
      degree: "Bachelor of Computer Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "MyProblem - AI Citizen Grievance Portal",
      description:
        "Full-stack AI grievance platform using MERN Stack and FastAPI microservices to auto-classify and route civic complaints. Trained fine-tuned BERT + Logistic Regression classifier on 175,000+ PGPORTAL records achieving 88% accuracy and 0.86 F1-score. Implemented severity prediction using XGBoost and duplicate detection via Word2Vec cosine similarity, reducing data redundancy.",
      image: i1Logo,
      tags: ["PyTorch", "FastAPI", "React.js", "Node.js", "BERT", "NLP", "Docker"],
      github: "https://github.com/HarshKumar100/MyProblem",
      webapp: "https://github.com",
    },
    {
      id: 1,
      title: "SaveLife - Real-Time Accident Detection System",
      description:
        "AI emergency response system using MERN Stack and FastAPI to detect accidents from video feeds. Designed ResNet50 CNN + Bi-LSTM hybrid deep learning model for temporal sequence analysis achieving 92% accuracy and 0.89 F1-score. Automated workflow: OpenCV extracts frames, model detects crash, calculates GPS, queries nearest hospitals via Haversine algorithm, and sends real-time Socket.IO alerts.",
      image: i2Logo,
      tags: ["OpenCV", "ResNet50", "PyTorch", "Bi-LSTM", "FastAPI", "Socket.IO", "React.js"],
      github: "https://github.com/HarshKumar100/savelife",
      webapp: "https://github.com",
    },
    {
      id: 2,
      title: "EcoSaathi - AI Waste Segregation System",
      description:
        "1st Place Winner TechArena 2025 - Developed EcoSaathi, AI-powered WasteBot & ReuseBot using CNN models for automated waste segregation and classification. Architected real-time complaint system using Django & Flask with Flutter frontend for citizen reporting to municipal authorities. Engineered analytics dashboards with geospatial heatmaps using Python to optimize waste collection routes.",
      image: i3Logo,
      tags: ["Flutter", "Django", "Flask", "TensorFlow Lite", "CNN", "MongoDB", "Python"],
      github: "https://github.com/HarshKumar100/EcoSathi",
      webapp: "https://github.com",
    },
    // {
    //   id: 3,
    //   title: "BERT-based NLP Model for Text Classification",
    //   description:
    //     "Fine-tuned BERT transformer model for multi-class text classification in the grievance domain. Achieved 88% accuracy with comprehensive data preprocessing, tokenization, and hyperparameter tuning. Integrated with FastAPI backend for real-time inference and classification API endpoints.",
    //   image: npmLogo,
    //   tags: ["PyTorch", "BERT", "NLP", "FastAPI", "Transformers"],
    //   github: "https://github.com",
    //   webapp: "https://github.com",
    // },
    // {
    //   id: 4,
    //   title: "ResNet50 + Bi-LSTM for Video Analysis",
    //   description:
    //     "Hybrid deep learning model combining ResNet50 CNN for spatial feature extraction and Bi-LSTM for temporal sequence analysis. Optimized for accident detection in video streams with 92% accuracy. Includes preprocessing pipeline for video frame extraction and post-processing for alert generation.",
    //   image: taskremLogo,
    //   tags: ["PyTorch", "ResNet50", "Bi-LSTM", "OpenCV", "Computer Vision"],
    //   github: "https://github.com",
    //   webapp: "https://github.com",
    // },
    // {
    //   id: 5,
    //   title: "RESTful API Development with FastAPI",
    //   description:
    //     "Built robust microservices using FastAPI for multiple AI/ML projects. Implemented JWT authentication, request validation, error handling, and comprehensive API documentation. Designed scalable endpoints for model inference, data processing, and real-time alerts.",
    //   image: webverLogo,
    //   tags: ["FastAPI", "Python", "REST API", "JWT", "Microservices"],
    //   github: "https://github.com",
    //   webapp: "https://github.com",
    // },
    // {
    //   id: 6,
    //   title: "MERN Stack Full-Stack Applications",
    //   description:
    //     "Developed multiple full-stack applications using MongoDB, Express.js, React.js, and Node.js. Built responsive UIs with React.js, implemented backend APIs with Express.js, managed databases with MongoDB, and deployed with Docker. Integrated with machine learning backends for intelligent features.",
    //   image: cmLogo,
    //   tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker"],
    //   github: "https://github.com",
    //   webapp: "https://github.com",
    // },
    // {
    //   id: 7,
    //   title: "Geospatial Analytics Dashboard",
    //   description:
    //     "Developed analytics dashboards with geospatial heatmaps using Python, React.js, and mapping APIs. Visualized waste collection routes, citizen complaints distribution, and optimized resource allocation. Implemented real-time data updates and interactive filtering for decision-making.",
    //   image: imagesearchLogo,
    //   tags: ["React.js", "Python", "Maps API", "Data Visualization", "Analytics"],
    //   github: "https://github.com",
    //   webapp: "https://github.com",
    // },
    // {
    //   id: 8,
    //   title: "Word2Vec Duplicate Detection System",
    //   description:
    //     "Implemented duplicate grievance detection using Word2Vec embeddings and cosine similarity. Trained on complaint text data to identify similar issues and reduce redundant submissions. Improved data quality and efficiency of complaint processing pipeline.",
    //   image: removebgLogo,
    //   tags: ["NLP", "Word2Vec", "Scikit-learn", "Python"],
    //   github: "https://github.com",
    //   webapp: "https://github.com",
    // },
  ];  