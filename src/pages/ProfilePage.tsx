import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../app/context/AuthContext";
import { Config } from "../app/config";
import ResultListItem from "../components/organisms/ResultListItem";
import { examResults, ExamResult } from "../app/data";
import PrecentageCard from "../components/molecules/PrecentageCard";
import TextCard from "../components/molecules/TextCard";

type Props = {};

function ProfilePage({}: Props) {
  const { state } = useContext(AuthContext);

  const [results, setResults] = useState<ExamResult[] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentResult = results?.find((r) => r.id === selectedIndex);

  useEffect(() => {
    setResults(examResults);
  }, []);

  return (
    <div
      className="flex pt-16 w-[100%] bg-red-10 relative"
      style={{ maxHeight: "calc(100vh-4rem)" }}
    >
      <div className="w-[500px] bg-gray-50 borderl">
        <div className="flex justify-center w-fullc py-4 border h-16">
          <h2 className="text-xl font-semibold text-slate-700">
            {Config.uiMasterData.profile.examSectionTitle}
          </h2>
        </div>

        <div
          className="flex flex-col overflow-y-scroll px-2 pt-2 gap-2"
          style={{ maxHeight: "calc(100vh - 8rem)" }}
        >
          {results?.map((r) => (
            <ResultListItem
              id={r.id}
              title={r.title}
              date={r.date}
              score={r.score}
              unit={r.unit}
              key={r.id}
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-50 border p-2">
        <div className="flex w-ful h-full border rounded-xl">
          {results && (
            <>
              <div className="p-4 w-[100%] bg-gray-50 rounded-l-xl border">
                <h2 className="text-3xl font-semibold w-[100%] text-center">
                  {currentResult?.title}
                </h2>
                <p className="pt-4 text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  pariatur autem. Voluptatem illo officia quae corrupti eligendi
                  soluta voluptatibus sapiente, aliquam quis adipisci esse
                  aspernatur odio, commodi eaque ullam repellendus dolor? Libero
                  dolorem quaerat vel repudiandae velit fugit, est asperiores
                  deleniti explicabo, omnis minima facilis pariatur ad illo!
                  Similique, molestiae?
                </p>
              </div>
              <div className="w-[100%] flex gap-2 bg-gray-50 rounded-r-xl">
                <div className="flex flex-col gap-2 w-[50%] h-[500px] rounded-xl p-4">
                  <TextCard label="Exam" value={currentResult?.title} />
                  <TextCard label="Unit" value={currentResult?.unit} />
                </div>
                <div className="flex flex-col gap-2 w-[50%] h-[500px] rounded-xl p-4">
                  <PrecentageCard
                    label="Marks"
                    value={currentResult?.score?.toString() || ""}
                  />
                  <TextCard label="Date" value={currentResult?.date} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-[500px] bg-gray-50 border">
        <div className="p-2">
          <img className="rounded-xl" src="/img/profile-avatar.jpg" />
        </div>
        <div className="p-2">
          <p>Dileepa Samarawickrama</p>
          <p>Millavitiya Kanishta Vidyalaya</p>
          <p>Grade 10</p>
          <p>Average 65.4%</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
