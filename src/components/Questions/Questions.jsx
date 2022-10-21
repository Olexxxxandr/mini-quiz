import styles from './Questions.module.css'

const Questions = ({jsQuiz, step,setStep, correct, setCorrect}) => {
    const quest = jsQuiz[step];

    const onClickAnswer = (index) => {
        setStep(step + 1);
        if(quest.correctAnswer === index) {
            setCorrect(correct + 1);
        }
    }
    const percentage = (step / jsQuiz.length) * 100;

    return(
        <div>
            <div className={styles.percentage}>
                <div className={styles.progressBar} style={{width: `${percentage}%`}}></div>
            </div>

            <h1 className={styles.question}>{quest.question}</h1>
            {quest.answers.map((item,index) => {
                return <li className={styles.answer} onClick={() => onClickAnswer(index)} key={index}>{item}</li>
            })}
        </div>
    )}

export default Questions;