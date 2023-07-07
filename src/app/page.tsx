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
	const {jobsList} = jobsReducer;

  return (
    <div className={`${mainBg} w-full pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl m-auto`}>
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

    </div>
  );
};

export default function Home() {
  const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;

  const {jobsReducer} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
	const {fullJobsList} = jobsReducer;

	const handleJobsList = () => {
    dispatch(incrementJobs(fullJobsList));
	}

	useEffect(() => {
		dispatch(updateFullJobsList(data));
		dispatch(incrementJobs(data));		
	}, [])

 
  return (
    <main className={`${mainBg} min-h-screen py-20`}>
      <Jobs />
			<LoadMoreBtn onClick={handleJobsList} />
    </main>
  );
}
