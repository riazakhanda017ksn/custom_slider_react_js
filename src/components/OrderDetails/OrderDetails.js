import React from 'react';
import "./OrderDetails.css"
import { Card, ListGroup } from 'react-bootstrap';

const OrderDetails = (props) => {
    
    const {name, price,loginUser,Quantity,orderTime}=props.UserOrder

    return (
        <div>
             <section className="mt-5">
                <div className="container">
                    <div className="row">
                       
                            <div className="col-lg-12">
                            <div className="hereTheUserDetails mt-5 d-inline text-center">
                                
                                <ul>
                                    <li>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Header>   <strong>Client Information</strong>     </Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Client - {loginUser}</ListGroup.Item>
                                                <ListGroup.Item>Product Name - {name}</ListGroup.Item>
                                                <ListGroup.Item> Product Price - {price}</ListGroup.Item>
                                                <ListGroup.Item> Product Quantity - {Quantity}</ListGroup.Item>
                                                <ListGroup.Item> Order Time - {orderTime}</ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </li>
                                 
                              
                                </ul>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                
            </section>
        </div>
    );
};

export default OrderDetails;