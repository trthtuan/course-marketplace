export interface Lesson {
  id: string;
  title: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  students: number;
  category: string;
  curriculum: Lesson[];
  content?: string;
  guide?: string;
  feedback?: string;
}

export const categories = [
  "Development",
  "Data Science",
  "Language",
  "Office",
  "Design",
  "Marketing",
  "Business",
];

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Dr. Angela Yu",
    price: 14.99,
    originalPrice: 199.99,
    image: "https://picsum.photos/seed/webdev/600/400",
    description: "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
    students: 124500,
    category: "Development",
    curriculum: [
      { id: "1-1", title: "Introduction to HTML", duration: "15:00" },
      { id: "1-2", title: "Intermediate CSS", duration: "45:30" },
      { id: "1-3", title: "JavaScript Fundamentals", duration: "1:20:00" },
      { id: "1-4", title: "React Hooks Deep Dive", duration: "2:15:00" },
    ],
  },
  {
    id: "2",
    title: "Machine Learning A-Z: AI, Python & R",
    instructor: "Kirill Eremenko",
    price: 19.99,
    originalPrice: 149.99,
    image: "https://picsum.photos/seed/ml/600/400",
    description: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
    students: 89000,
    category: "Data Science",
    curriculum: [
      { id: "2-1", title: "Data Preprocessing", duration: "30:00" },
      { id: "2-2", title: "Regression Models", duration: "1:10:00" },
      { id: "2-3", title: "Classification", duration: "1:45:00" },
      { id: "2-4", title: "Deep Learning Basics", duration: "2:00:00" },
    ],
  },
  {
    id: "3",
    title: "Spanish for Beginners: The Complete Method",
    instructor: "Peter Hanley",
    price: 12.99,
    originalPrice: 99.99,
    image: "https://picsum.photos/seed/spanish/600/400",
    description: "Learn Spanish from scratch. The most comprehensive Spanish course for beginners.",
    students: 45000,
    category: "Language",
    curriculum: [
      { id: "3-1", title: "Alphabet and Pronunciation", duration: "20:00" },
      { id: "3-2", title: "Basic Greetings", duration: "25:00" },
      { id: "3-3", title: "Present Tense Verbs", duration: "50:00" },
    ],
  },
  {
    id: "4",
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    instructor: "Kyle Pew",
    price: 15.99,
    originalPrice: 129.99,
    image: "https://picsum.photos/seed/excel/600/400",
    description: "Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365.",
    students: 210000,
    category: "Office",
    curriculum: [
      { id: "4-1", title: "Excel Basics", duration: "40:00" },
      { id: "4-2", title: "Formulas and Functions", duration: "1:30:00" },
      { id: "4-3", title: "Data Visualization", duration: "1:00:00" },
      { id: "4-4", title: "Pivot Tables", duration: "1:15:00" },
    ],
  },
  {
    id: "5",
    title: "UI/UX Design Bootcamp",
    instructor: "Gary Simon",
    price: 18.99,
    originalPrice: 159.99,
    image: "https://picsum.photos/seed/design/600/400",
    description: "Learn UI/UX design from scratch. Master Figma, wireframing, prototyping, and user research.",
    students: 67000,
    category: "Design",
    curriculum: [
      { id: "5-1", title: "Introduction to Figma", duration: "35:00" },
      { id: "5-2", title: "Color Theory & Typography", duration: "55:00" },
      { id: "5-3", title: "Wireframing", duration: "1:20:00" },
      { id: "5-4", title: "Prototyping & Animation", duration: "1:40:00" },
    ],
  },
  {
    id: "6",
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    price: 16.99,
    originalPrice: 199.99,
    image: "https://picsum.photos/seed/marketing/600/400",
    description: "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
    students: 150000,
    category: "Marketing",
    curriculum: [
      { id: "6-1", title: "Market Research", duration: "45:00" },
      { id: "6-2", title: "WordPress Setup", duration: "1:00:00" },
      { id: "6-3", title: "Email Marketing", duration: "1:15:00" },
      { id: "6-4", title: "Copywriting", duration: "1:30:00" },
    ],
  },
  {
    id: "7",
    title: "The Complete SQL Bootcamp",
    instructor: "Jose Portilla",
    price: 13.99,
    originalPrice: 149.99,
    image: "https://picsum.photos/seed/sql/600/400",
    description: "You'll learn how to read and write complex queries to a database using PostgreSQL. These skills are also applicable to any other major SQL database.",
    students: 180000,
    category: "Data Science",
    curriculum: [
      { id: "7-1", title: "SQL Basics", duration: "50:00" },
      { id: "7-2", title: "GROUP BY Statements", duration: "1:05:00" },
      { id: "7-3", title: "JOINS", duration: "1:20:00" },
      { id: "7-4", title: "Advanced SQL Commands", duration: "1:45:00" },
    ],
  },
  {
    id: "8",
    title: "React Native - The Practical Guide",
    instructor: "Maximilian Schwarzmüller",
    price: 17.99,
    originalPrice: 189.99,
    image: "https://picsum.photos/seed/reactnative/600/400",
    description: "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux.",
    students: 95000,
    category: "Development",
    curriculum: [
      { id: "8-1", title: "Getting Started", duration: "40:00" },
      { id: "8-2", title: "React Native Basics", duration: "1:10:00" },
      { id: "8-3", title: "Navigation", duration: "1:30:00" },
      { id: "8-4", title: "State Management", duration: "2:00:00" },
    ],
  }
];
