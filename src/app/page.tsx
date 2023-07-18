"use client"
import React, { Fragment, useEffect } from "react";
import Link from 'next/link';
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

import { filterJobs, incrementJobs, decreaseJobs, updateFullJobsList } from "@/state/reducers/jobsSlice";
import { useAppSelector, useAppDispatch } from "@/state/hooks";

import SearchForm from "@/components/ui/SearchForm";
import JobPanel from "@/components/ui/JobPanel";
import LoadMoreBtn from "@/components/LoadMoreBtn";

import data from "../../data";

const Jobs = () => {
	const jobsReducer = useAppSelector(state => state.jobsReducer);
	const {jobsList} = jobsReducer;

  return (
    <div className={`w-full pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl m-auto`}>
      {jobsList.map((job, idx) => {
        const { logo, logoBackground, postedAt, contract, position, company, location } = job;
        return (
          <Fragment key={idx}>
						<Link href={`/jobs/${job.id}`}>
             <JobPanel
              imageSrc={logo}
              imageBg={logoBackground}
              contract={contract}
              timePosted={postedAt}
              title={position}
              companyName={company}
              location={location}
              customStyles="mt-14 m-auto w-11/12"/>
						</Link>
          </Fragment>
        );
      })}

    </div>
  );
};

export default function Home() {
  const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
	const borderColor = mainBg ==="bg-secondColor" ? "border-0" : "md:border md:border-gray2";

  const jobsReducer = useAppSelector(state => state.jobsReducer);
	const {fullJobsSearch, jobsListNumber} = jobsReducer;
  const dispatch = useAppDispatch();

	const increaseJobsList = () => {
    dispatch(incrementJobs());
		dispatch(filterJobs());
	}

	const decreaseJobsList = () => {
    dispatch(decreaseJobs());
		dispatch(filterJobs());
	}

	useEffect(() => {
		dispatch(updateFullJobsList(data));
	}, [])

	const showMoreButton = jobsListNumber < fullJobsSearch.length;
  const showLessButton = jobsListNumber > 6;
	
  return (
    <main className={`${mainBg} min-h-screen`}>
			<SearchForm customStyles={`relative -top-10 z-10 md:rounded-lg md:border-solid ${borderColor} md:w-11/12`} />
      <Jobs />
			{showMoreButton ? <LoadMoreBtn onClick={increaseJobsList} text="Show more" />
			: showLessButton ? <LoadMoreBtn onClick={decreaseJobsList} text="Show Less" />
		  : null}
    </main>
  );
}
