import React from "react";
import Card from "../Card/Card";
import './Reservations.css'

const Reservations = ({reservations}) => {
    const resCards = reservations.map(res => {
        return (
            <Card
                name={res.name}
                date={res.date}
                time={res.time}
                number={res.number}
                id={res.id}
                key={res.id}
             />
        )
    })

    return (
        <div className="card-container">
            {resCards}
        </div>
    )
}

export default Reservations;