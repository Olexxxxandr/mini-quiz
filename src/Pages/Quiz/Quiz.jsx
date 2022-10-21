import React, {useState} from 'react';
import styles from './Quiz.module.css'
import Questions from "../../components/Questions";
import Result from "../../components/Result";
import {jsQuiz} from "../../app-data/js-quiz";

const Quiz = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.quiz}>
                {jsQuiz.length !== step
                    ? <Questions jsQuiz={jsQuiz}
                                 step={step}
                                 setStep={setStep}
                                 correct={correct}
                                 setCorrect={setCorrect}/>
                    : <Result jsQuiz={jsQuiz}
                              correct={correct}/>}
            </div>
        </div>
    )
}

export default Quiz;