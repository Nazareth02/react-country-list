import React from "react";
import { Country } from "../types";
import { Color } from "../ui/colors";
import { Badge } from "./Badge";

interface CountryItemProps {
  countryItemInfo: Country;
}

export const CountryItem = ({
  countryItemInfo: { area, capital, region, flagImg, population, name },
}: CountryItemProps) => {
  return (
    <li className="row row-cols-6 border align-items-center p-2 justify-content-center">
      <img src={flagImg} alt="/" className="col-1" />
      <span className="col-2">{name}</span>
      <span className="col-2">{capital}</span>
      <span className="col-2">{region}</span>
      <Badge color={Color.PRIMARY} label="area" info={area} />
      <Badge color={Color.SECONDARY} label="population" info={population} />
    </li>
  );
};
