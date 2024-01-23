// src/routes/Detail.js 
// 상품 디테일 정보 컴포넌트
import React from 'react';
import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
    const { id } = useParams();
    const selectedShoe = shoes.find((shoe) => shoe.id.toString() === id);

    if (!selectedShoe) {
        return <div>해당 신발이 존재하지 않습니다.</div>
    } 
    console.log(selectedShoe);
    return (
        <div>
            <img src={`https://codingapple1.github.io/shop/shoes${selectedShoe.id+1}.jpg`}/>
            <h2>이름 : {selectedShoe.title}</h2>
            <p>가격 : {selectedShoe.price}</p>
            <p>상세정보 : {selectedShoe.content}</p>
        </div>
    )
}

export default Detail;