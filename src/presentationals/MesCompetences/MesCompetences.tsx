import { ReactNode } from "react";
import "./MesCompetences.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        {listes.map((item, index) => (
          <motion.li
            animate={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            key={item.id}
          >
            <motion.div
              initial={{ backgroundColor: "rgb(0,0,0, 0.2)" }}
              whileInView={{ backgroundColor: "#000", color: item.color }}
              transition={{ delay: 0.3 * item.id }}
              className={`icon-container`}
              // style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </motion.div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/${item.id}`}>Read More</Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
export default MesCompetences;
