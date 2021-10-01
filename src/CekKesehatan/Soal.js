import "../App.css";
import { Pertanyaan } from "./Pertanyaan";
import { useState } from "react";

import { useContext } from "react";
import {penampungContext} from "./Penampung";

function Soal() {
    const [pertanyaanSaatIni, setpertanyaanSaatIni] = useState(0);
    const [opsiYangDipilih, setopsiYangDipilih] = useState("");

    const { score, setScore, pertanyaanState, setpertanyaanState } = useContext(
        penampungContext
    );

    const chooseOption = (option) => {
        setopsiYangDipilih(option);
    };

    const nextQuestion = () => {
        if (Pertanyaan[pertanyaanSaatIni].asnwer == opsiYangDipilih) {
        setScore(score + 1);
        }
        setpertanyaanSaatIni(pertanyaanSaatIni + 1);
    };

    const finishQuiz = () => {
        if (Pertanyaan[pertanyaanSaatIni].asnwer == opsiYangDipilih) {
        setScore(score + 1);
        }
        setpertanyaanState("finis");
    };

    

    return (
        
        <div className="pertanyaan">
        <h1>{Pertanyaan[pertanyaanSaatIni].prompt}</h1>
        <div className="questions">
            <button
            onClick={() => {
                chooseOption("optionA");
            }}
            >
            {Pertanyaan[pertanyaanSaatIni].optionA}
            </button>
            <button
            onClick={() => {
                chooseOption("optionB");
            }}
            >
            {Pertanyaan[pertanyaanSaatIni].optionB}
            </button>
        </div>

        {pertanyaanSaatIni == Pertanyaan.length - 1 ? (
            <button onClick={finishQuiz} id="nextQuestion">
            Selesai
            </button>
        ) : (
            <button onClick={nextQuestion} id="nextQuestion">
            Pertanyaan Selanjutnya
            </button>
        )}
        
        </div>
    );
}

export default Soal;
