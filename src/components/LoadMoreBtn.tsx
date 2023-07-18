import { MouseEvent } from "react";

type LoadMoreProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	text: string
}

export default function LoadMoreBtn({onClick, text}: LoadMoreProps) {
	return (
	  <button className="py-3 px-3.5 bg-sixthColor w-48 m-auto text-center block font-bold text-white rounded" onClick={onClick}>{text}</button>
	);
}