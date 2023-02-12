import React from "react";
import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers/transformCountries";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countriesInfo={transformedCountries} />
    </div>
  );
};
