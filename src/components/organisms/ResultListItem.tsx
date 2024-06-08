import React, { useState } from "react";
import { ExamResult } from "../../app/data";

interface Props extends ExamResult {
  setSelectedIndex: (index: number) => void;
  selectedIndex: number | null;
}

function ResultListItem({
  id,
  title,
  score,
  date,
  unit,
  setSelectedIndex,
  selectedIndex,
}: Props) {
  return (
    <>
      <div
        onClick={() => {
          setSelectedIndex(id);
          console.log(selectedIndex);
        }}
        className={`flex rounded-xl w-full min-h-[100px] bg-gray-100 border cursor-pointer ${
          selectedIndex === id ? "bg-sky-50 border-sky-500" : ""
        }`}
      >
        <div className="flex flex-col justify-center w-[70%] pl-4">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-l text-gray-700">{unit}</div>
          <div className="text-sm text-gray-400">{date}</div>
        </div>
        <div className="flex flex-col justify-center w-[30%] text-4xl font-semibold">
          {score}%
        </div>
      </div>
    </>
  );
}

export default ResultListItem;
