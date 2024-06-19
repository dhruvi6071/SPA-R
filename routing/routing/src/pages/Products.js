import { Link } from "react-router-dom";

//This could be data coming from backend.
const PRODUCTS = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The product page </h1>
      <ul>
        {/* <li><Link to="./product.product-1">Product 1</Link></li>
        <li><Link to="./product.product-2">Product 2</Link>Product 2</li>
        <li><Link to="./product.product-3">Product 3</Link></li> */}

        {/* Mapping dynamicallly */}
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id} >{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
