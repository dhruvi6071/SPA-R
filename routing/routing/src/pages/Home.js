import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  function navigateHandler () {
    navigate('/product');
  }
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/product">product page</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
