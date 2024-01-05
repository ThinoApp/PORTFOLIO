import MesCompetences from "@/presentationals/MesCompetences/MesCompetences";
import { mesCompetences } from "./MesCompetences.utils";

const MesCompetencesContainer = () => {
  return (
    <>
      <MesCompetences listes={mesCompetences} />
    </>
  );
};
export default MesCompetencesContainer;
