import React from "react";
import JournalCard from "./JournalCard";
import data from '../data'

export default function JournalDetails() {
    console.log(data);
    let travelInfo = data.map(info => {
        return <JournalCard 
            key = {info.id}
            info = {info}
        />
    })
    return (
        <div>
            {travelInfo}
            {/* <JournalCard /> */}
        </div>
    )
}