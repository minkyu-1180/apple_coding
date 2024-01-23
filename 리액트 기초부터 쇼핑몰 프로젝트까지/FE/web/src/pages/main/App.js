// import './App.css';
// react
import React from 'react';
import { useState } from 'react';
// react-router-dom
import { useParams, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

// styled-components
import styled from 'styled-components';

// datas
import users from '../../datas/users';

let AppStyle = styled.div`
  text-align: center;
`

function Login(props) {
  let [inputId, setInputId] = useState('')
  let [inputPwd, setInputPwd] = useState('');
  let navigate = useNavigate();
  // 로그인 입력 값 state에 변화
  function handleInputId(e) {
    setInputId(e.target.value)
  }

  // 비밀번호 입력 값 state에 변화
  function handleInputPwd(e) {
    setInputPwd(e.target.value)
  }

  function onClickLogin() {
    console.log("로그인 시도")
    const loginUser = props.userData.find(user => inputId === user.userId && inputPwd === user.userPwd)
    if (loginUser) {
      props.onLogin(loginUser.id);
      console.log("로그인 성공!") 
      navigate(`/user/${loginUser.id}`)
    } else {
      console.log("로그인 실패")
    }

  }
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor='input_id'>ID : </label>
        <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
      </div>
      <div>
        <label htmlFor='input_pwd'>PW : </label>
        <input type='password' name='input_pwd' value={inputPwd} onChange={handleInputPwd} />
      </div>
      <div>
        <button type='button' onClick={onClickLogin}>Login</button>
      </div>
    </div>
  )
}

function User(props) {
  const { id } = useParams();
  let user = props.userData.find(function(x) {
    return x.id == id
  });
  console.log(user);
  return (
    <div>
      <h2>환영합니다, {user.userName}님!</h2>
      <div>{user.userId}</div>
      <div>{user.userPwd}</div>

    </div>
  )
}

function App() {
  let [userData, setUsers] = useState(users);
  let [isLogin, setIsLogin] = useState(false);
  let [loginUserId, setLoginUserId] = useState(null);

  let handleLogin = (userId) => {
    setIsLogin(true);
    setLoginUserId(userId);
  }

  let handleLogout = () => {
    setIsLogin(false);
    setLoginUserId(null);
  }
  let navigate = useNavigate();
  // console.log(userData);
  // const handlerUsers = function() {
  //   let newUserData = [...userData];

  // }
  return (
    // <div className="App">
    // </div>
    <AppStyle>
      {/* 네비게이션 바 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Image src={process.env.PUBLIC_URL + '/logo192.png'} style={{ weight: "50px", height: "50px"}}/>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link> */}
            {/* <Nav.Link onClick={() => {navigate(-1)}}>BACK</Nav.Link>
            <Nav.Link onClick={() => {navigate(1)}}>FRONT</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      { isLogin ? 
        (
          <Routes>
            <Route 
              path="/user/:id"
              element={<User userData={userData} />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route 
              path="/"
              element={<Login 
                userData={userData}
                onLogin={handleLogin}
              />}
            />
          </Routes>
        )
      }
      {/* <Routes>
        <Route 
          path="/"
          element={
            // 로그인이 되어있지 않은 경우 -> 로그인 페이지
            // 로그인이 되어있고 isStaff가 false인 경우 -> 회원 페이지
            // 로그인이 되어있고 isStaff가 true인 경우 -> 관리자 페이지

          }
        />
      </Routes> */}
 
      {/* 메인 페이지 컴포넌트(로그인 화면 / 회원 / 관리자) */}
      {/* 1. 로그인 화면
        - 비로그인 상태일 경우, 로그인 페이지 렌더링
        - 아이디, 비밀번호 입력 컴포넌트 필요
        - 로그인 버튼 컴포넌트 필요(클릭 -> DB 정보와 일치 여부 확인 후 결과값 반환)
      */}
      {/* 2. 회원 화면
        - 로그인 확인 시, is_staff 값이 false일 경우, 회원 화면으로 렌더링

      */}
      {/* 3. 관리자 화면
        - 로그인 확인 시, is_staff 값이 true일 경우, 관리자 화면으로 렌더링
      */}
    </AppStyle>
  );
}

export default App;
