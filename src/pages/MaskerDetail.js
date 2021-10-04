import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import {gql, useQuery, useLazyQuery} from '@apollo/client';

const GetDetailData = gql`
    query MyQuery2($id: Int!) {
    maskerin(where: {id: {_eq: $id}}) {
        id
        foto
        nama
}
}
`
function MaskerDetail(props) {
    const [getDataMasker,{data, loading, error}] = useLazyQuery(GetDetailData)

    useEffect(() => {
        getDataMasker({
            variables: {id:props.match.params.id},
        });  
    }, []);

    return (
        <>
        <div>
            {data?.maskerin.map((detailmasker)=>(
                <div class="MaskerDetail">
                    <img src={detailmasker.foto} alt=""/>
                    <h1>{detailmasker.nama}</h1>
                </div>
            ))}
        </div>
    </>
    )
}

export default MaskerDetail
