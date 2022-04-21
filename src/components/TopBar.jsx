
import React, {useState, useEffect} from "react";
function TopBar({users}) {
    const [products, setProducts] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    useEffect(() => {
        console.log('didMount')
        fetch('http://localhost:8000/api/products')
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setProducts(data)})
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <div className='container'>        
            <div className='container-mini'>
                {isLoading.length < 0 && <p>Cargando..</p> }
                { !isLoading && products &&(                
                <> 
                <h5>Cantidad de Products: </h5>
                <span> {products.count}</span>
                </> )  
                }
            </div>
            <div className='container-mini'>
                {isLoading.length < 0 && <p>Cargando..</p> }
                { !isLoading && products &&(                
                <> 
                <h5>Cantidad de Categorias:  </h5>
                <span> {products.countAllCat}</span>
                </> )  
                }
            </div>
            <div className='container-mini'>
                {!users < 0 && <p>Cargando..</p> }
                { users &&(                
                <> 
                <h5>Cantidad de usuarios: </h5>
                <span>{users.count}</span>
                </> )  
                }
            </div>
        </div>       
        </>
    )
}
export default TopBar;