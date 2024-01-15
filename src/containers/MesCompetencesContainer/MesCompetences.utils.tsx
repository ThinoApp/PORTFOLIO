import { FaReact } from "react-icons/fa";
import { FiPenTool, FiSmartphone } from "react-icons/fi";
export const mesCompetences = [
  {
    id: 1,
    title: "Web development",
    description: `
    Web developer specialized in front-end and back-end. Varied experience in HTML, CSS, JavaScript, React, Typescript. I am always ready to take on new challenges and explore new opportunities in the field of web development`,

    color: "#97EFF3",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "UI / UX Design",
    description: `
    Specialist in UI/UX design, I create intuitive and attractive digital experiences. Explore my projects to see how I apply design best practices to create effective, user-friendly solutions.
    `,
    color: "#9D86DF",
    icon: <FiPenTool />,
  },

  {
    id: 3,
    title: "Mobile development ",
    description: `
   
Specialist in mobile development, I create efficient and user-friendly mobile applications. I'm experienced in developing for iOS and Android platforms, using technologies like Kotlin, React Native and Flutter.
    `,
    color: "#86DF8F",
    icon: <FiSmartphone />,
  },
];
