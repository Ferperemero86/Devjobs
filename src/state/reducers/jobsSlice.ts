import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

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


// Define a type for the slice state
export interface JobsState {
	fullJobsList: Job[],
	jobsList: Job[],
	fullJobsSearch: Job[],
  jobsListNumber: number,
	searchTitle: string,
	searchLocation: string,
	searchContract: string,
	loadMoreJobs: boolean,
	loadLessJobs: boolean
}

type jobsPayload = Job[];

type formField = {
	text: string, 
	type: string
};

// Define the initial state using that type
const initialState: JobsState = {
	fullJobsList: [],
	jobsList: [],
	fullJobsSearch: [],
  jobsListNumber: 6,
	searchTitle: "",
	searchLocation: "",
	searchContract: "",
	loadMoreJobs: true,
	loadLessJobs: false
}


export const jobsSlice = createSlice({
  name: 'jobs',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementJobs: (state) => {
      state.jobsListNumber = Math.min(state.jobsListNumber + 6, state.fullJobsSearch.length);
    },
		decreaseJobs: (state) => {
      state.jobsListNumber = Math.max(state.jobsListNumber - 6, 6);
    },
		updateFullJobsList: (state, action: PayloadAction<jobsPayload>) => {
			state.fullJobsList = action.payload;
      state.fullJobsSearch = action.payload;
			state.jobsList = action.payload.filter((job, idx) => idx < state.jobsListNumber);
    },
		updateFormField: (state, action: PayloadAction<formField>) => {
			const payload = action.payload;

			state.jobsListNumber = 6;
			
      state.searchTitle = payload.type === "title" ? payload.text : state.searchTitle;
			state.searchLocation = payload.type === "location" ? payload.text : state.searchLocation;
			state.searchContract = payload.type === "contract" ? payload.text : state.searchContract; 
		},
		filterJobs: (state) => {
			const jobs = state.fullJobsList;

			const searchResult = jobs.filter((job)=> {
				const title = job.position.toLowerCase().includes(state.searchTitle.toLowerCase());
				const location = job.location.toLowerCase().includes(state.searchLocation.toLowerCase());
				const contract = job.contract.toLowerCase().includes(state.searchContract.toLowerCase());
			
				return contract && location && title;
			});

			const filteredJobs = searchResult.slice(0, state.jobsListNumber); 

			state.fullJobsSearch = searchResult;
			state.jobsList = filteredJobs;			
		}
  }
})

export const { incrementJobs, decreaseJobs, updateFullJobsList, filterJobs, updateFormField } = jobsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.jobsReducer;

export default jobsSlice.reducer;