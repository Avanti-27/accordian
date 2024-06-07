import { useState } from "react";
const Accordian = ({ title, content }) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <div
        className="bg-blue-700 w-2/4 mx-auto flex justify-between m-2"
        onClick={handleClick}
      >
        <h1 className="text-2xl p-2 m-4">{title}</h1>
        <button className="text-2xl p-2 m-4 font-bold">
          {display ? "-" : "+"}
        </button>
      </div>
      {display && (
        <div className="w-2/4 text-2xl p-2 m-4 mx-auto text-justify">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordian;
