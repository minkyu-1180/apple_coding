import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

// 다른 js 파일에서 만든 Product 컴포넌트 갖다 쓰기
import Product from './Product'; 

import shoes from '../data';

function ProductList() {
    let [products, setProducts] = useState(shoes);
  
    return (
        <Row>
          { products.map((x, index) => (
  
            <Product
                key={x.id}
                shoe={x}
                // key={x.id}
                // index={index}
                // url={x.url}
                // title={x.title}
                // content={x.content}
                // price={x.price}
            />
            ))}
        </Row>
      
    )
  }

export default ProductList;