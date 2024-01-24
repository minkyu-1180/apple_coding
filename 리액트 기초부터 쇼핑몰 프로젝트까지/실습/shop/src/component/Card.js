import { Image ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Col 부분을 카드 컴포넌트로 바꾸기
function Card (props) {
    return (
        <Col md={4}>
            <Image src={process.env.PUBLIC_URL + props.shoe.imageUrl} width="80%" />
            <h3>상품 이름 : {props.shoe.title}</h3>
            <p>상품 설명 : {props.shoe.content}</p>
            <p>상품 가격 : {props.shoe.price}</p>
            <Link to={`/detail`}>상세 정보</Link>
            {/* <Link to={`/detail/${props.shoe.id}`}>상세 정보</Link> */}
        </Col>
    )
  }
  
export default Card;