import React, {useState, useEffect} from "react";
import Div from "./Div";
function Categories() {
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
        <div className="container">       
            {!products.countByCat && <p>Cargando..</p> }
            {products.countByCat && 
                <>
                <div className='container-panel'>
                <ul>
                    <li>Mesas: {products.countByCat.mesas}</li>
                    <li>Escritorios: {products.countByCat.escritorios}</li>
                    <li>Sillas: {products.countByCat.sillas}</li>
                    <li>Sillones: {products.countByCat.sillones}</li>
                    <li>Estanterias: {products.countByCat.estanterias}</li>
                </ul>
                </div>  
            </>}
        </div>  
        <Div />
        </>

    )
}
export default Categories;