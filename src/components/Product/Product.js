import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css'


const Product = (props) => {
    const imageItem=props.ProductDetails
    const {imageURL, name , price, _id } = imageItem
    

    
    const history=useHistory()
    const handleClick=(_id)=>{
    const url=`product/${_id}`
     history.push(url)
    }

    return (
        <div className='col-md-4 edit card-img'>
           <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src={imageURL} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                  
                                    <div className="card-container d-flex mt-4">
                                        <div className="button"><Button variant="primary" onClick={()=>handleClick(_id)}>Buy Now</Button></div>
                                        <div className="product-price">
                                            <a href="">$ {price}</a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
         
        </div>
    );
};

export default Product;