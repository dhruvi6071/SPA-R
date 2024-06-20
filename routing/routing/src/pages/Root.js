import { Outlet } from "react-router-dom";
import MainNavigation from "../component/mainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
