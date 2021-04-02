import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import ProductList from '../ProductList/ProductList';
import './ManageOrder.css'
const ManageOrder = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const [manages,setManages]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5055/events")
        .then(res=>res.json())
        .then(data=>setManages(data))
    })
    return (
        <div>
            {
                manages.map(manage=><ProductList productItem={manage}></ProductList>)
            }
        </div>
    );
};

export default ManageOrder;