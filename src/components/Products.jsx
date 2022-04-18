import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Div from "./Div";
function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('didMount')
        fetch('http://localhost:8000/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data)})
        .catch(err => console.log(err))
    }, [])
    return (
        <>
        <Div />
        <div className='container'>       
            <div className='container-panel'>
                {!products && <p>Cargando..</p> }
                {products && (                 
                    (products.data || []).map((pdt, i) => {
                        return <> <h5 key={i}>Cantidad de Products: {pdt.name} </h5>
                                    <p><Link to={"/products/{pdt.id}"}>ver mas</Link></p></>
                    })
                )  
                }   
                                    {/* <Route path="/products/:id" component={ProductsDetail}>
                                    </Route> */}
            </div>
        </div>
        <Div />      
        </>                  
    )
}
export default Products;