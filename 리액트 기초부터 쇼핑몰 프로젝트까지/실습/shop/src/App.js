// 사용할 리액트 부트스트랩 모듈 불러오기
import 'bootstrap/dist/css/bootstrap.css'; // css적용하는 법
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import ProductList from './Components/ProductList';
import { Routes, Route, Link } from 'react-router-dom';


function Home() {
  return (
    // 상품 레이아웃 만들기
    <Container>
      <ProductList />
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">민규 샾</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>|  
            <Nav.Link href="#features">Cart</Nav.Link>| 
          </Nav>
        </Container>
      </Navbar>

      {/* 링크 보여주기 */}
      <Link to="/">홈페이지</Link>
      <Link to="/detail">상세 페이지</Link>
      {/* 라우터 링크 */}
      <Routes>
        {/* 메인 페이지에서만 보여주고자 하는 컴포넌트 : Home */}
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<div>상세 페이지</div>} />
        <Route path="/about" element={<div>어바웃 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;