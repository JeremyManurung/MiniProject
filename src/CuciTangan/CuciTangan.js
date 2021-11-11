import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import CuciCountDown from "./CuciCountDown";

function CuciTangan() {
    useEffect(() =>{
            AOS.init();
    })

    const [page, setPage] = useState(1);

    function goNextPage() {
    if (page === 8) return;
    setPage((page) => page + 1);
    }

    function OnboardingOne() {
    return (
    <div>
        <img src="/assets/Gif/Cuci-tangan-1.gif"/>
        <h1>Ratakan Sabun Dengan Menggosok Kedua Tangan</h1>
        <h1><CuciCountDown
            duration={5}
        /></h1>
    </div>

    );
    }

    function OnboardingTwo() {
        return <div>
        <img src="/assets/Gif/Cuci-tangan-2.gif"/>
        <h1>Menggosok Kedua  Punggung Tangan Secara Bergantian</h1>
        <h1><CuciCountDown
                duration={5}
            /></h1>
        </div>;
    }

    function OnboardingThree() {
        return <div>
        <img src="/assets/Gif/Cuci-tangan-3.gif"/>
        <h1>Gosok Sela - Sela Jari Tangan</h1>
        <h1><CuciCountDown
                duration={5}
            /></h1>
        </div>;
    }

    function OnboardingFour() {
        return <div>
        <img src="/assets/Gif/Cuci-tangan-4.gif"/>
        <h1>Gosok Bagian Dalam Jari Dengan Posisi Jari Tangan<br/> Saling Menungunci</h1>
        <h1><CuciCountDown
                duration={5}
            /></h1>
        </div>;
    }

    function OnboardingFive() {
        return <div>
        <img src="/assets/Gif/Cuci-tangan-5.gif"/>
        <h1>Gosok dan Putar Ibu Jari Bergantian</h1>
        <h1><CuciCountDown
                duration={5}
            /></h1>
        </div>;
    }

    function OnboardingSix() {
        return <div>
        <img src="/assets/Gif/Cuci-tangan-6.gif"/>
        <h1>Gosok Memutar Ujung Jari Secara Bergantian</h1>
        <h1><CuciCountDown
                duration={5}
            /></h1>
        </div>;
    }

    function OnboardingSeven() {
        return <div>
        <img src="/assets/Gif/Cuci-tangan-7.gif"/>
        <h1>Bilas Dengan Air Mengalir</h1>
            <h1><CuciCountDown
                duration={5}
            /></h1>
        </div>;
    }

    function OnboardingEight() {
        return <div>
        <p>Yeyyyy akhirnya mencuci tangan dengan baik sudah berhasil<br/>tetap mencuci tangan ya dengan baik<br/>agar meminimaliris penularan covid 19,<br/>
        <span>STAY SAFE</span></p>
        </div>;
    }

    return (
    <>
    <div class="kakiCuci"></div>
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

    <div className="CuciTangan" data-aos="fade-left" data-aos-duration="1000">

      {/* konten */}
    <div class="CuciTanganContent">
        {page === 1 &&(
        <OnboardingOne 
        />)}

        {page === 2 && (
        <OnboardingTwo/>
        )}
        
        {page === 3 && (
        <OnboardingThree />
        )}
        {page === 4 &&(
        <OnboardingFour />
        )}
        {page === 5 && (
        <OnboardingFive />
        )}
        {page === 6 && (
        <OnboardingSix />
        )}
        {page === 7 &&(
        <OnboardingSeven />
        )}

        <div class="CuciDelapan">
        {page === 8 && <OnboardingEight/>}
        </div>

    {page !== 8 && <h2 onClick={goNextPage}>Melewatkan</h2>}
    {page === 8 && (
        <Link to="/"><button type="submit" >
            Home
        </button></Link>
    )}
    </div>

    </div>
    </>
);
}

export default CuciTangan
