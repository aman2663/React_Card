import React from 'react'
import "./App.css";

export default function Card({data}) {
  console.log(data)
  return (
    <div className="polaroid">
        <img src={data.img} alt={data.name} />
        <div className="container">
            <h2>{data.name}</h2>
            <h3>{data.place}</h3>
        </div>
    </div>
  )
}
