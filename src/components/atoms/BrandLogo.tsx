import React from "react";
import { Config } from "../../app/config";

type Props = {};

function BrandLogo({}: Props) {
  return (
    <div className="flex gap-4 items-center h-[100%] p-2">
      <img
        className="h-[100%] rounded-full"
        src={Config.uiMasterData.brandLogo}
        alt={Config.uiMasterData.brandName}
      />
      <div className="flex flex-col">
        <span className="text-3xl font-blod">
          {Config.uiMasterData.brandName}
        </span>
        <span>{Config.uiMasterData.brandTagLine}</span>
      </div>
    </div>
  );
}

export default BrandLogo;
