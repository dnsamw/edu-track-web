import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

type Props = {
  isTopNav?: boolean;
};

const CommonLayout = ({ isTopNav = false }: Props) => {
  return (
    <>
      <NavBar />
      <main className={`flex flex-col ${isTopNav ? "mt-30" : "mt-2"}`}>
        <Outlet />
      </main>
    </>
  );
};

export default CommonLayout;
