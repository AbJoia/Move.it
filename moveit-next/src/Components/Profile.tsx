import { Profiler } from "inspector";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import Styles from "../Styles/Components/profile.module.css";

export function Profile() {
    const {level} = useContext(ChallengesContext);
    return(
        <div className={Styles.profileContainer}>
            <img src="https://github.com/abjoia.png" alt="Imagem Perfil Abner Joia" />
            <div>
                <strong>Abner Jóia</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}