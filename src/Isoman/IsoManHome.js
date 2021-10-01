import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function IsoManHome() {
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

        <div class="kaki"></div>

        <div class="heran">
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
