import MenuCekKes from "./MenuCekKes"
import Soal from "./Soal"
import Finis from "./Finis"
import { useState, useEffect } from "react";
import {penampungContext} from "./Penampung"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"
import { Pertanyaan } from "./Pertanyaan";

function CekKesehatanHome() {
    useEffect(() =>{
        AOS.init();
    })

    const [pertanyaanState, setpertanyaanState] = useState("menu");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div>
        <div class="nav">
            <div class="logo">
                <h4><Link to="/"><span style={{color:"black"}}>Masker.</span><span style={{color: '#e0501b'}}>In</span></Link></h4>
            </div>
            <div class="links">
                <Link to="/" class="mainlink">Home</Link>
                <Link to="/FiturHome">Fitur</Link>
                <Link to="/Masker">Masker</Link>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
        </div>

        <div class="kakiCek"></div>
        <div className="KesehatanStyle" data-aos="fade-down" data-aos-duration="1000">
        <h1>Cek Kesehatan</h1>
        
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
            {pertanyaanState === "finis" && <Finis />}<br/>
            {userName}
        </penampungContext.Provider>
        </div>
        </div>
    );
}

export default CekKesehatanHome;
