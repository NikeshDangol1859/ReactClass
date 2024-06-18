import React, { useState } from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'

function FetchAPI() {
    
    const [apiData, setApiData] = useState([]);
    const [apicat, setApicat] = useState([]);


    useEffect(() => {
        // Fetching product data
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setApiData(data);
                setFilteredData(data);
            })

            fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setApicat(data))
    }, []);

    

    return (
        <>
            <div className="container">
                <h3>Category</h3>
                <div className="row bg-secondary text-light d-flex">
                    {apicat.map((category, index) => (
                        <div className="col-2" key={index}>                            
                            <Link to={`/category/${category}`}><h5>{category}</h5></Link>
                        </div>
                    ))}
                    <div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>

                </div>
                
            </div>

            <div className="container">
                <h1 className='text-center bg-warning my-2'>Products</h1>
                <div className="row">
                    {apiData.map(product => (
                        <div className="col-md-3 d-flex my-3">
                        <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <p>Name: {product.title}</p>
                                    <p>Description: {product.description}</p>
                                    <p>Price: $ {product.price}</p>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
        </>
    );
}

export default FetchAPI
