import React, {useState, useEffect} from "react";
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
        <div className='container-panel'>
            {!products.countByCat && <p>Cargando..</p> }
            {products.countByCat && 
                <>
                    <h2>Cantidad de Productos por categoria: </h2>    
                    <ul>
                        <li>Mesas: {products.countByCat.mesas}</li>
                        <li>Escritorios: {products.countByCat.escritorios}</li>
                        <li>Sillas: {products.countByCat.sillas}</li>
                        <li>Sillones: {products.countByCat.sillones}</li>
                        <li>Estanterias: {products.countByCat.estanterias}</li>
                    </ul>
            </>} 
    </div>    
        </> 
    )
}
export default Categories;