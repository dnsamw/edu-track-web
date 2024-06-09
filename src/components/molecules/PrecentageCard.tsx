import React from "react";

type Props = {
  label?: string;
  value?: string;
};

function PrecentageCard({ label, value }: Props) {
  let colors = "bg-sky-50";

  if (value)
    colors =
      parseInt(value) < 50
        ? "bg-red-500"
        : parseInt(value) > 75
        ? "bg-green-500"
        : "bg-yellow-500";

  
  return (
    <>
      <div className={`relative h-[50%] flex justify-center items-center  rounded-xl border ${colors}`}>
        <div className="absolute top-2 left-4 bg-gray-50 px-3 rounded-xl border text-xl font-semibold">
          {label}
        </div>

        <div className="flex">
          <span className="text-8xl">{value}%</span>
        </div>
      </div>
    </>
  );
}

export default PrecentageCard;
