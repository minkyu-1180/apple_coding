// 메인 페이지
import logo from './logo.svg';
import './App.css'; // 현재 컴포넌트에서 사용할 css 파일 불러오기


function App() {
  // 변수 생성
  let post = "강남 우동 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>글 제목</h4>  
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>글 제목</h4>  
        <p>2월 17일 발행</p>
      </div>
    </div>
    
  );
}

export default App;
