import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';


function CuciTanganHome() {
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

        <div class="kakiCuci"></div>

        <div class="heran" data-aos="fade-down" data-aos-duration="1000">
            <div class="bungkus1">
            <h1 style={{textAlign:'center'}}>Yuk Cuci Tangan</h1>


        <div class="tulisan">
        <p style={{textAlign:'center'}}>Yuk cuci tangan adalah fitur untuk mengetahui bagaimana melakukan cuci tangan dengan benar 
        dan waktu yang tepat dalam melakukan cuci tangan</p>
        
        <Link to="/CuciTangan"><button>Cuci Tangan</button></Link>
        </div>
        </div>
        </div>


            </div>
    )
}

export default CuciTanganHome
