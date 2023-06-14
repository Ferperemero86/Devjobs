type JobPanelProps = {
    imageSrc: string,
    imageBg: string,
    timePosted: string,
    contract: string,
    title: string,
    companyName: string,
    location: string,
    customStyles?: String,
}

export default function JobPanel({imageSrc, imageBg, timePosted, contract, title, companyName, location, customStyles}: JobPanelProps) {
    const bgStyles = {
        backgroundColor: imageBg,
    }

    return(
        <div className={`${customStyles} relative max-w-sm bg-white p-5 rounded-md`}>
            <span style={bgStyles} className="absolute -top-7 flex justify-center items-center w-16 h-16 rounded-md">
                <img src={imageSrc} alt="job logo" className="w-[50] h-[50]" />
            </span>
            <p className="mt-8 text-fourthColor">{`${timePosted} . ${contract}`}</p>
            <p className="text-fifthColor text-lg font-bold mt-1">{title}</p>
            <p className="text-fourthColor mt-1">{companyName}</p>
            <p className="text-thirdColor font-bold mt-3">{location}</p>
        </div>
    )
}