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
    <div className="list">
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
      <button onClick={() => {props.deleteArticle(props.index)}}>
        글 삭제</button>     
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
  // articles 배열의 길이 만큼 Array 생성 후, 각 원소를 false로 채운다
  let [showModal, setShowModal] = useState(Array(articles.length).fill(false));
  // 게시글 작성 시 입력 타이틀
  let [inputTitle, setInputTitle] = useState("");
  // 게시글 작성 시 입력 콘텐츠
  let [inputContent, setInputContent] = useState("");
  // 게시글 작성 시간
  let today = new Date();

  function setLikes (index) {
    const newArticles = [...articles];
    newArticles[index].likes = newArticles[index].likes+1;
    setArticles(newArticles)
  }
  function deleteArticle (index) {
    const newArticles = [...articles];
    // 배열의 index 번호에 있는 원소를 제거
    newArticles.splice(index, 1);
    setArticles(newArticles)
  }
  function addArticle (title, content) {
    const newArticles = [...articles];
    const article = {
      title:title,
      // getMonth() : index로 가져오는 듯?
      date:`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
      content:content,
      likes:0,
    }
    newArticles.push(article);
    setArticles(newArticles);
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
              deleteArticle={deleteArticle}
            />
          )
        })
      }
      <input onChange={(e) => {
        setInputTitle(e.target.value);
        // console.log(inputValue);
      }} type="text"/>
      <textarea onChange={(e) => {
        setInputContent(e.target.value);
      }}></textarea>
      <button onClick={() => {
        addArticle(inputTitle, inputContent);
        }
      }>글 작성하기</button>
    
        {/* 
        <input type="range" />
        <input type="checkbox" />
        <input type="date" />
        <select>
          <option value="">선택해!!</option>
          <option value="first">1</option>
          <option value="second">2</option>
        </select>
      */}
    </div>
  );
}

export default App;
