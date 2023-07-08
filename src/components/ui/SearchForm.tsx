import FormInput from "../FormInput";

type SearchFormProps = {
    customStyles?: string,
}

export default function SearchForm ({customStyles}: SearchFormProps) {
    const searchJob = () => {
        console.log("searching..");
    }

    return (
        <form className={`${customStyles} md:flex justify-center max-w-5xl md:mx-auto` }>
            <FormInput type="title" onChange={searchJob} placeholder="Search by Title..." customStyles="h-20 relative inline-block left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 flex-1" />
						<FormInput type="location" onChange={searchJob} placeholder="Filter by location..." customStyles="hidden h-20 relative inline-block left-1/2 -translate-x-1/2 hidden md:left-0 md:translate-x-0 md:flex flex-1" />
						<FormInput type="contract" onChange={searchJob} customStyles="rounded-lg h-20 pl-6 relative flex items-center left-1/2 -translate-x-1/2 md:left-0 hidden md:translate-x-0 md:flex flex-1" />
        </form>
    )
}