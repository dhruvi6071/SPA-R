import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import ProductsPage from "./Products";

//http://example.com/products
const router = createBrowserRouter([
  {path: '/', element: <p><HomePage/></p> },
  {path: '/product', element:<ProductsPage />}
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
