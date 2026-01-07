import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </div>
    </>
  );
}

export default MainLayout;
