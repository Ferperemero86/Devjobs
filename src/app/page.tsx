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

  console.log('render');
  const addCount = () => {
    dispatch(increment());
  }
 
  return (
    <main className={`bg-${mainBg} min-h-screen w-full absolute`}>
     
    </main>
  );
}
