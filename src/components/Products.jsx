import React from "react";

function Products({productos}) {
    return (
        <div className='container-panel'>
        {/* {!productos  && <p>Cargando..</p> }
        {productos && 
            productos.data.map((oneCharacter, i) => {
                return  <ul>
                            <li key= {i} > 
                                <h4>{ oneCharacter.name }: </h4>
                                <span>{ oneCharacter.description }</span>
                            </li>  
                        </ul>                               
        })                                                
        } */}
        </div>
    )   
}
export default Products;