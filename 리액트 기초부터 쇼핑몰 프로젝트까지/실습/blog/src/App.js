/* eslint-disable */ 
// warning 멘트 지우기

// 메인 페이지
import { useState } from 'react';
import './App.css'; // 현재 컴포넌트에서 사용할 css 파일 불러오기


function Modal(props) {
  return (
    <div className="modal">
      <h4>제목 : {props.title}</h4>
      <p>날짜 : {props.date}</p>
      <div>
        <h4>상세내용</h4>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

function App() {
  // 변수 생성
  let [user, setUser] = useState("김민규");

  // 0 : 기본
  // 1 : 오름차순 정렬
  // 2 : 추천순 정렬
  let [sortType, setsortType] = useState("default");


  const sortArticles = () => {
    // 배열 복사
    let sortedArticles = [...articles];

    switch (sortType) {
      case "recommend": // 추천순일 경우
        sortedArticles.sort((a, b) => b.likes - a.likes);
        break;
      
      case "ascending": // 오래된 순
        sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;

      case "descending": // 최근순
        sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date))
    }

    setArticles(sortedArticles);
  }


  let [articles, setArticles] = useState([
    {
      title: "남자 추천 코트",
      date: '2023-09-17',
      content: "남자는 역시 코트지 ㅋ ㅋ ",
      likes: 5,
      liked: false,
      modal: false,
    },
    {
      title: "겨울 회 추천 리스트",
      date: '2024-01-13',
      content: "방어에 소주 한잔",
      likes: 10,
      liked: false,
      modal: false,
    },
    {
      title: "올해의 top100 국내곡",
      date: '2023-12-31',
      content: "대 진 스",
      likes: 3,
      liked: false,
      modal: false,
    },
  ]);
  // let [likes, setLikes] = useState(0);
  // let [modal, setModal] = useState(false);

  const toggleLike = (index) => {
    let newArticles = [...articles];
    newArticles[index].liked = !newArticles[index].liked;

    if (newArticles[index].liked) {
      newArticles[index].likes++;
    } else {
      newArticles[index].likes--;
    }

    setArticles(newArticles);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h2>{ user }님의 블로그</h2>

        <label>정렬 방식 : 
          <select 
            value={sortType}
            onChange={(e) => {
              setsortType(e.target.value)
            }}
          >
            <option value="descending">최근순</option>
            <option value="ascending">오래된순</option>
            <option value="recommend">추천순</option>
          </select>
        </label>
        <button onClick={sortArticles}>정렬</button>
      </div>

      {
        articles.map((article, index) => {
          return (
            <div key={index} className="list">
              <h4>제목 : { article.title } <span onClick={
                () => {
                  toggleLike(index)
                  // let newArticles= [...articles];
                  // newArticles[index].likes = newArticles[index].likes + 1;
                  // setArticles(newArticles)
                }
              } style={{ color: article.liked ? 'red' : 'black' }}>❤</span> { article.likes }</h4>
              <p>발행 일자 : { article.date }</p>
              <button onClick={
                () => {
                  let newArticles= [...articles];
                  newArticles[index].modal = !newArticles[index].modal;
                  setArticles(newArticles)}}>상세보기</button>
              {
                article.modal ? 
                <Modal 
                  // props의 속성 전달(props.title, props.date, props.content)
                  title={article.title}
                  date={article.date}
                  content={article.content}
                /> : null
              }
            </div>
            )
          }
        )
      }
      
    </div>
    
  );
}

export default App;
