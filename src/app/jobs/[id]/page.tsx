"use client"

import { useContext } from "react";
import Image from "next/image"; 
import Link from "next/link";

import { ThemeContext } from "@/contexts/ThemeContext";

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

type Params = {
	id: string
}

interface jobDetails {
	jobDetails: Job
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
		<div className={`${bgColor} relative -top-5 w-11/12 p-5 rounded-md flex justify-center text-center mx-auto md:-top-10 md:max-w-6xl md:h-40`}>
    	<span style={bgStyles} className={`absolute -top-7 flex justify-center items-center w-16 h-16 rounded-md md:left-0 md:top-0 md:w-40 md:h-full md:rounded-none`}>
				<span className={`w-10 h-10 relative lg:w-16 lg:h-16`}>
					{logo ? <Image src={logo} alt="job logo" fill={true} priority={true} /> : null}
				</span>
    	</span>
			<div className="mt-10">
		  	<p className={`${titleColor} text-fifthColor text-lg font-bold mt-1 md:absolute md:left-48 md:top-6`}>{company}</p>
      	<p className="text-fourthColor mt-1 md:absolute md:left-48 md:top-14">{company}.com</p>
				<Link className={`${titleColor} mt-14 md:absolute md:left-48 md:top-14 underline`} href="/">Back to Search</Link>
      	<a className="text-thirdColor bg-thirdColor bg-opacity-25 font-bold mt-3 rounded-md p-2 inline-block md:absolute md:right-10" href={website} target="_blank">Company Site</a>
			</div>
  	</div>
	)
};

const JobDetailsBody = ({jobDetails}: jobDetails) => {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
	const bgColor = mainBg ==="bg-secondColor" ? "bg-fifthColor" : "bg-white";
	const titleColor = mainBg ==="bg-secondColor" ?  "text-white" : "text-fifthColor";

	const time = jobDetails?.postedAt;
	const contract = jobDetails?.contract;
	const title = jobDetails?.position;
	const location = jobDetails?.location;
	const websiteUrl = jobDetails?.website;
	const description = jobDetails?.description;
	const requirements = jobDetails?.requirements;
	const role = jobDetails?.role;


  return (
		<div className={`${bgColor} w-11/12 relative p-5 rounded-md mx-auto md:py-14 md:max-w-6xl`}>
    	<div className="w-full">
				<div className="w-full text-left">
					<p className="text-fourthColor">{time} . {contract}</p>
					<p className={`${titleColor} text-fifthColor text-lg font-bold mt-2 md:font`}>{title}</p>
					<p className="text-thirdColor font-bold mt-2">{location}</p>
				</div>
				<a className="mt-10 inline-block bg-thirdColor text-white text-center rounded-sm py-3 w-11/12 md:w-40 md:m-0 md:absolute md:right-10 md:top-20" href={websiteUrl} target="_blank">Apply Now</a>
			</div>
			<div className="w-full mt-10 md:mt-10">
				<p className="text-fourthColor">{description}</p>
				<div className="mt-5">
					<h2 className={`${titleColor} text-fifthColor text-lg font-bold mt-2 mb-5 md:font`}>Requirements</h2>
					<p className="text-fourthColor">{requirements.content}</p>
					<ul className="list-disc w-11/12 relative left-10 mt-5">
						{requirements.items.map((item, idx) => (
							<li className="text-fourthColor mt-2" key={idx}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="w-full mt-10 md:mt-10">
				<p className="text-fourthColor">{description}</p>
				<div className="mt-5">
					<h2 className={`${titleColor} text-fifthColor text-lg font-bold mt-2 mb-5 md:font`}>What You Will Do</h2>
					<p className="text-fourthColor">{role.content}</p>
					<ul className="list-decimal w-11/12 relative left-10 mt-5 marker:text-thirdColor marker:font-bold">
						{role.items.map((item, idx) => (
							<li className="text-fourthColor mt-2 pl-2" key={idx}>{item}</li>
						))}
					</ul>
				</div>
			</div>
  	</div>
	)
}

const JobDetailsFooter = ({jobDetails}: jobDetails) => {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
	const bgColor = mainBg ==="bg-secondColor" ? "bg-fifthColor" : "bg-white";
	const titleColor = mainBg ==="bg-secondColor" ?  "text-white" : "text-fifthColor";

	const title = jobDetails?.position;
	const company = jobDetails?.company;
	const websiteUrl = jobDetails?.website;

  return (
		<div className={`${bgColor} w-full mt-20 relative p-5 mx-auto md:py-5`}>
    	<div className="w-full py-5">
				<div className="w-full text-left">
					<p className={`${titleColor} hidden text-fifthColor text-lg font-bold mt-2 md:font md:block`}>{title}</p>
					<p className="hidden text-thirdColor font-bold mt-2 md:block">{company}</p>
				</div>
				<a className="inline-block bg-thirdColor text-white text-center rounded-sm py-3 w-11/12 md:w-40 md:m-0 md:absolute md:right-10 md:-translate-y-1/2 md:top-1/2" href={websiteUrl} target="_blank">Apply Now</a>
			</div>
  	</div>
	)
}

export default function Page({params}: PageProps) {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
	
	const jobParamId = parseInt(params.id);
	const jobDetails = data.find(job => job.id === jobParamId);

	
	return (
		<main className={`${mainBg} min-h-screen`}>
			 {jobDetails ? <JobDetailsHeader jobDetails={jobDetails} /> : null}
			 {jobDetails ? <JobDetailsBody   jobDetails={jobDetails} /> : null}
			 {jobDetails ? <JobDetailsFooter   jobDetails={jobDetails} /> : null}
		</main>
	)
}