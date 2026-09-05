import React from "react";
import UseFetch from "./UseFetch";
import "./FetchData.css";

const FetchYogaData = () => {
  const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");

  return (
    <>
     <ul className="list_data_main">
        <h1 className="usefetch_heading">Beneficios do Yoga</h1>
        {data && data.map((e) => <>
        <li className="list_data">
            <h3>{e.name}</h3>
            <p><strong>Beneficios: </strong>{e.benefits}</p>
            <p><strong>Duração: </strong>{e.time_duration}</p>
        </li>
        </>)}
     </ul>
    </>
  );
};

export default FetchYogaData;
