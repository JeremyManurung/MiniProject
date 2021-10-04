import { useState } from "react";
import { Link } from "react-router-dom";

export default function CuciTangan() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState({
    user: {},
    profile: {},
    settings: {}
    });

    function goNextPage() {
    if (page === 8) return;
    setPage((page) => page + 1);
    }

    function updateData(type, newData) {
    setData((data) => {
    return { ...data, [type]: newData };
    });
    }

    function submit() {
    return "yes selesai"
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

    <div className="CuciTangan">
      {/* progres bar */}
    {/* <div>
        <progress max="8" value={page} />
    </div> */}

      {/* konten */}
    <div class="CuciTanganContent">
        {page === 1 && <OnboardingOne data={data.user} update={updateData} />}
        {page === 2 && (
            <OnboardingTwo data={data.profile} update={updateData} />
        )}
        {page === 3 && (
            <OnboardingThree data={data.settings} update={updateData} />
        )}
        {page === 4 &&(
        <OnboardingFour data={data.settings} update={updateData} />
        )}
        {page === 5 && (
        <OnboardingFive data={data.settings} update={updateData} />
        )}
        {page === 6 && (
        <OnboardingSix data={data.settings} update={updateData} />
        )}
        {page === 7 &&(
        <OnboardingSeven data={data.settings} update={updateData} />
        )}

        <div class="CuciDelapan">
        {page === 8 && <OnboardingEight/>}
        </div>

    {page !== 8 && <button onClick={goNextPage}>Melewatkan</button>}
    {page === 8 && (
        <Link to="/"><button type="submit" onClick={submit}>
            Home
        </button></Link>
    )}
    </div>

    </div>
    </>
);
}

function OnboardingOne({ data, update }) {
    const newData = {};

    return (
    <div>
        <img src="/assets/Gif/Cuci-tangan-1.gif"/>
        <h1>Ratakan Sabun Dengan Menggosok Kedua Tangan</h1>
    </div>

    );
}

function OnboardingTwo({ data, update }) {
    return <div>
    <img src="/assets/Gif/Cuci-tangan-2.gif"/>
    <h1>Menggosok Kedua  Punggung Tangan Secara Bergantian</h1>
    </div>;
}

function OnboardingThree({ data, update }) {
    return <div>
    <img src="/assets/Gif/Cuci-tangan-3.gif"/>
    <h1>Gosok Sela - Sela Jari Tangan</h1>
    </div>;
}

function OnboardingFour({ data, update }) {
    return <div>
    <img src="/assets/Gif/Cuci-tangan-4.gif"/>
    <h1>Gosok Bagian Dalam Jari Dengan Posisi Jari Tangan<br/> Saling Menungunci</h1>
    </div>;
}

function OnboardingFive({ data, update }) {
    return <div>
    <img src="/assets/Gif/Cuci-tangan-5.gif"/>
    <h1>Gosok dan Putar Ibu Jari Bergantian</h1>
    </div>;
}

function OnboardingSix({ data, update }) {
    return <div>
    <img src="/assets/Gif/Cuci-tangan-6.gif"/>
    <h1>Gosok Memutar Ujung Jari Secara Bergantian</h1>
    </div>;
}

function OnboardingSeven({ data, update }) {
    return <div>
    <img src="/assets/Gif/Cuci-tangan-7.gif"/>
    <h1>Bilas Dengan Air Mengalir</h1>
    </div>;
}

function OnboardingEight({ data, update }) {
    return <div>
    <h1>Yeyyyy akhirnya mencuci tangan dengan baik sudah berhasil<br/>tetap mencuci tangan ya dengan baik<br/>agar meminimaliris penularan covid 19,<br/>
    <span>STAY SAFE</span></h1>
    </div>;
}