import React, {useState, useEffect} from 'react';
import Users from './Users';
import Products from './Products';

function Home() {
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

    return(
        <main>
            
        <div className='container'> 
            <div className='container-mini'>
                {isLoading.length < 0 && <p>Cargando..</p> }
                { !isLoading && products &&(                
                <> 
                <h5>Cantidad de Products: </h5>
                <span>{products.count}</span>
                </> )  
                }
            </div>
            <div className='container-mini'>
                {isLoading.length < 0 && <p>Cargando..</p> }
                { !isLoading && products &&(                
                <> 
                <h5>Cantidad de Products: </h5>
                <span>{products.count}</span>
                </> )  
                }
            </div>
            <div className='container-mini'>
                {isLoading.length < 0 && <p>Cargando..</p> }
                { !isLoading && products &&(                
                <> 
                <h5>Cantidad de Products: </h5>
                <span>{products.count}</span>
                </> )  
                }
            </div>
                
        <Products productos={products}/>
        
        </div>
        </main>
    )
}
export default Home;