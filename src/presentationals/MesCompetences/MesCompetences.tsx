import { ReactNode } from "react";
import "./MesCompetences.scss";
import { motion } from "framer-motion";
interface MesCompetencesProps {
  listes: {
    id: number;
    title: string;
    description: string;
    color: string;
    icon: ReactNode;
  }[];
}

const MesCompetences = ({ listes }: MesCompetencesProps) => {
  return (
    <div className="MesCompetences" id="Skills">
      <h2>Skills</h2>
      <ul>
        {listes.map((item) => (
          <li key={item.id}>
            <motion.div
              initial={{ backgroundColor: "rgb(0,0,0, 0.2)" }}
              whileInView={{ backgroundColor: item.color }}
              transition={{ delay: 0.5 * item.id }}
              className="bg-top"
            ></motion.div>
            <motion.div
              initial={{ backgroundColor: "rgb(0,0,0, 0.2)" }}
              whileInView={{ backgroundColor: item.color }}
              transition={{ delay: 0.5 * item.id }}
              className="bg-bottom"
            ></motion.div>
            <motion.div
              initial={{ backgroundColor: "rgb(0,0,0, 0.2)" }}
              whileInView={{ backgroundColor: item.color }}
              transition={{ delay: 0.5 * item.id }}
              className={`icon-container`}
              // style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </motion.div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MesCompetences;
