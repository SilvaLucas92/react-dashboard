import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log('didMount')
        fetch('http://localhost:8000/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)})
        .catch(err => console.log(err))
    }, [])
    return (
        <>       
            <div className='container-panel'>
                <h2>Lista de Usuarios</h2>
                {!users && <p>Cargando..</p> }
                {users && (                 
                    (users.users || []).map((user, i) => {
                        return <>   <h5 key={i}> {user.name} </h5>
                                    <p><Link to={`/users/${user.id}`}>ver mas</Link></p></>
                    })
                )  
                }   
            </div>   
        </>             
    )
}
export default Users;