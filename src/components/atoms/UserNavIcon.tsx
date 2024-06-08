import React from "react";
import { Link } from "react-router-dom";

type Props = {
  userDpUrl?: string;
  userName?: string;
  userEmail?: string;
};

function UserNavIcon({
  userDpUrl = "/img/profile-avatar.jpg",
  userName = "John Doe",
  userEmail = "dnsam.mit@gmail.com",
}: Props) {
  return (
    <>
      <Link to={"/profile"} className="flex gap-4 items-center h-[100%] p-2">
        <img className="h-[100%] rounded-full border-4 border-slate-300" src={userDpUrl} alt={userName} />
        <div className="flex flex-col">
          <span className="text-2xl font-semibold text-slate-900">{userName}</span>
          <span className="text-xs">{userEmail}</span>
        </div>
      </Link>
    </>
  );
}

export default UserNavIcon;
