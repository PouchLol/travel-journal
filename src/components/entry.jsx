
export default function Entry(props){
    console.log(props)
    return(
        <div className="entry-root">
            <img className="entry-image" src={props.image.src} alt={props.image.alt}></img>
            <div>
                <div className="location-details">
                    <img className="marker-logo" src="location-pin.png"></img>
                    <span className="entry-country">{props.country}</span>
                    <a className="entry-anchor" href={props.reference}>View on Google Maps</a>
                </div>
                <h1 className="entry-name">{props.placeName}</h1>
                <h4 className="entry-date">{props.date}</h4>
                <p className="entry-desc">{props.desc}</p>
            </div>
        </div>
    )
}