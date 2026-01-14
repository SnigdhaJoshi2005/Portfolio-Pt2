import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const PublicLayout = () => {
  return (
    <>

      <Outlet />
    </>
  );
};

export default PublicLayout;
