import MainNavigation from "../component/mainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error occured</h1>
        <p>Could not find the page</p>
      </main>
    </>
  );
}

export default ErrorPage;
