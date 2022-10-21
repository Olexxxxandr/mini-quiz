import styles from './Result.module.css'

const Result = ({jsQuiz, correct}) => {
    return (
        <>
            <div className={styles.result}>You answered on {correct} questions of {jsQuiz.length} questions</div>
            <a href="/">
                <button className={styles.again}>Try again</button>
            </a>
        </>
    )
}

export default Result;