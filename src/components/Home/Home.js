import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://sleepy-woodland-19039.herokuapp.com/events')
            .then(res =>res.json())
            .then(data => setProducts(data))
    },[0])
    return (
        <div>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"> </div>
                        <div className="col-lg-6">
                            <form action="">
                                <div className="search-item text-center mb-5">
                                    <input type="text" className="form-control" name="" id="" placeholder='Search Mobile ' />
                                    <button className="btn btn-outline-info">search</button> 
                         
                                </div>
                                <div className="div-for-spinner text-center">
                           {
                               products.length === 0  && <Spinner animation="border" variant="secondary" />
                           }
                           </div>
                            </form>
                        </div>
                        <div className="col-lg-3"> </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                           {
                               products.map(product=><Product ProductDetails={product}></Product>)
                           }

                          
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;