import React, { useContext } from "react";
import BrandLogo from "./atoms/BrandLogo";
import UserNavIcon from "./atoms/UserNavIcon";
import UserContext from "../app/context/UserContext";

type Props = {};

function NavBar({}: Props) {
  const { user } = useContext(UserContext);
  return (
    <nav className="fixed flex h-16 bg-slate-50 w-screen border z-10">
      <div className="flex justify-start items-center pl-8 w-[50%]">
        <BrandLogo />
      </div>
      <div className="flex justify-end items-center pr-8 w-[50%]">
        {user && (
          <UserNavIcon
            userName={user.given_name}
            userDpUrl={user.picture}
            userEmail={user.email}
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
