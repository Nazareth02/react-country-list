import React from "react";
import { Country } from "../types";
import { CountryItem } from "./CountryItem";

interface CountryListProps {
  countriesInfo: Country[];
}
export const CountryList = ({ countriesInfo }: CountryListProps) => {
  return (
    <ul className="list-group">
      {countriesInfo.map((country) => (
        <CountryItem key={country.name} countryItemInfo={country} />
      ))}
    </ul>
  );
};
