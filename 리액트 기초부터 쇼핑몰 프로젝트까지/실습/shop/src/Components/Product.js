import React from 'react';
import { Col, Image } from 'react-bootstrap';

function Product (props) {
    return (
      <Col md={4}>
        {/* public 폴더 이미지 사용 권장방식 */}
        {/* <Image src={process.env.PUBLIC_URL + `/shoes${props.index+1}.jpg`} width="80%" alt={`상품 ${props.index+1}`} fluid /> */}
        <Image src={props.shoe.url} width="80%" alt={`상품 ${props.shoe.index+1}`} fluid/>
        <div>
          <h3>상품명 : {props.shoe.title}</h3>
          <div>
            <h4>상품 정보</h4>
            {props.shoe.content}
            <p>상품 가격 : {props.shoe.price}</p>
          </div>
        </div>
      </Col>
    )
  }
  
// 이놈을 다른 곳에서도 쓸거야!
export default Product;