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
  jobsListNumber: number
}

// Define the initial state using that type
const initialState: JobsState = {
	fullJobsList: [],
	jobsList: [],
  jobsListNumber: 0
}

type jobsPayload = Job[];

export const jobsSlice = createSlice({
  name: 'jobs',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementJobs: (state, action: PayloadAction<jobsPayload>) => {
      state.jobsListNumber += 7;
	    state.jobsList = action.payload.filter((job, idx) => idx < state.jobsListNumber);
    },
		updateFullJobsList: (state, action: PayloadAction<jobsPayload>) => {
      state.fullJobsList = action.payload;
    }
  }
})

export const { incrementJobs, updateFullJobsList } = jobsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.jobsReducer;

export default jobsSlice.reducer;