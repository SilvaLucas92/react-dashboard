import React, {useEffect, useState, useRef} from 'react';
function Users() {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [actualPage, setPage] = useState(1);

    const apiCall = (url, handle) => {
        fetch(url)
            .then(response => response.json())
            .then(data => handle(data))
            .catch(err => console.log(err))
    }
    const showUsers = (users) => {
        setIsLoading(false);
        setUser(users.results);
    }

    useEffect(() => {
        console.log('se monta el componente')
        fetch("http://localhost:8000/api/products")
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                // setUser(data.results)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log('se actualizo')
    }, [user])

    const nextPage = () => {
        setPage(actualPage + 1);
        fetch("https://rickandmortyapi.com/api/character?page=" + actualPage)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            setUser(data.results)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='container'>
            {isLoading && <p>Cargando.....</p>}
            {!isLoading && user &&

                (<>             
                    {user.map((oneUser, i) => {     
                        return  <div key={i} className='container-panel'>
                                    <img src= {oneUser.image} width="120" />
                                    <p>{ oneUser.name } </p>
                                </div>
                })}
                </>)}
            <button onClick={nextPage} className='btn-next'>next</button>
        </div>
    )
}
export default Users;