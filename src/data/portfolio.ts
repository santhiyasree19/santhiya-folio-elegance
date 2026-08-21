export const profile = {
  name: "Santhiya Sree S",
  role: "MCA Student | Aspiring Software & IT Professional",
  intro:
    "I am an MCA student with knowledge in programming, database management, web technologies, .NET, Linux, and data visualization. I enjoy building practical digital solutions and continuously learning new technologies.",
  about: [
    "I am currently pursuing a Master of Computer Applications at Holy Cross College (Autonomous). I have developed knowledge in programming, web technologies, databases, .NET, Linux, and data visualization through academic learning, internships, certifications, and projects.",
    "I am interested in building practical technology solutions and continuously improving my technical and professional skills. I am seeking opportunities to begin and grow my career in the IT industry.",
  ],
  phone: "9952768022",
  email: "sakthilakshmi4345@gmail.com",
  github: "https://github.com/santhiyasree19",
  linkedin: "https://www.linkedin.com/in/santhiyasree",
  resumeUrl: "/__l5e/assets-v1/6e67d839-bc85-43e5-b588-312cd91d66f1/SANTHIYA_RESUME.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const techBadges = [
  "C",
  "Java",
  "C#",
  "HTML",
  "CSS",
  "SQL",
  ".NET",
  "MySQL",
  "Linux",
  "VS Code",
];

export const highlights = [
  { icon: "graduation", label: "MCA Student" },
  { icon: "code", label: "Aspiring IT Professional" },
  { icon: "pin", label: "India" },
  { icon: "sprout", label: "Continuous Learner" },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "Holy Cross College (Autonomous)",
    score: "CGPA: 8.0",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Holy Cross College (Autonomous)",
    score: "CGPA: 7.14",
  },
  {
    degree: "HSC",
    school: "Periyar Centenary Memorial Matriculation Higher Secondary School",
    score: "Percentage: 69%",
  },
  {
    degree: "SSLC",
    school: "Periyar Centenary Memorial Matriculation Higher Secondary School",
    score: "Percentage: 67%",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "code",
    items: ["C", "Java", "C#", "HTML", "CSS", "SQL"],
  },
  {
    title: "Domains & Technologies",
    icon: "layers",
    items: [".NET", "Linux", "DBMS"],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: ["MS Office", "MySQL", "Visual Studio Code"],
  },
];

export const internships = [
  {
    company: "ILIFE TECHNOLOGIES",
    domain: "PHP & MySQL",
    date: "20.09.2023",
  },
  {
    company: "METS COMPUTER EDUCATION",
    domain: "Java with OOPS",
    date: "24.02.2024",
  },
  {
    company: "T4TEQ SOFTWARE SOLUTIONS",
    domain: "Data Visualization using Power BI",
    date: "20.02.2025",
  },
  {
    company: "HCIICT",
    domain: "Sensor Technologies",
    date: "16.09.2025",
  },
];

export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Smart EV Charging Station Management and Analytics System",
    description:
      "A smart system designed to manage EV charging station operations and support analytics for better monitoring and management.",
    tags: ["Web Application", "Analytics", "Database", "Management System"],
    highlights: [
      "Manages EV charging station operations",
      "Supports analytics for monitoring and management",
      "Database-driven management workflow",
    ],
  },
  {
    number: "02",
    title: "Virtual Mouse",
    description:
      "A computer interaction project that enables mouse control using virtual or gesture-based interaction.",
    tags: ["Computer Vision", "Gesture Interaction", "Python"],
    highlights: [
      "Mouse control through gesture-based interaction",
      "Explores computer vision concepts",
      "Focus on natural human-computer interaction",
    ],
  },
  {
    number: "03",
    title: "Shopping Cart Website",
    description:
      "A web-based shopping cart application designed to provide a simple and user-friendly online shopping experience.",
    tags: ["HTML", "CSS", "Web Development"],
    highlights: [
      "Simple and user-friendly shopping flow",
      "Built with core web technologies",
      "Responsive page structure",
    ],
  },
];

export const achievement = {
  title: "Presented a Paper at an International Conference",
  topic: "AI in Medical Image Analysis",
};

export const certifications = [
  {
    id: "conferences",
    title: "Conferences & Events",
    items: [
      "Participated in International Innovation Summit: Environmental Technologies and In-Demand Computing Solutions",
      "Participated in International Conference: Futuristic Trends in Computational Sciences (ICFTCS-2023)",
      "Participated in International Seminar: Futuristic Trends in Computational Sciences '24",
    ],
  },
  {
    id: "professional",
    title: "Professional Certifications",
    items: [
      "PMKVY Certified Domestic IT Helpdesk Attendant",
      "Typewriting English – Junior and Senior Grade",
      "Prathmic",
      "Office Automation – Bharathidasan University",
      "Graphic Design – Bharathidasan University",
      "2D Animations – Bharathidasan University",
    ],
  },
  {
    id: "nptel",
    title: "NPTEL Certifications",
    items: [
      "Database Management System",
      "Developing Soft Skills and Personality",
      "Enhancing Soft Skills and Personality",
      "Soft Skill Development",
    ],
  },
];
