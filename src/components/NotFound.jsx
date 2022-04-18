import React from 'react';
import imagenFondo from '../images/404.jpg'
import Div from './Div';
function NotFound(){
    return(
        <>
        <Div />
            <div className='container'> 
                <div className="text-center">
                    <h1>404 Not Found</h1>
                    <img src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                </div>
            </div>
        <Div />
        </>
    )
}
export default NotFound;