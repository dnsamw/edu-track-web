import React from "react";

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
      <div className="flex gap-4 items-center h-[100%] p-2">
        <img className="h-[100%] rounded-full" src={userDpUrl} alt={userName} />
        <div className="flex flex-col">
          <span className="text-3xl font-blod">{userName}</span>
          <span>{userEmail}</span>
        </div>
      </div>
    </>
  );
}

export default UserNavIcon;
