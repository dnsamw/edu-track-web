import React from "react";
import { Config } from "../../app/config";
import { Link } from "react-router-dom";

type Props = {};

function BrandLogo({}: Props) {
  return (
    <Link to={'/'} className="flex p-2 gap-4 items-center h-[100%]">
      <img
        className="h-[100%] rounded-full"
        src={Config.uiMasterData.brandLogo}
        alt={Config.uiMasterData.brandName}
      />
      <div className="flex flex-col">
        <span className="text-3xl font-bold">
          {Config.uiMasterData.brandName}
        </span>
        <span className="text-sm">{Config.uiMasterData.brandTagLine}</span>
      </div>
    </Link>
  );
}

export default BrandLogo;
