import React from "react";
import { useEffect } from 'react';
import Carousel from "react-elastic-carousel";
import ItemStyle from "./ItemStyle";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function FiturHome() {
    useEffect(() =>{
    AOS.init();
    })
    return (
    <>
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

        <div class='fiturbungkus'>
        <h1 data-aos="fade-up" data-aos-duration="1000" style={{textAlign:'center'}}>FITUR</h1>
        <div data-aos="fade-down" data-aos-duration="1000" class="fiturcontainer">
            <Carousel breakPoints={breakPoints}>
            <ItemStyle>Yuk Cuci Tangan
                <Link to="/CuciTanganHome"><button>Klik</button></Link>
            </ItemStyle>
            <ItemStyle>Isoman
                <Link to="/IsoManHome"> <button>Klik</button></Link>
            </ItemStyle>
            <ItemStyle>Tes Kesehatan
                <Link to="/CekKesehatanHome"> <button>Klik</button></Link>
            </ItemStyle>
            </Carousel>
        </div>
        </div>
        </>
    );
}

export default FiturHome;
