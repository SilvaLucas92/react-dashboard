import React, {useState, useEffect} from "react";
function UserDetail(props) {
    const [user, setUser] = useState();
    let id = props.match.params.id;
    useEffect(() => {
        console.log('didMount')
        fetch('http://localhost:8000/api/users/' + id)
        .then(response => response.json())
        .then(data => {
            setUser(data)})
        .catch(err => console.log(err))
    }, )
    return (
        <>        
        <div className='container-panel'>
        {!user && <p> Cargando.... </p>}
        {user && (
            <>  <h2>Perfil del usuario</h2>
                <img src={'/images/' + user.user.image} alt="foto" />
                <h5>{user.user.name}</h5>
                <p>{user.user.email}</p>
            </>
        )}
        </div>
    </>        
    )
}
export default UserDetail;