export default function LocationAndDate(props: {location: string, date: string}) {
    return (
        <>
            <h1 className="location-and-date__location">{props.location}</h1>
            <div>{props.date}</div>          
        </>
    )
 }