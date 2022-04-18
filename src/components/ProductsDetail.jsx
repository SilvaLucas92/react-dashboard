import React, {useState, useEffect} from "react";
import Div from "./Div";
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
    }, [])

    return (
            <>
                <Div />
                {!product && <p> Cargando.... </p>}
                {product && (
                    <>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse, eum distinctio eveniet voluptatibus perferendis animi officiis dolor aspernatur incidunt aliquam delectus dignissimos modi fuga maiores corporis quo placeat quidem!</p>
                    <h1>{product.data.name}</h1>
                    </>
                )}
                <Div />
            </>
    )
}
export default ProductsDetail;