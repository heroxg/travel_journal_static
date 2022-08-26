import React from "react";
import './JournalCard.css'


export default function JournalCard(props) {
    return (
        <div className="grid__wrapper">
            <div className="grid__wrapper-left">
                <img src={props.info.image} />
            </div>
            <div className="grid__wrapper-right">
                <div className="grid__wrapper_right-inner">
                   <p className="short_brief"><i className="fa fa-map-marker"></i><span className="country">{props.info.country}</span> <span className="map_link"><a href="{props.info.map_url}">View on Google Maps</a></span></p>
                   <h3>{props.info.title}</h3>
                   <p className="date_info">{props.info.start_date} - {props.info.end_date}</p>
                   <p>{props.info.description}</p>
                </div>
            </div>
        </div>
    )
}