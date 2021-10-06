import React from "react";
import { useContext } from "react";
import { penampungContext } from "./Penampung";
import { Pertanyaan } from "./Pertanyaan";

const Finis = () => {
    const { score, setScore, setpertanyaanState, userName} = useContext(
        penampungContext
    );

    const restartQuiz = () => {
        setScore(0);
        setpertanyaanState("menu");
    };
    
    if(score === 0 ){
    return 'Kamu sangat sehat, tapi tetap jaga prokes yaa'
    }else if (score == 1){
    return 'Kamu Masih Sehat, sebaiknya tetap jaga prokes dan tetap menjaga pola hidup sehat'
    }else if (score == 2){
    return 'Kamu Masih Lumayan Sehat, tapi jangan lupa cuci tangan dan jaga prokes'
    }else if(score == 3){
    return 'Kamu Sebaiknya konsultasi ke pada dokter untuk lebih lanjut, dan tetap istirahat dan menjaga prokes'
    }

    return (
        <div className="Finis">
        <h1>Pertanyaan Selesai</h1>
        {/* <h3>{userName}</h3> */}
        <h1>{score}<br/> 
        <button onClick={restartQuiz}>Ulangi pertanyaan</button></h1>
            
         {/* {score == 1  ? 'bagus' : 'tidak'} */}
        
        </div>
    );
};

export default Finis;
