import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";

//http://example.com/products
const router = createBrowserRouter([
  {path: '/', element: <p><HomePage/></p> },
  {}
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
