import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import Styles from '../Styles/Components/challengeBox.module.css';

export function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
    
    function handlerChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handlerChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={Styles.challengeBoxContainer}>
            {activeChallenge? (
                <div className={Styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>                        
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={Styles.challengeFailedButton}
                            onClick={handlerChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button 
                            type="button"
                            className={Styles.challengeSucceededButton}
                            onClick={handlerChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ):(
                <div className={Styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    )
}