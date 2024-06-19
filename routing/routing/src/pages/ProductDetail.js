//It contains every dynamic path segment that we define as a property. it is a js object.
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
    const params = useParams();
    return (
        <>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
            
            {/* Here ".." is used to go previous route. and it is a relative path not absolute */}
            <p><Link to=".." relative="path">Back</Link></p>
            {/* In above line if relative="route" then whole route will go back previous route but if relative="path" it goes on previous path */}
            
        </>
    )
}

export default ProductDetail;