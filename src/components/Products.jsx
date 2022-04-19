import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
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
            <div className='container-panel'>
                <h2>Lista de Productos</h2>
                {!products && <p>Cargando..</p> }
                {products && (                 
                    (products.data || []).map((pdt, i) => {
                        return <>   <h5 key={i}> {pdt.name} </h5>
                                    <p><Link to={`/products/${pdt.id}`}>ver mas</Link></p></>
                    })
                )  
                }   
            </div>   
        </>                  
    )
}
export default Products;