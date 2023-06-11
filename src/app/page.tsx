"use client"
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { increment } from "../../state/reducers/counterSlice";

export default function Home() {
  const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  console.log(count);
  const addCount = () => {
    dispatch(increment());
  }
 
  return (
    <main className="relative">
      <div className={`bg-${mainBg} min-h-screen w-full absolute`}></div>
      <div className="relative z-10">
        <h1>jobs</h1>
        <p>{count}</p>
        <button onClick={addCount}>Add</button>
      </div>
    </main>
  );
}
