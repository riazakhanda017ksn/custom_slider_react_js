import React, { useEffect, useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import "./Order.css"

const Order = () => {
    const [UserDetails,setUserDetails]=useState([])

    useEffect(()=>{
        fetch('https://sleepy-woodland-19039.herokuapp.com/UserDetailsShow')
        .then(res=>res.json())
        .then(data=>setUserDetails(data))
    },[0])
    
    return (
        <div>
          {
              UserDetails.map(UserDetail=><OrderDetails UserOrder={UserDetail}></OrderDetails>)
          }
        </div>
    );
};

export default Order;