"use client"

import { useContext, useEffect } from "react";
import Image from "next/image"; 

import { ThemeContext } from "@/contexts/ThemeContext";
import { useAppSelector, useAppDispatch } from "@/state/hooks";

import data from "../../../../data";

type Job = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};

interface jobDetails {
	jobDetails: Job
}

type Params = {
	id: string
}

interface PageProps {
	params: Params
}

const JobDetailsHeader = ({jobDetails}: jobDetails) => {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
	const bgColor = mainBg ==="bg-secondColor" ? "bg-fifthColor" : "bg-white";
	const titleColor = mainBg ==="bg-secondColor" ?  "text-white" : "text-fifthColor";

	const logo = jobDetails?.logo;
	const logoBackground = jobDetails?.logoBackground;
	const company = jobDetails?.company;
	const website = jobDetails?.website;

	const bgStyles = {
		backgroundColor: logoBackground,	
	}

  return (
		<div className={`${bgColor} relative max-w-sm p-5 rounded-md flex justify-center text-center mx-auto`}>
    	<span style={bgStyles} className={`absolute -top-7 flex justify-center items-center w-16 h-16 rounded-md`}>
				<span className={`w-10 h-10 relative`}>
					{logo ? <Image src={logo} alt="job logo" fill={true} priority={true} /> : null}
				</span>
    	</span>
			<div className="mt-10">
		  	<p className={`${titleColor} text-fifthColor text-lg font-bold mt-1`}>{company}</p>
      	<p className="text-fourthColor mt-1">{company}.com</p>
      	<a className="text-thirdColor bg-thirdColor bg-opacity-25 font-bold mt-3 rounded-md p-2 inline-block" href={website} target="_blank">Company Site</a>
			</div>
  	</div>
	)
}

export default function Page({params}: PageProps) {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
	const bgColor = mainBg ==="bg-secondColor" ? "bg-fifthColor" : "bg-white";
	const titleColor = mainBg ==="bg-secondColor" ?  "text-white" : "text-fifthColor";

	const jobParamId = parseInt(params.id);
	const jobDetails = data.find(job => job.id === jobParamId);

	
	return (
		<main className={`${mainBg} min-h-screen py-20`}>
			 {jobDetails ? <JobDetailsHeader jobDetails={jobDetails} /> : null}
		</main>
	)
}