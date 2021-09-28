import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css"

function Masker() {
    useEffect(() =>{
            AOS.init();
        })

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
        </div>

        <div class="hero">
        <div class="search-button"  data-aos="fade-right" data-aos-duration="1000">
        <input type="text" placeholder="Search" />
        <button className="btn btn-primary">Search</button>
        </div>
        <div class="middle"> 
        <div class="container">
        <div class="wrapper" data-aos="fade-up" data-aos-duration="1000">
            <img src="/assets/img/Masker Kain.jpg" alt=""/>
            <div class="content">
                <span>Masker Kain</span>
                <p>Ini adalah masker kain yang biasa aj</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div class="wrapper" data-aos="fade-up" data-aos-duration="1000">
            <img src="/assets/img/Masker Kain.jpg" alt=""/>
            <div class="content">
                <span>Masker Kain</span>
                <p>Ini adalah masker kain yang biasa aj</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div class="wrapper" data-aos="fade-up" data-aos-duration="1000">
            <img src="/assets/img/Masker Kain.jpg" alt=""/>
            <div class="content">
                <span>Masker Kain</span>
                <p>Ini adalah masker kain yang biasa aj</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div class="wrapper"data-aos="fade-right" data-aos-duration="1000">
            <img src="/assets/img/Masker Kain.jpg" alt=""/>
            <div class="content">
                <span>Masker Kain</span>
                <p>Ini adalah masker kain yang biasa aj</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div class="wrapper" data-aos="fade-up" data-aos-duration="1000">
            <img src="/assets/img/Masker Kain.jpg" alt=""/>
            <div class="content">
                <span>Masker Kain</span>
                <p>Ini adalah masker kain yang biasa aj</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div class="wrapper" data-aos="fade-left" data-aos-duration="1000">
            <img src="/assets/img/Masker Kain.jpg" alt=""/>
            <div class="content">
                <span>Masker Kain</span>
                <p>Ini adalah masker kain yang biasa aj</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <button>Read More</button>
                </div>
            </div>
        </div>
        <div class="wrapper" data-aos="fade-up" data-aos-duration="1000">
            <img src="/assets/img/Masker Kain.jpg" alt=""/>
            <div class="content">
                <span>Masker Kain</span>
                <p>Ini adalah masker kain yang biasa aj</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
        </div>
    )
}

export default Masker
