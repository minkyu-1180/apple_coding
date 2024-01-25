// src/Detail.js
// 각 상품별로 만들어버리기
// props가 필요하겄구만,,,
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function Detail (props) {
    const { id } = useParams();
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    const navigate = useNavigate();
    console.log(id);
    
    const shoe = props.shoes.find((x) => x.id === parseInt(id, 10));
    // useEffect -> mount, update시 해당 코드 실행
    // 안에 적은 코드는 html 렌더링 이후에 동작함 -> 오래 걸리는 동작 ㅇ넣으면 될듯
    // 반복 연산, 서버에서 데이터 가져오기, 타이머 등
    useEffect(() => {
        // 2초 후에 alert state변수가 false로 바뀌게 동작
        let a = setTimeout(() => { setAlert(false) }, 2000)
        console.log(2)
        return () => {
            console.log(1)
            clearTimeout(a)
        }
    }, [count])
    // mount 시, count라는 state가 변할 경우 실행된다(useEffect 실행 조건)
    // 컴포넌트 mount시 처음만 실행시키고 싶으면 []로 비워두기
    // 재렌더링마다 코드 실행 : useEffect(() => { })
    // mount 시 1회 코드 실행 : useEffect(() =. { }, [])
    // unmount시 1회 코드 실행 : useEffect(() => { return () => {}}, [])
    if (shoe) {
        console.log(`shoe detail : ${shoe}`);
        return (
            <div className="container">
                {count}
                <button onClick={ () => { setCount(count+1) }}>count 증가</button>
                <div className="row">
                    <div className="col-md-6">
                        {
                            alert == true ?
                            <div className="alert alert-warning">
                                2초 이내 구매시 할인
                            </div>
                            : <div className="alert alert-warning">상품 상세 정보</div>
                        }
                        <img 
                            src={process.env.PUBLIC_URL + shoe.imageUrl}
                            width="100%"
                        />
                        <h4 className="pt-5">{shoe.title}</h4>
                        <p>{shoe.content}</p>
                        <p>{shoe.price}</p>
                        <button className="btn-btn-danger">주문하기</button>

                    </div>
                </div>
            </div>
        )
    } else {
        console.log('no shoe detail')
        return (
            <>
                <div>해당 상품 정보가 존재하지 않습니다.</div>
                <button className="btn-btn-danger" onClick={() => {navigate('/')}}>홈페이지로 돌아가기</button>
            </>
        )
    }
   
    
    }

export default Detail;