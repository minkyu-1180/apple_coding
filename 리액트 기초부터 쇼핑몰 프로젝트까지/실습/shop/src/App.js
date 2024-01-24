import React, { useState } from 'react';
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap';
// css
import './App.css';
import bg from './images/bg.png';

// 내부 컴포넌트
// src/datas/shoes.js에서 만들어 놓은 shoes 데이터 가져다 쓰기
import shoes from './datas/shoes.js';
import Detail from './pages/Detail.js';
import Card from './component/Card.js';
// 라우터
import { Routes, Route, Link } from 'react-router-dom';

// Col 부분을 카드 컴포넌트로 바꾸기
// component 폴더로 이동했음...
// function Card (props) {
//   return (
//       <Col md={4}>
//           <Image src={process.env.PUBLIC_URL + props.shoe.imageUrl} width="80%" />
//           <h3>상품 이름 : {props.shoe.title}</h3>
//           <p>상품 설명 : {props.shoe.content}</p>
//           <p>상품 가격 : {props.shoe.price}</p>
//           <Link to={`/detail`}>상세 정보</Link>
//           {/* <Link to={`/detail/${props.shoe.id}`}>상세 정보</Link> */}
//       </Col>
//   )
// }


function App() {
  // 앞에서 가져온 데이터 가져다 쓰기!
  let [shoeList, setShoeList] = useState(shoes);
  // console.log(shoeList)
  // 상품 추가
  function addShoe (shoe) {
    let newShoeList = [...shoeList];
    newShoeList.push(shoe);
    setShoeList(newShoeList);
  }
  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">민규의신발</Navbar.Brand>
          <Nav className="me-auto">
          {/* 링크 태그 -> 라우팅 */}
          <Link to="/">홈</Link> 
          <p> | </p>
          <Link to="/detail">상세 페이지</Link>
          </Nav>
        </Container>
      </Navbar>
        {/* 라우터 */}
        <Routes>
          {/* 메인 페이지 */}
          <Route 
            path="/"
            element={
              <>
              {/* 메인 이미지 */}
              <div className="main-bg" style={{ backgroundImage: 'url('+ bg +')'}}></div>
              {/* 상품 진열 컨테이너*/}
              <Container>
                <Row>
                  {/* mapping 해버렷! */}
                  { shoeList.map((shoe, index) => (
                    <>
                      <Card 
                        // 매핑 시 키값 부여 잊지 맙시다
                        key={shoe.id}
                        index={index}
                        shoe={shoe}
                      />
                    </>
                  ))}
                </Row>
              </Container>
              </>
            }/>
        {/* 상세 페이지 */}
        <Route 
          path="/detail"
          // src/Detail.js의 Detail 컴포넌트 가져와서 사용하기
          element={<Detail />}  
        />
        {/* 어바웃 페이지 */}
        <Route 
          path="/about"
          element={<div>어바웃 페이지 용</div>}
        />
      </Routes>


    </div>
  );
}

export default App;
