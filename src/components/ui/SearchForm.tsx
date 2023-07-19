import { ChangeEvent } from 'react';

import { filterJobs, updateFormField, displaySearchFilter } from "@/state/reducers/jobsSlice";
import { useAppDispatch } from "@/state/hooks";

import FormInput from "../FormInput";

type SearchFormProps = {
    customStyles?: string,
}

export default function SearchForm ({customStyles}: SearchFormProps) {
		const dispatch = useAppDispatch();

    const searchByTitle = (e: ChangeEvent<HTMLInputElement>) => {
				const textSearch = e.target.value;
				
				dispatch(updateFormField({text: textSearch, type: "title"}));
				dispatch(filterJobs());
    }

		const searchByLocation = (e: ChangeEvent<HTMLInputElement>) => {
			const textSearch = e.target.value;

			dispatch(updateFormField({text: textSearch, type: "location"}));
			dispatch(filterJobs());
		}

		const searchByContract = (e: ChangeEvent<HTMLInputElement>) => {
			const textSearch = e.target.checked ? "full time" : "";

			dispatch(updateFormField({text: textSearch, type: "contract"}));
			dispatch(filterJobs());
		}
		
		const handleFilter = () => {
			dispatch(displaySearchFilter());
		} 

    return (
        <form className={`${customStyles} flex flex-col justify-center max-w-5xl md:mx-auto md:flex-row` }>
            <FormInput type="title" onChange={searchByTitle} onClick={handleFilter} placeholder="Search by Title..." customStyles="h-20 w-80 relative inline-block left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 flex-1 md:border-0" />
						<FormInput type="location" onChange={searchByLocation} placeholder="Filter by location..." customStyles="h-20 w-80 mt-3 relative inline-block left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:flex flex-1 md:m-0" />
						<FormInput type="contract" onChange={searchByContract} customStyles="rounded-lg h-20 w-80 mt-2 pl-6 relative inline-block items-center left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:flex flex-1" />
        </form>
    )
}