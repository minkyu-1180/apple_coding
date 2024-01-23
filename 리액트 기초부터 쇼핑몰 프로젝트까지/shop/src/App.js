import React from 'react';
import { useState } from 'react';
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, Navbar, Nav, Container, Row, Col } from 'react-bootstrap'; // 필요한 컴포넌트 불러오기
import './App.css';

// data.js 파일에 저장된 shoe 데이터 사용 가능
// 여러개 import 하려면 import {data1, data2, ...} from ...
import data from './data.js';

// 외부 라이브러리 사용
// Link : 페이지 이동하는 링크 생성
// useNavigate : 페이지 이동을 도와줌
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// 컴포넌트 사용
import Detail from './routes/Detail.js';


// 카드 컴포넌트(상품 정보 담는 카드)
function Card(props) {
  // App에 있는 shoes 정보를 Card로 가져오기
  return (
    <Col md={4}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoe.id+1}.jpg`} width="80%" />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
      <Link 
        key={props.shoe.id}
        to={`/detail/${props.shoe.id}`}
      >
        상세 정보 보기
      </Link>
    </Col>
  )
}

function About() {
  return (
    <div>
      <h4>어바웃어바웃어바웃</h4>
      
      {/* nested routes 위치 지정해주기 */}
      <Outlet></Outlet>
    </div>
  )
}


function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      
      {/* nested routes 위치 지정해주기 */}
      <Outlet></Outlet>
    </div>
  )
}


function App() {
  // 일단 state에 저장해보자(서버에서 가져온 데이터라고 가정)
  // 그냥 src/data.js 파일에 넣어두자....
  // 위에서 가져온 data 사용해봅시다잉
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Image src={process.env.PUBLIC_URL + '/logo.png'} style={{ weight: "50px", height: "50px"}}/>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/0')}}>0번상품 디테일</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => {navigate(-1)}}>뒤로 가기 버튼</Nav.Link>
            <Nav.Link onClick={() => {navigate(1)}}>앞으로 가기 버튼</Nav.Link>
            {/* 현재 url에 #features를 붙여줌 */}
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 라우터로 페이지 나누는 법 */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* 배경화면 class 속성 */}
              <div className="main-bg"></div>
              <div>메인 페이지</div>
              <Container>
                <Row>
                  {shoes.map((shoe, index) => (
                    <Card key={index} shoe={shoe} />
                  ))}
                </Row>
              </Container>
            </>
          }
        />
        {/* /detail로 접속 시, 상세 페이지로 이동 */}
        <Route 
          path="/detail/:id"
          element={<Detail 
            shoes={shoes}
          />}
        />
        {/* 지정되지 않는 url 요청(404) */}
        <Route path="*" element={<div>없는 페이지 입니다.</div>}/>

        {/* Nexted Routes */}
        <Route path="/about" element={<About />}>          
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>위치</div>}/>
        </Route>
        <Route path="/event" element={<Event />}>          
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
