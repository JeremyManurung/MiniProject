import MenuCekKes from "./MenuCekKes"
import Soal from "./Soal"
import Finis from "./Finis"
import { useState } from "react";
import {penampungContext} from "./Penampung"
import { Link } from 'react-router-dom';
import { Pertanyaan } from "./Pertanyaan";

function CekKesehatanHome() {
    const [pertanyaanState, setpertanyaanState] = useState("menu");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div>
        <div class="nav">
            <div class="logo">
                <h4>Masker.<span style={{color: '#e0501b'}}>In</span></h4>
            </div>
            <div class="links">
                <Link to="/" class="mainlink">Home</Link>
                <Link to="/FiturHome">Fitur</Link>
                <Link to="/Masker">Masker</Link>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
        </div>

        <div className="App">
        <h1>Quiz App</h1>
        <penampungContext.Provider
            value={{
            pertanyaanState,
            setpertanyaanState,
            userName,
            setUserName,
            score,
            setScore,
            }}
        >
            {pertanyaanState === "menu" && <MenuCekKes />}
            {pertanyaanState === "mulai" && <Soal />}
            {pertanyaanState === "finis" && <Finis />}
        </penampungContext.Provider>
        </div>
        </div>
    );
}

export default CekKesehatanHome;
