//It contains every dynamic path segment that we define as a property. it is a js object.
import { useParams } from "react-router-dom";

function ProductDetail() {
    const params = useParams();
    return (
        <>
            <h1>Product Details</h1>
            <p>{params.ProductId}</p>
        </>
    )
}

export default ProductDetail;