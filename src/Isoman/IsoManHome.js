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
                <a href="#">Fitur</a>
                <Link to="/Masker">Masker</Link>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>

            <div>
                <Link to="/IsoMan"><button>Isoman</button></Link>
            </div>
        </div>
        </div>
    )
}

export default IsoManHome
