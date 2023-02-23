import { CountryApi, Country } from "../types";

export const transformCountries = (countries: CountryApi[]): Country[] =>
  countries.map(({ flags, name, capital, region, area, population }) => {
    return {
      flagImg: flags.svg,
      name: name.common,
      capital: capital[0],
      region: region,
      area: area,
      population: population,
    };
  });
