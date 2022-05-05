import React, { useEffect } from 'react'
import {useState} from 'react'

export default function Weather() {
  const [weather,setWeather]=useState();
useEffect(()=>{
 fetch('https://weatherdbi.herokuapp.com/data/weather/india').then((response)=>response.json()).then((data)=>{
   setWeather(data);
   console.log(data);
 })
},[])

  return (
    <>
   <div className="container mt-3">
       <div className="row">
   <table className="table">
     <tbody>
       <thead>
       <th>Humidity</th>
       <th>Precip</th>
       </thead>
     {weather && weather.map((data)=> <tr key={data.humidity}>
     <td>{data.humidity}</td>
     <td>{data.precip}</td>

      </tr>)} </tbody>
   </table>
       </div>
   </div>
    </>
  )
}
