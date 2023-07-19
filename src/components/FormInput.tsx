import { useContext,ChangeEvent, MouseEvent } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

import { useAppSelector } from "@/state/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
		onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    customStyles?: string;
    placeholder?: string;
}


export default function FormInput({type, onChange, onClick, customStyles, placeholder}: InputProps) {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
  const bgColor = mainBg ==="bg-secondColor" ? "bg-fifthColor" : "bg-white";
	const labelColor = mainBg ==="bg-secondColor" ?  "text-white" : "text-fifthColor";

	const jobsReducer = useAppSelector(state => state.jobsReducer);
	const {showFilter} = jobsReducer;
	
   
		if (type === "title") {
			return (
        <div className={`${customStyles}`}>
            <span onClick={onClick}>
                <FontAwesomeIcon
                    icon={faFilter}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "6rem"}}/>
            </span>
            <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "1.5rem", background: "#5964E0", color: "fff", padding: "10px", borderRadius: "5px"}}/>
            <input type="text" onChange={onChange} className={`${customStyles} ${bgColor} ${labelColor} rounded-lg w-full md:rounded-tr-none md:rounded-br-none pl-2 border md:border-0 md:border-r border-gray1 md:border-solid md:m-0`} placeholder={placeholder} />
        </div>
    	)
		}

		else if (type === "location") {
			return (
        <div className={`${customStyles} ${showFilter}`}>
            <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "1.5rem", color: "#5964e0"}}/>
            				<input type="text" onChange={onChange} className={`${customStyles} ${bgColor} pl-2 w-full rounded-lg border md:border-0 md:rounded-tr-none md:rounded-none border-gray1 border-solid md:border-r md:m-0`} placeholder={placeholder} />
        </div>
			)
		} else  {
			
			return (
				<div className={`${customStyles} ${bgColor} ${showFilter} border border-gray1 border-solid md:rounded-bl-none md:rounded-tl-none md:border-none md:m-0`}>
					<div className="flex gap-2 h-20 items-center">
						<input type="checkbox" onChange={onChange} className={`rounded-lg`} placeholder={placeholder} />
						<p className={`${labelColor} font-bold`}>Full Time</p>
					</div>
				</div>
			)
		} 
  
}