import React, {useState, useEffect} from 'react';
import Users from './Users';
import Products from './Products';
import TopBar from './TopBar';
import Categories from './Categories';
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
                <TopBar isLoading={isLoading} products={products}/>                
                <Products products={products}/>
                <Users />
                <Categories />
            </div>
        </main>
    )
}
export default Home;