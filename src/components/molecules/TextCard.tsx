type Props = {
    label?: string;
    value?: string;
  };
  
  function TextCard({ label, value }: Props) {
    return (
      <>
        <div className="relative h-[50%] flex justify-center bg-sky-50 items-center  rounded-xl border">
          <div className="absolute top-2 left-4 bg-gray-50 px-3 rounded-xl border text-xl font-semibold">
            {label}
          </div>
  
          <div className="flex">
            <span className="text-4xl">{value}</span>
          </div>
        </div>
      </>
    );
  }
  
  export default TextCard;