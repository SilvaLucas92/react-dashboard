
function TopBar({isLoading, products}) {
    return (
        <>         
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
        </>
    )
}
export default TopBar;