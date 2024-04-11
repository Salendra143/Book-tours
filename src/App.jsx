import React, { useState } from "react";
import Header from "./component/Header";
import Cards from "./component/Cards";
import datainfo from "./datainfo";
const App = () => {
  const [data, setdata] = useState(datainfo);

  function removeCard(id) {
    const newdata = data.filter((card) => card.id !== id);
    setdata(newdata);
  }
  if (data.length === 0) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-700">
        <p className="text-[2rem] ">No Tours Left</p>
        <button
          className="text-[1.5rem] px-6 font-semibold rounded-lg bg-blue-300 hover:bg-blue-400 active:bg-blue-700"
          onClick={() => setdata(datainfo)}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <div>
        <Header />
        <Cards userinfo={data} removeCard={removeCard} />
      </div>
    </>
  );
};

export default App;
