import React from "react"
import {ChangeEvent} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    customStyles?: string;
    placeholder?: string;
}


export default function FormInput({type, onChange, customStyles, placeholder}: InputProps) {

    const openFilter = () => {
        console.log('open');
    }

    return (
        <>
            <span onClick={openFilter}>
                <FontAwesomeIcon
                    icon={faFilter}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "6rem"}}/>
            </span>
            <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ fontSize: 25, position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: "100", right: "1.5rem", background: "#5964E0", color: "fff", padding: "10px", borderRadius: "5px"}}/>
           
            <input type={type} onChange={onChange} className={`${customStyles} rounded-lg relative`} placeholder={placeholder} />
        </>
    )
}