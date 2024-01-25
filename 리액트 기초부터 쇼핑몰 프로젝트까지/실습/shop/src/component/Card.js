import { Image ,Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Col 부분을 카드 컴포넌트로 바꾸기
function Card (props) {
    const navigate = useNavigate();
    const shoe = props.shoes[props.id];
    return (
        <Col md={4}>
            <Image src={process.env.PUBLIC_URL + shoe.imageUrl} width="80%" />
            <h3>상품 이름 : {shoe.title}</h3>
            <p>상품 설명 : {shoe.content}</p>
            <p>상품 가격 : {shoe.price}</p>
            {/* <Link to={`/detail`}>상세 정보</Link> */}
            {/* <Link to={`/detail/${props.shoe.id}`}>상세 정보</Link> */}
            <Button onClick={() => {navigate(`/detail/${shoe.id}`)}}>상세 정보</Button>
        </Col>
    )
  }
  
export default Card;