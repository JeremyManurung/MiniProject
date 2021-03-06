import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

import { Link } from 'react-router-dom';


function IsoManHome() {
    useEffect(() =>{
        AOS.init();
    })

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

        <div class="kaki"></div>

        <div class="heran" data-aos="fade-up" data-aos-duration="1000">
            <div class="bungkus1">
            <h1 style={{textAlign:'center'}}>Isoman (Isolasi Mandiri)</h1>


        <div class="tulisan">
        <p style={{textAlign:'center'}}>Pada fitur Isoman ini adalah sebuah timer yang dimana akan menghitung mundur selama 14 hari, yang dimana akan berfungsi ketika 
        menekan Button “Isoman”</p>
        
        <Link to="/IsoMan"><button>Isoman</button></Link>
        </div>
        </div>
        </div>


        </div>
    )
}

export default IsoManHome
