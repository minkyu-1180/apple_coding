/* eslint-disable */ 
// warning 멘트 지우기

// 메인 페이지(blog/src/App.js)
import { useState } from 'react';
import './App.css'; 
function App() {

  let [titles, setTitles] = useState(["강남 우동 맛집", "남자 코트 추천", "파이썬 독학 꿀팁"]);
  let [likeNumber, setLikeNumber] = useState(0) // 초기값 0으로

  // span태그를 누를 때 발생하는 이벤트 핸들러
  function increaseLikeNumber () {
    // state 변경 함수 호출
    // likeNumber의 값을 likeNumber+1로 바꿔버림
    setLikeNumber(likeNumber + 1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={ { color: 'blue', fontSize: '16px' } }>김민규의 블로그</h3>
      </div>

      <div className="list">
        {/* span 태그 클릭 시, 좋아요의 개수가 올라가게 동작해보자! */}
        {/* likeNumber의 값은 누를 때 마다 변경 -> useState */}
        {/* span 태그를 누르면(event 발생) -> state 변경(state 변경 함수 호출) */}
        <h4>글 제목 : { titles[0] } <span onClick={ increaseLikeNumber }>👍</span> { likeNumber }</h4>
        {/* <h4>글 제목 : { titles[0] } <span onClick={ () => {
          setLikeNumber(likeNumber + 1)
        } }>👍</span> { likeNumber }</h4> */}
        <p>발행일자 : 2023년 12월 25일</p>
      </div>
      <div className="list">
        <h4>글 제목 : { titles[1] }</h4>
        <p>발행일자 : 2023년 12월 27일</p>
      </div>
      <div className="list">
        <h4>글 제목 : { titles[2] }</h4>
        <p>발행일자 : 2024년 01월 13일</p>
      </div>

    </div>
  );
}

export default App;
