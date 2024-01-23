// src/routes/Detail.js 
// 상품 디테일 정보 컴포넌트
import React from 'react';
import { useParams } from 'react-router-dom';
// styled-components 사용해보기
// npm install styled-components
import styled from 'styled-components';

// 버튼 태그 안에 스타일 집어넣기
// 장점 : 다른 js 파일에 간섭하지 않는다!!! & 로딩 시간도 단축됨
// 다른 css 파일도 각 js에 종속하게 하기 위해서는 컴포넌트명.module.css로 이름 짓기
// 다른 곳에서 사용하고 싶으면 export default해서 import 해도 됨
let YellowBtn = styled.button`
    background: yellow;
    color: black;
    padding: 10px;
`
// 얘도 재사용 가능
let Btn = styled.button `
    background: ${ props => props.bg };
    color: ${ props => props.bg == 'blue' ? 'white' : null};
    padding: 10px;
`
let GreyBox = styled.div`
    background: grey;
    padding: 10px
`
function Detail(props) {
    // variable routing을 위해 useParams 훅 사용
    // url 파라미터에 입력한 정보
    const { id } = useParams();
    // 상품 고유 번호인 id값으로 상품 찾기
    let shoe = props.shoes.find(function(x) {
        return x.id == id
    });

    return (
        <div>
            <img src={`https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`} alt="안보이네;;"/>
            <h2>이름 : {shoe.title}</h2>
            <p>가격 : {shoe.price}</p>
            <p>상세정보 : {shoe.content}</p>
            <YellowBtn>주문하기</YellowBtn>
        </div>
    )
}

export default Detail;