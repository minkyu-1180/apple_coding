/* eslint-disable */ 
// warning 멘트 지우기

// 메인 페이지(blog/src/App.js)
import { useState } from 'react';
import './App.css'; 

// Modal 컴포넌트(Article 컴포넌트 안에서 작동)
function Modal(props) {
  return (
    <div className="modal">
      <h4>제목 : {props.title}</h4>
      <p>날짜 : {props.date}</p>
      <div>
        <h5>상세내용</h5>
        <span>{props.content}</span>
      </div>
    </div>

  )
}
// Article 컴포넌트(App 컴포넌트 안의 map 함수에서 작동)
function Article(props) {
  return (
    <div className="list" key={props.key}>
      <h4>게시글 : {props.title} <span onClick={
        () => {
          // 부모 컴포넌트로부터 받아온 state 변경 함수
          // index로 접근해서 likes 값 변경
          props.setLikes(props.index)
        }
      }>😍</span> {props.likes}</h4>
      <p>날짜 : {props.date}</p>
      <button onClick={() =>  {
        let newShowModal = [...props.showModal];
        newShowModal[props.index] = !newShowModal[props.index];
        props.setShowModal(newShowModal);
      }}>
        {props.showModal[props.index] ? "상세 내용 닫기" : "상세 내용 보기"}</button>
        {props.showModal[props.index] && 
        <Modal 
          title={props.title}
          date={props.date}
          content={props.content}
        />}      
    </div>
  )
}

function App() {
  let [articles, setArticles] = useState([
    {
      title: "파이썬 독학 꿀팁",
      date: "2023-11-9",
      content: "파이썬 독학 개꿀팁 풉니다 ㅋㅋ",
      likes: 3,
    }, 
    {
      title: "남자 코트 추천",
      date: "2023-10-23",
      content: "남자는 역시 트렌치코트지",
      likes: 13,
    }, 
    {
      title: "강남 우동 맛집",
      date: "2024-01-05",
      content: "우동사리 추가요",
      likes: 23,
    }
  ]);
  let [showModal, setShowModal] = useState([false, false, false]);
  
  function setLikes (index) {
    const newArticles = [...articles];
    newArticles[index].likes = newArticles[index].likes+1;
    setArticles(newArticles)
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={ { color: 'blue', fontSize: '16px' } }>김민규의 블로그</h3>
      </div>
      {
        articles.map((x, index) => {
          return (
            <Article 
              key={index}
              index={index}
              title={x.title}
              date={x.date}
              content={x.content}
              likes={x.likes}
              showModal={showModal}
              setShowModal={setShowModal}
              setLikes={setLikes}
            />
            // <div className="list">
            //   <h4>게시글 제목 : {x.title}</h4>
            //   <p>글 발행 날짜 : {x.date}</p>
            //   {/* 상세 페이지 활성화/비활성화 버튼 */}
            //   <button onClick={() =>  {
            //     // 해당 index의 게시글의 값을 반대로
            //     let newShowModal = [...showModal];
            //     newShowModal[index] = !newShowModal[index];
            //     return (setShowModal(newShowModal));
            //   }}>
            //     {/* true면 닫고, false면 열기 */}
            //     {showModal[index] ? "상세 내용 닫기" : "상세 내용 보기"}</button>
            //     {/* true면 모달창 띄우기 */}
            //     {showModal[index] && 
            //     <Modal 
            //       title={x.title}
            //       date={x.date}
            //       content={x.content}
            //     />}
            // </div>
          )
        })
      }
    </div>
  );
}

export default App;
