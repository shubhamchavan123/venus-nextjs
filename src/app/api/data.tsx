import { getImgPath } from "@/utils/image";

// export const menuItems = [
//   { name: "Home", href: "#home" },
//   { name: "About Me", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Projects", href: "#portfolio" },
//   { name: "Testimonials", href: "#testimonials" },
//   { name: "Blog", href: "/#blog" },
// ];
export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

/* ---------------- COUNTER SECTION ---------------- */

export const count = [
  {
    icon: getImgPath("/images/counter/star.svg"),
    value: "4.8",
    description: "Client satisfaction based on delivered Flutter projects",
  },
  {
    icon: getImgPath("/images/counter/admin.svg"),
    value: "10+",
    description: "Real-world mobile applications developed",
  },
  {
    icon: getImgPath("/images/counter/bag.svg"),
    value: "3+",
    description: "Years of professional Flutter development experience",
  },
];

/* ---------------- FLUTTER SKILLS ---------------- */

export const Progress = [
  { title: 'Flutter App Development', Progress: 95 },
  { title: 'Provider State Management', Progress: 90 },
  { title: 'REST API & Firebase Integration', Progress: 88 },
];

/* ---------------- SERVICES SECTION ---------------- */

export const Servicebox = [
  {
    icon: getImgPath('/images/services/ux-design-product_1.svg'),
    title: 'Flutter Mobile App Development',
    description: 'Developing scalable Android & iOS applications using Flutter, following Clean Architecture and Provider pattern.',
  },
  {
    icon: getImgPath('/images/services/perfomance-optimization.svg'),
    title: 'API & Backend Integration',
    description: 'Integration of REST APIs, Firebase, Swagger, Razorpay, and secure backend services for mobile apps.',
  },
  {
    icon: getImgPath('/images/services/ux-design-product_2.svg'),
    title: 'UI Optimization & Animations',
    description: 'Creating smooth UI experiences with navigation animations, ListView optimization, and performance tuning.',
  },
];

/* ---------------- PORTFOLIO PROJECTS ---------------- */

export const portfolioinfo = [
  {
    image: getImgPath('/images/portfolio/cozycasa.png'),
    alt: 'Portfolio',
    title: 'Maze Marathi Vachan',
    slug: 'maze-marathi-vachan',
    info: 'Educational Flutter App with TTS',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/mars.png'),
    alt: 'Portfolio',
    title: 'Aao Hindi Padhe',
    slug: 'aao-hindi-padhe',
    info: 'Language Learning App',
    Class: 'md:mt-24'
  },
  {
    image: getImgPath('/images/portfolio/humans.png'),
    alt: 'Portfolio',
    title: 'CA Food',
    slug: 'ca-food',
    info: 'Online Food Ordering App',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/roket-squred.png'),
    alt: 'Portfolio',
    title: 'Flutex - Perfex CRM',
    slug: 'flutex-crm',
    info: 'Mobile CRM Solution',
    Class: 'md:mt-24'
  },
  {
    image: getImgPath('/images/portfolio/panda-logo.png'),
    alt: 'Portfolio',
    title: 'KnackBe Social App',
    slug: 'knackbe',
    info: 'Talent Boosting Platform',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/humans.png'),
    alt: 'Portfolio',
    title: 'KEN HRMS System',
    slug: 'ken-hrms',
    info: 'Employee Management System',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/cozycasa.png'),
    alt: 'Portfolio',
    title: 'Smart Gavali',
    slug: 'smart-gavali',
    info: 'Agriculture & Livestock App',
    Class: 'md:mt-24'
  },
  {
    image: getImgPath('/images/portfolio/mars.png'),
    alt: 'Portfolio',
    title: 'OKE Service Provider',
    slug: 'oke-service',
    info: 'Wallet & Payment System',
    Class: 'md:mt-0'
  },
  {
    image: getImgPath('/images/portfolio/panda-logo.png'),
    alt: 'Portfolio',
    title: 'PayBook',
    slug: 'paybook-app',
    info: 'Salary & Finance Management App',
    Class: 'md:mt-24'
  },
  {
    image: getImgPath('/images/portfolio/roket-squred.png'),
    alt: 'Portfolio',
    title: 'Employee Tracking System',
    slug: 'employee-tracking',
    info: 'GPS Attendance & HR App',
    Class: 'md:mt-0'
  },
];
