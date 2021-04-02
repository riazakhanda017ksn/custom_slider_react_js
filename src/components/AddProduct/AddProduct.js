import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlug, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../App';
const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL]=useState(null);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const onSubmit = data => {
        const eventData={
            name:data.name,
            quantity:data.quantity,
            price:data.price,
            imageURL:imageURL
        }
        const url=`https://sleepy-woodland-19039.herokuapp.com/addProduct`;

        console.log(eventData);
        fetch(url,{
         method:'POST',
         headers:{
          'content-type' : 'application/json'
         },
         body:JSON.stringify(eventData)
        })
        .then(res=>{
            console.log('res data',res);
        })
    };
    const handleImageUpload=event=>{
        console.log(event.target.files[0]);
      const imageData = new FormData()
      imageData.set('key', '3b8fa16325c0baa1794c79a7349a090d')
      imageData.append('image',event.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', 
      imageData
      )
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    

    return (
        <div>
            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className="col-lg-4 bg-info rounded p-4 ">
                        <div className="admin-panel text-center text-light mb-5">
                        <h3>Admin Panel </h3>
                        </div>
                        
                        <div className="product-manage text-center text-light" >
                        <Link to="/manageOrder">  <h5> <span className='mr-4  sticker'><FontAwesomeIcon icon={faUser} /> </span> Manage Product </h5></Link>
                        </div>
                        
                        <div className="product-manage text-center text-light mt-4">
                            <Link to="/admin"><h5> <span className='mr-4  sticker'><FontAwesomeIcon icon={faPlus} /> </span> Add Product </h5></Link>
                        </div>
                        <div className="product-manage text-center text-light mt-4">
                            <Link to="/manageOrder"><h5> <span className='mr-4  sticker'><FontAwesomeIcon icon={faEdit} /> </span> Edit Product </h5></Link>
                        </div>

                    </div>
                    <div className="col-lg-8">
                        <div className="product-container">
                            <div className="add-product-item py-4 ml-5">
                                <h5>Add Product</h5>
                            </div>
                            <div className="product-section">
                                <div class="card">
                                    <div class="card-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="input-inline">
                                        <h6>Product Name </h6>
                                            <input name="name"  placeholder='Product Name' defaultValue="Product Name" ref={register} className="form-control" />
                                            <h6>Quantity </h6>
                                            <input name="quantity"  placeholder='Quantity' defaultValue="Quantity" ref={register} className="form-control" />
                                            
                                            <h6>Add Price</h6>
                                            <input name="price"  placeholder='Add Price' defaultValue="Add Price" ref={register} className="form-control" />
                                            <h6>Upload Photo</h6>
                                            <input name="exampleRequired" type='file' className='form-control border' onChange={handleImageUpload}/>

                                            <input type="submit" value='Upload Photo' className='btn btn-info text-light '/>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                               <div className="row">
                                   
                                   <div className="col-lg-12 ml-auto"> 
                                   <div className="save-button">
                                        <button className='btn btn-info text-light mt-4'>Save</button>
                                    </div></div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;