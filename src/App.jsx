import { useState } from "react";

import Page from "./components/PageList";
import PagesData from "./Dummydata";
import LineDropDown from "./components/LineDropDown";
import DoneBtn from "./components/DoneBtn";
function App() {
  return (
    <>
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-[370px] h-[326px] shadow-custom-lg 	rounded-md pt-2 ">
          <Page title={"All Pages"} />
          <LineDropDown />
          <div className="overflow-auto h-[164px] w-[370px] no-scrollbar">
            {PagesData.map((e) => (
              <Page key={e.id} title={e.title} />
            ))}
          </div>
          <LineDropDown />
          <DoneBtn />
        </div>
      </div>
    </>
  );
}

export default App;
