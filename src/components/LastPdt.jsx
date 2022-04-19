import React, {useState, useEffect} from "react";
function LastPdt() {
    const [product, setProduct] = useState();

    useEffect(() => {
        console.log('didMount')
        fetch('http://localhost:8000/api/products')
        .then(response => response.json())
        .then(data => {setProduct(data)})
        .catch(err => console.log(err))
    }, [])

    return (
        <>        
                <div className='container-panel'>
                    {!product && <p>Cargando...</p>}
                    {product && (
                        <>
                            <h2>Ultimo Producto en la Data Base</h2>
                            <img src={product.lastPdtInDB.image} alt="nono" />
                            <h5>{product.lastPdtInDB.lastPdtInDB.name}</h5>
                            <p>{product.lastPdtInDB.lastPdtInDB.description}</p>
                            <span>$ {product.lastPdtInDB.lastPdtInDB.price}</span>
                        </>
                    )}
                </div>
        </>
    )
}
export default LastPdt;