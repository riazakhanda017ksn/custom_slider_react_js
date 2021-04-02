import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './ProductList.css'

const ProductList = (props) => {
    const { name, price, quantity, _id } = props.productItem
    const hidden=document.getElementById('delete')
    const deleteEvent=id=>{
        
        fetch(`https://sleepy-woodland-19039.herokuapp.com/deleteProduct/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                hidden.style.display='none'
            }
            console.log('result',result);
        })
       }
    return (
        <div className='custom-padding'>
            <section id='delete'  >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="products-details ">
                                <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td><span>{name}</span></td>
      <td><span>{price}</span></td>
      <td><span>{quantity}</span></td>
      <td>
          <button className='btn btn-outline-info' onClick={()=>deleteEvent(_id)}  >Delete</button>
      </td>
    </tr>
  </tbody>
</table>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;