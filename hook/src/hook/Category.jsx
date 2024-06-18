import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {
    let [cat,setcat] = useState([])
    let {cat_name} = useParams();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${cat_name}`)
            .then(res=>res.json())
            .then(data=>setcat(data))    
        }, [] )
  return (
    <>
    <h1> <Link to="/"> {cat_name} </Link></h1>
    <div className="container">
        
                <h1 className='text-center bg-warning my-2'>Products</h1>
                <div className="row">
                    {cat.map((cata) => 
                        <div className="col-md-3 d-flex my-3">
                        <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div key={cata.id}>
                                <img src={cata.image} className="card-img-top" alt={cata.title} />
                                <div className="card-body">
                                    <p>Name: {cata.title}</p>
                                    <p>Description: {cata.description}</p>
                                    <p>Price: $ {cata.price}</p>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
      
    </>
  )
}

export default Category
