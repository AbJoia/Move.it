import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import Styles from "../Styles/Components/completedChallenges.module.css";

export function CompletedChallenges() {
    const {challengesCompleted} = useContext(ChallengesContext);

    return(
        <div className={Styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}