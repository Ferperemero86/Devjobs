import { useContext } from "react";
import {ChangeEvent} from "react";

import { ThemeContext } from "../contexts/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    customStyles?: string;
    placeholder?: string;
}


export default function FormInput({type, onChange, customStyles, placeholder}: InputProps) {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
  const bgColor = mainBg ==="bg-secondColor" ? "bg-fifthColor" : "bg-white";

    const openFilter = () => {
        console.log('open');
    }
    console.log(type);
		if (type === "title") {
			return (
        <div className={`${customStyles}`}>
            <span onClick={openFilter}>
                <FontAwesomeIcon
                    icon={faFilter}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "6rem"}}/>
            </span>
            <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "1.5rem", background: "#5964E0", color: "fff", padding: "10px", borderRadius: "5px"}}/>
            <input type="text" onChange={onChange} className={`${customStyles} ${bgColor} rounded-lg w-80 md:w-full md:rounded-tr-none pl-2`} placeholder={placeholder} />
        </div>
    	)
		}

		else if (type === "location") {
			return (
        <div className={`${customStyles}`}>
            <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "1.5rem", color: "#5964e0"}}/>
            				<input type="text" onChange={onChange} className={`${customStyles} ${bgColor} pl-2`} placeholder={placeholder} />
        </div>
			)
		} else  {
			
			return (
				<div className={`${customStyles} rounded-tl-none`}>
					<div className="flex gap-2">
						<input type="checkbox" onChange={onChange} className={`rounded-lg`} placeholder={placeholder} />
						<p className="font-bold">Full Time</p>
					</div>
				</div>
			)
		} 
  
}