import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import {gql, useQuery, useLazyQuery} from '@apollo/client';

const GetDetailData = gql`
    query MyQuery2($id: Int!) {
    maskerin(where: {id: {_eq: $id}}) {
        id
        foto
        info_masker
        nama
        detail_deskripsi
}
}
`
function MaskerDetail(props) {
    
    useEffect(() =>{
            AOS.init();
        })
    const [getDataMasker,{data, loading, error}] = useLazyQuery(GetDetailData)

    useEffect(() => {
        getDataMasker({
            variables: {id:props.match.params.id},
        });  
    }, []);

    return (
        <>
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

            {data?.maskerin.map((detailmasker)=>(
                <div class="MaskerDetail" data-aos="fade-up" data-aos-duration="1000">
                    <h1>{detailmasker.nama}</h1>
                    <div class="hr2">
                    <hr />
                    </div>

                    <img src={detailmasker.foto} alt=""/>

                    <h2>Deskripsi</h2>
                    <div class="hr1">
                    <hr />
                    </div>
                    <p>{detailmasker.detail_deskripsi}</p>
                    <iframe src={detailmasker.info_masker}></iframe>
                    
                </div>
            ))}
        </div>
    </>
    )
}

export default MaskerDetail
