import { useState } from "react";
import styles from "./../../styles/components/Quiz.module.css";

export default function About(){

    const [ quiz, setQuiz ] = useState([
        {
            name:'favoriteFood',
            label:"Qual minha comida preferida",
            respost:'pizza',
            correct:null,
            value:null
        },
        {
            name:'workPlace',
            label:"Onde eu trabalho",
            respost:'docato',
            correct:null,
            value:null
        },
        {
            name:'favoriteColor',
            label:"Qual minha cor preferida",
            respost:'azul preto',
            correct:null,
            value:null
        },
        {
            name:'preferFood',
            label:"Qual jogo aproximou a gente",
            respost:'xadrez',
            correct:null,
            value:null
        },
        {
            name:'favoriteFlower',
            label:"Qual minha flor favorita",
            respost:'suculenta suculentas carolayne bb',
            correct:null,
            value:null
        },
        {
            name:'birthday',
            label:"Qual mês faço aniversário",
            respost:'janeiro',
            correct:null,
        },
        {
            name:'bestFriend',
            label:"Quem é minha melhor amiga",
            respost:'carolayne eu mim carol bb',
            correct:null,
            value:null
        },
        {
            name:'favoriteSpace',
            label:"Qual astro do espaço eu passei a adorar por sua conta",
            respost:'lua',
            correct:null,
            value:null
        },
        {
            name:'brennon',
            label:"O que tem escrito no colar que te dei",
            respost:'brennon',
            correct:null,
            value:null
        },
        {
            name:'perfume',
            label:"Qual o nome do perfume que eu passei",
            respost:'arbo oboticario',
            correct:null,
            value:null
        }
    ])

    const [showResult, setShowResult] = useState(false)
    const [hits, setHits] = useState(0);

    function result(){
        let bruteValues = document.getElementsByTagName('input');
        var values = [];
        var result = [];
        var correctRespost = 0;
        for(let value of bruteValues){
        values.push({name: value.name, value: value.value});
        }
        // console.log(values)

        values.forEach((val, i)=>{
            let constructor = quiz[i];

            document.getElementById(constructor.name).parentElement.classList.remove(styles.sucess)
            document.getElementById(constructor.name).parentElement.classList.remove(styles.erro)
            
            if(val.value.toLowerCase() == '' || val.value.toLowerCase() == ' '){
                constructor.correct = false
            } else {
                if(quiz[i].respost.includes(val.value.toLowerCase())){
                    constructor.correct = true
                    correctRespost++;
                } else {
                    constructor.correct = false
                }
            }
            
            constructor.value = val.value
            result.push(constructor)

            if(constructor.correct){
                document.getElementById(constructor.name).parentElement.classList.add(styles.sucess)
            } else {
                document.getElementById(constructor.name).parentElement.classList.add(styles.erro)
            }
        })

        setQuiz(result);
        setHits(correctRespost);
        setShowResult(true);
    }

    return (
        <section class={styles.quiz}>
            <div className="container-min">
                <h2>Quiz</h2>
                <p> Além da mensagem, também queria que você pudesse se divertir com isso (espero que funcione), então fui atrás de algumas coisas pra montar um mini quiz sobre coisas envolvendo a gente de alguma forma, espero que goste! (Depois me manda foto de como se saiu kkkkk).</p>
                <p> A resposta sempre será uma única palavra, e sem espaços ou símbolos.</p>
                <div className={styles.form}>
                {
                    showResult && <p>Você acertou: { hits }/{quiz.length} </p>
                }

                    {
                        quiz.map((val)=>{
                            return (
                                <div>
                                    <label htmlFor={val.name}>{val.label}?</label>
                                    <input type="text" name={val.name} id={val.name}/>
                                </div>
                            )
                        })
                    }

                    { !showResult && <div className={styles.btn}>
                        <button onClick={result}>Conferir!</button>
                    </div>}
                    

                </div>
            </div>
        </section>
    )
    
}