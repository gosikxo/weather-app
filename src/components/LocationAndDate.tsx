export default function LocationAndDate(props: {location: string, date: Date}) {
    return (
        <>
            <h1 className="location-and-date__location">{props.location}</h1>
            <div>{props.date}</div>          
        </>
    )
 }