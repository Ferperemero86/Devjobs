import { MouseEvent } from "react";

type LoadMoreProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function LoadMoreBtn({onClick}: LoadMoreProps) {
	return (
	  <button className="py-3 px-3.5 bg-sixthColor w-48 m-auto mt-12 text-center block font-bold text-white rounded" onClick={onClick}>Load More</button>
	);
}