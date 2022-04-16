import React from 'react';
import imagenFondo from '../images/404.jpg'
function NotFound(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <img src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}
export default NotFound;