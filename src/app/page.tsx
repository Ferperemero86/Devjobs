"use client"
import React, { Fragment, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

import { incrementJobs, updateFullJobsList } from "@/state/reducers/jobsSlice";
import { useAppSelector, useAppDispatch } from "@/state/hooks";

import JobPanel from "@/components/ui/JobPanel";
import LoadMoreBtn from "@/components/LoadMoreBtn";

import data from "../../data";

const Jobs = () => {
  const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
	const {jobsReducer} = useAppSelector(state => state);
	const {jobsList, fullJobsList} = jobsReducer;
	const dispatch = useAppDispatch();

  const handleJobsList = () => {
    dispatch(incrementJobs(fullJobsList));
	}

  return (
    <div className={`${mainBg} relative w-full top-20 pb-12`}>
      {jobsList.map((job, idx) => {
        const { logo, logoBackground, postedAt, contract, position, company, location } = job;
        return (
          <Fragment key={idx}>
             <JobPanel
              imageSrc={logo}
              imageBg={logoBackground}
              contract={contract}
              timePosted={postedAt}
              title={position}
              companyName={company}
              location={location}
              customStyles="mt-14 m-auto w-11/12"
          />
          </Fragment>
        );
      })}

			<LoadMoreBtn onClick={handleJobsList} />
    </div>
  );
};

export default function Home() {
  const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;

  const {jobsReducer} = useAppSelector(state => state);
  const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(updateFullJobsList(data));
		dispatch(incrementJobs(data));		
	}, [])

 
  return (
    <main className={`${mainBg} min-h-screen h-full w-full absolute`}>
      <Jobs />
    </main>
  );
}
