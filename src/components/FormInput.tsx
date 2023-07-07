import { useContext } from "react";
import {ChangeEvent} from "react";

import { ThemeContext } from "../contexts/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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

    return (
        <>
            <div className="relative inline-block left-1/2 -translate-x-1/2">
                <span onClick={openFilter}>
                    <FontAwesomeIcon
                        icon={faFilter}
                        style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "6rem"}}/>
                </span>
                <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "1.5rem", background: "#5964E0", color: "fff", padding: "10px", borderRadius: "5px"}}/>
                <input type={type} onChange={onChange} className={`${customStyles} ${bgColor} rounded-lg`} placeholder={placeholder} />
            </div>
            
        </>
    )
}