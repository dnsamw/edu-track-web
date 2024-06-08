import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

type Props = {
  isTopNav?: boolean;
};

const CommonLayout = ({ isTopNav = false }: Props) => {
  return (
    <div className="max-h-screen" style={{maxHeight:'100vh !important'}}>
      <NavBar/>
      <main className={`flex flex-col items-center bg-sky-500 max-h-screen ${isTopNav ? "mt-30" : "mt-2"}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default CommonLayout;
