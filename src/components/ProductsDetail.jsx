import React, {useState, useEffect} from "react";
function ProductsDetail(props) {
    const [product, setProduct] = useState();
    let id = props.match.params.id;
    useEffect(() => {
        console.log('didMount')
        fetch('http://localhost:8000/api/products/' + id )
        .then(response => response.json())
        .then(data => 
            // {console.log(data)})
            setProduct(data))
        .catch(err => console.log(err))
    }, )
    return (
            <>        
                <div className='container-panel'>
                {!product && <p> Cargando.... </p>}
                {product && (
                    <>
                        <img src={'/images/' + product.data.image} alt="foto" />
                        <h2>Detalle del producto</h2>
                        <h5>{product.data.name}</h5>
                        <p>{product.data.description}</p>
                        <span>$ {product.data.price}</span>
                    </>
                )}
                </div>
            </>
    )
}
export default ProductsDetail;