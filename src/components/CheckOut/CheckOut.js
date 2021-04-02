import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { _id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://sleepy-woodland-19039.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setData(data))
    }, [0])
    const findResult = data.find(data => data._id == _id)
    const name = findResult?.name
    
    const price = findResult?.price
   
    const loginUser= loggedInUser.email 
 
    const id=findResult?._id
  
    const Quantity= findResult?.quantity
  
    const orderTime = new Date()
  
    
    const handleCheckIn =()=>{
        const orderDetails ={
            name,
            price,
            loginUser,
            id,
            Quantity,
            orderTime
        };
        
        console.log('here the main details', orderDetails);
        fetch("https://sleepy-woodland-19039.herokuapp.com/UserDetailsItem",{
            method:"POST",
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(orderDetails)
        })
        .then(res=>res.json())
        .then(result =>{
            if(result){
                alert('data has been uploaded')
            }
        })
       
    }
    
    return (
        <div>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <div className="table-item mt-5">



                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"></th>
                                            <td>{name}</td>
                                            

                                            <td>1</td>
                                            <td> 
                                                $ {price}
                                           
                                            </td>
                                        </tr>


                                    </tbody>

                                    <tr>
                                        <th scope="row"></th>
                                        <td> <span>Total Price</span> </td>

                                        <td></td>
                                        <td>
                                            <span>$ {price}</span>
                                           
                                             
                                        </td>
                                    </tr>
                                    


                                </table>
                            </div>
                        </div>
                      
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="checkOut-section">
                        <Link to="/order"> <button className='btn btn-info text-light edit mr-5' onClick={handleCheckIn}>CheckOut</button></Link>
                                 
                                </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CheckOut;