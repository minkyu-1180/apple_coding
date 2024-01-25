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
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {

  // 앞에서 가져온 데이터 가져다 쓰기!
  let [shoeList, setShoeList] = useState(shoes);
  // console.log(shoeList)

  let navigate = useNavigate();
  
  // 상품 추가
  function addShoe (shoe) {
    let newShoeList = [...shoeList];
    newShoeList.push(shoe);
    setShoeList(newShoeList);
  }

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">민규의신발</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link onClick={() => { navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about')}}>어바웃</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={() => { navigate(1)}}>앞으로가기</Nav.Link>

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
                        id={shoe.id}
                        shoes={shoes}
                      />
                    </>
                  ))}
                </Row>
              </Container>
              <button onClick={() => {
                // axios를 활용하여 url로 get 요청 보내기
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((res) => { 
                  // { res.data.map((x, index) => {
                  //   x.imageUrl = 
                  // })}
                  console.log(res.data)
                 })
                 .catch((error) => {
                  console.log(error)
                 })
              }}>상품 </button>
              </>
            }/>
        {/* 상세 페이지 */}
        <Route 
          path="/detail/:id"
          // src/Detail.js의 Detail 컴포넌트 가져와서 사용하기
          element={
          <Detail 
            shoes={shoes}
          />}  
        />
        {/* 어바웃 페이지 */}
        {/* nested routing */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버 어바웃</div>} />
          <Route path="location" element={<div>장소 어바웃</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보 어바웃 </h4>
      {/* nested router 나타나는 영역 */}
      <Outlet></Outlet>
    </div>
  )
}

export default App;
