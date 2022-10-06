import React from "react";
import "./Flag.css";
const Flag = (props) => {
  const { image, countryname, region, population, capital } = props.country;
  return (
    <div className="country">
      <img src={image} alt="" width={300} />
      <div className="country-deatails">
        <h4 className="heading">{countryname}</h4>
        <h3 className="text">population: {population}</h3>
        <h3 className="text">region: {region}</h3>
        <h3 className="text">Capital: {capital}</h3>
      </div>
    </div>
  );
};

export default Flag;
