import FormInput from "../FormInput";

type SearchFormProps = {
    customStyles?: string
}

export default function SearchForm ({customStyles}: SearchFormProps) {
    const searchJob = () => {
        console.log("searching..");
    }

    return (
        <form className={`${customStyles}` }>
            <FormInput type="text" onChange={searchJob} placeholder="Search by Title..." customStyles="h-20 w-80 p-2"/>
        </form>
    )
}