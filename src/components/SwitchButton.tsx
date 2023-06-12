import { useContext, useEffect } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

export default function SwitchButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { mainBg } = theme;

  const changeBg = () => {
    if (mainBg === "bg-firstColor") {
      return setTheme({mainBg: "bg-secondColor"});
    }
    if (mainBg === "bg-secondColor") {
      return setTheme({mainBg: "bg-firstColor"});
    }
  }

  return (
    <label className="relative inline-flex cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer relative" onChange={changeBg}/>
      <div className="w-[44px] h-[28px] bg-white rounded-full peer peer-checked:after:translate-x-[16px] peer-checked:after:border-white after:content-[''] after:absolute after:top-2/4  after:translate-y-[-50%] after:left-[4px] after:bg-thirdColor after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all outline-none"></div>
    </label>
  );
}
