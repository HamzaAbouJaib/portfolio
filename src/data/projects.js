// ExoTech Images
import exotech1 from "../resources/project-images/exotech/exotech-1.png";
import exotech2 from "../resources/project-images/exotech/exotech-2.png";
import exotech4 from "../resources/project-images/exotech/exotech-4.png";
import exotech5 from "../resources/project-images/exotech/exotech-5.png";
import exotech6 from "../resources/project-images/exotech/exotech-6.png";
import exotech7 from "../resources/project-images/exotech/exotech-7.png";
// ExoTech Dashboard Images
import exotechDashboard1 from "../resources/project-images/exotech-dashboard/exotech-dashboard-1.png";
import exotechDashboard2 from "../resources/project-images/exotech-dashboard/exotech-dashboard-2.png";
import exotechDashboard3 from "../resources/project-images/exotech-dashboard/exotech-dashboard-3.png";
import exotechDashboard4 from "../resources/project-images/exotech-dashboard/exotech-dashboard-4.png";
import exotechDashboard5 from "../resources/project-images/exotech-dashboard/exotech-dashboard-5.png";
import exotechDashboard6 from "../resources/project-images/exotech-dashboard/exotech-dashboard-6.png";
import exotechDashboard7 from "../resources/project-images/exotech-dashboard/exotech-dashboard-7.png";
// Expense Tracker Images
import expense1 from "../resources/project-images/expense-app/expense-app-1.png";
import expense2 from "../resources/project-images/expense-app/expense-app-2.png";
import expense3 from "../resources/project-images/expense-app/expense-app-3.png";
import expense4 from "../resources/project-images/expense-app/expense-app-4.png";
import expense5 from "../resources/project-images/expense-app/expense-app-5.png";
import expense6 from "../resources/project-images/expense-app/expense-app-6.png";

const myProjects = [
  {
    title: "ExoTech - Ecommerce Store",
    desc: "A technology ecommerce store featuring user authentication, favoriting products, order history, a cart system, and secure payment processing using Stripe.",
    images: [exotech1, exotech2, exotech4, exotech5, exotech6, exotech7],
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Next-Auth",
      "MongoDB",
      "TailwindCSS",
      "Stripe",
    ],
    githubLink: "https://github.com/HamzaAbouJaib/ExoTech-Ecommerce-Website",
    demoLink: "https://exotech.vercel.app",
  },
  {
    title: "ExoTech - Admin Dashboard",
    desc: "The admin dashboard for the ecommerce store ExoTech. The dashboard features the ability to add and manage products, categories, orders and admins as well as display business statistics.",
    images: [
      exotechDashboard1,
      exotechDashboard2,
      exotechDashboard3,
      exotechDashboard4,
      exotechDashboard5,
      exotechDashboard6,
      exotechDashboard7,
    ],
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Next-Auth",
      "MongoDB",
      "TailwindCSS",
      "Firebase",
    ],
    githubLink: "https://github.com/HamzaAbouJaib/ExoTech-Admin-Dashboard",
    demoLink: "https://exotech-dashboard.vercel.app",
  },
  {
    title: "Mesh Island Generator",
    desc: "A Java application that generates an island mesh with various biomes and properties.",
    images: [
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    ],
    tech: ["Java", "Apache Maven", "Apache CLI", "JTS Library", "JUnit"],
    githubLink: "https://github.com/HamzaAbouJaib/Island-Generator",
  },
  {
    title: "Expense Tracker",
    desc: "An expense tracking website that helps users track their budget and expenses by providing transaction history and categorized expenses.",
    images: [expense1, expense2, expense3, expense4, expense5, expense6],
    tech: ["Typescript", "JavaScript", "React", "Mantine UI", "Vite JS"],
    githubLink: "https://github.com/HamzaAbouJaib/React-Expense-Tracker-App",
    demoLink: "https://expense-tracker-react-ts-app.netlify.app/",
  },
];

export default myProjects;
