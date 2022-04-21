
import Users from './Users';
import Products from './Products';
import TopBar from './TopBar';
import Categories from './Categories';
import LastPdt from './LastPdt';
import React, {useState, useEffect} from "react";
function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log('didMount')
        fetch('http://localhost:8000/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)})
        .catch(err => console.log(err))
    }, [])
    return(
        <main>           
            <div className='container'> 
                <TopBar users={users}/> 
            </div>  
            <div  className='container-main'>             
                <Users />
                <Products/>
                <LastPdt />
                <Categories />
            </div>  
        </main>
    )
}
export default Home;