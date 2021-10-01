import React from "react";
import "../App.css";
import { useContext } from "react";
import { penampungContext } from "./Penampung";
import { Pertanyaan } from "./Pertanyaan";

const Finis = () => {
    const { score, setScore, setpertanyaanState, userName } = useContext(
        penampungContext
    );

    const restartQuiz = () => {
        setScore(0);
        setpertanyaanState("menu");
    };

        if (score == 1){
        return 'Kamu sebaiknya makan banyak'
        }else if (score == 2){
        return 'Kamu sebaiknya makan dikit'
        }else if(score == 3){
        return 'Kamu sebaiknya makan sangat sedikit'
        }

    return (
        <div className="Finis">
        <h1>Pertanyaan Selesai</h1>
        <h3>{userName}</h3>
        <h1>
            {score}
        </h1>
         {/* {score == 1  ? 'bagus' : 'tidak'} */}
        <button onClick={restartQuiz}>Ulangi pertanyaan</button>
        </div>
    );
};

export default Finis;
