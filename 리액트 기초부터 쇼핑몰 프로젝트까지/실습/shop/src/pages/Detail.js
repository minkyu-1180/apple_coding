// src/Detail.js

function Detail () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={process.env.PUBLIC_URL + "/images/shoes1.jpg"}
                        width="100%"
                    />
                    <h4 className="pt-5">제목</h4>
                    <p>상품 설명</p>
                    <p>가격</p>
                    <button className="btn-btn-danger">주문하기</button>

                </div>

            </div>
        </div>
    )
    
    }

export default Detail;