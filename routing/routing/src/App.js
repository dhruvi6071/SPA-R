import {
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<HomePage />}></Route>
//       <Route path="/product" element={<ProductsPage />}></Route>
//     </Route>

// );

//http://example.com/products
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/product", element: <ProductsPage />},
      //after / colon : is a dynamic part.
      {path: "/product/:productId", element: <ProductDetail />},

      //Different path needs more lines of code and will not be dynamic.
      // {path: "/product/product-2", element: <ProductDetail />},
      // {path: "/product/product-3", element: <ProductDetail />}
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
