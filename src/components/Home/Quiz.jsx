import styles from "./../../styles/components/Quiz.module.css";

export default function About(){


    

    return (
        <section class={styles.about}>
            <div className="container-min">
                <h2>Quiz</h2>
                <p> Além da mensagem, também queria que você pudesse se divertir com isso (espero que funcione), então fui atrás de algumas coisas pra montar um mini quiz sobre coisas envolvendo a gente de alguma forma, espero que goste! ( Depois me manda foto de como se saiu kkkkk ) </p>
                <div className={styles.form}></div>
            </div>
        </section>
    )
    
}