import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import { Link } from 'react-router-dom';
import "aos/dist/aos.css"

function Home() {
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

        <div class="landing">
            <div class="landingText" data-aos="fade-up" data-aos-duration="1000">
                <h1>Masker.<span style={{color:'#e0501b'}}>In</span> </h1>
                <h3>Lorem Ipsum is simply dummy text of the printing <br/>  and typesetting industry. Lorem Ipsum</h3>
            
            </div>
            <div class="landingImage" data-aos="fade-down" data-aos-duration="2000">
                <img src="/assets/img/bg.png" alt=""/>
            </div>
        </div>



        <div class="about">
            <div class="aboutText" data-aos="fade-up" data-aos-duration="1000">
                <h1>Mengapa Penting<br/> <span style={{color:'#2f8be0',fontSize:'2.5vw'}}>Menggunakan Masker?</span> </h1>
                <img src="/assets/img/doctor-woman-400px.png" alt=""/>
            </div>
            <div class="aboutList" data-aos="fade-left" data-aos-duration="1000">
                <ol>
                    <li> 
                    <span>01</span>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </li>

                    <li> 
                    <span>02</span>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </li>

                    <li> 
                    <span>03</span>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </li>

                    <li> 
                    <span>04</span>
                    <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </li>

                </ol>
            </div>
        </div>



        <div class="infoSection">
            <div class="infoHeader" data-aos="fade-up" data-aos-duration="1000">
                <h1>Apakah yang perlu diperhatikan <br/> <span style={{color:'#e0501b'}}>Dalam Menggunakan Masker</span> </h1>
            </div>
            <div class="infoCards">
                <div class="card one" data-aos="fade-up" data-aos-duration="1000">
                    <img src="/assets/img/movie.png" class="cardoneImg" alt="" data-aos="fade-up" data-aos-duration="1100"/>
                    <div class="cardbgone"></div>
                    <div class="cardContent">
                        <h2>Lorem Bang</h2>
                        <p>when an unknown printer took a galley of type and scrambledit to make a type specimen book.</p>
                    </div>
                </div>
                <div class="card two" data-aos="fade-up" data-aos-duration="1300">
                    <img src="/assets/img/videocall.png" class="cardtwoImg" alt="" data-aos="fade-up" data-aos-duration="1200"/>
                    <div class="cardbgtwo"></div>
                    <div class="cardContent">
                        <h2>Lorem Bang</h2>
                        <p>when an unknown printer took a galley of type and scrambledit to make a type specimen book.</p>
                    </div>
                </div>
                <div class="card three" data-aos="fade-up" data-aos-duration="1600">
                    <img src="/assets/img/learn.png" class="cardthreeImg" alt="" data-aos="fade-up" data-aos-duration="1300"/>
                    <div class="cardbgone"></div>
                    <div class="cardContent">
                        <h2>Lorem Bang</h2>
                        <p>when an unknown printer took a galley of type and scrambledit to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="banner">
            <div class="bannerText" data-aos="fade-right" data-aos-duration="1000">
                <h1>YUK tonton videonya agar lebih paham tentang masker!! <br/> <span style={{fontSize:'1.6vw',fontWeight:'normal',color:'#808080'}}  class="bannerInnerText">
                    Kalau ingin tahu jenis-jenis masker cek disini yaa..
                </span> </h1>
                <div class="btn">
                    <a href="#">Learn More</a>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3apsk7aOv7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div className="contact">
            <h1 data-aos="fade-up" data-aos-duration="1000">Ini Contact</h1>
        </div>

        <div class="footer">
            <h2>HealthCare.</h2>
            <div class="footerlinks">
                <a href="#" class="mainlink">Home</a>
                <a href="#">Fitur</a>
                <a href="#">Masker</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
        </div>
    </div>
    )
}

export default Home
