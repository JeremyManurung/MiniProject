import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css"
import {gql, useQuery, useLazyQuery} from '@apollo/client';

const GetData = gql`
    query MyQuery {
        maskerin {
        id
        nama
        deskripsi
        foto
    }
}
`

const GetDetailData = gql`
    query MyQuery2($nama: name!) {
    maskerin(where: {nama: {_eq: $nama}}) {
        foto
        nama
    }
    }

`

function Masker() {
    const [testes ,{data, loading, error}] = useLazyQuery(GetDetailData)
    const [tes,settes] = useState("");
    function Tes(e) {
        settes(
            e.target.value
        )
        console.log(e.target.value)
        // console.log("tes")
    }

        function Tes2(e) {
        testes({
            variables: {nama:e.target.value},
        });
        // console.log("tes")
    }
    // const [search, setSearch] = useState('')
    // const [filteredData,setFilterdData] = useState([])
    // const [getDataMasker,{data, loading, error}] = useLazyQuery(GetDetailData)
    

    useEffect(() =>{
            AOS.init();
        })

    // useEffect(() => {
    // setFilterdData(
    // data.filter( data1 =>{
    // return data1.task.toLowerCase().includes( search.toLowerCase() )
    // })
    // )
    // },[search, data])

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

        <div class="hero">
        <div class="search-button" data-aos="fade-up" data-aos-duration="1000">
        <input type="text" placeholder="Search" onChange={Tes} value={tes}/>
        <button className="btn btn-primary" onClick={Tes2}>Search</button>
        </div>
        <div class="middle"> 
        <div class="container">

        {data?.maskerin.map((maskerinQuery)=>( 
            <div class="wrapper" data-aos="fade-up" data-aos-duration="1000">
            <img src={maskerinQuery.foto} alt=""/>
            <div class="content">
                <span>{maskerinQuery.nama}</span>
                <p>{maskerinQuery.deskripsi}</p>
            </div>
            <div class="row">
                <div class="buttons">
                    <Link to={"/MaskerDetail/" + maskerinQuery.id}><button>Read More</button></Link>
                    {/* <Link to="/MaskerDetail/"><button>Read More</button></Link> */}
                </div>
            </div>
        </div>
        ))}
        </div>
        </div>
        </div>
        </div>
    )
}

export default Masker
