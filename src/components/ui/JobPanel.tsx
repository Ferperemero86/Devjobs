import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import Image from "next/image"; 

type JobPanelProps = {
    imageSrc: string,
    imageBg: string,
    timePosted: string,
    contract: string,
    title: string,
    companyName: string,
    location: string,
    customStyles?: String,
}

export default function JobPanel({imageSrc, imageBg, timePosted, contract, title, companyName, location, customStyles}: JobPanelProps) {
		const {theme} = useContext(ThemeContext);
 	 	const {mainBg} = theme;
  	const bgColor = mainBg ==="bg-secondColor" ? "bg-fifthColor" : "bg-white";
		const titleColor = mainBg ==="bg-secondColor" ?  "text-white" : "text-fifthColor";

    const bgStyles = {
        backgroundColor: imageBg,
    }

    return(
        <div className={`${customStyles} ${bgColor} relative max-w-sm p-5 rounded-md`}>
            <span style={bgStyles} className="absolute -top-7 flex justify-center items-center w-16 h-16 rounded-md">
							<span className="w-10 h-10 relative">
								<Image src={imageSrc} alt="job logo" fill={true} priority={true} />
							</span>
            </span>
            <p className="mt-8 text-fourthColor">{`${timePosted} . ${contract}`}</p>
            <p className={`${titleColor} text-fifthColor text-lg font-bold mt-1`}>{title}</p>
            <p className="text-fourthColor mt-1">{companyName}</p>
            <p className="text-thirdColor font-bold mt-3">{location}</p>
        </div>
    )
}