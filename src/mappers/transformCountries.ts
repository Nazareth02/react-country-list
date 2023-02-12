import { CountryApi, Country } from "../types";

export const transformCountries = (countries: CountryApi[]): Country[] =>
  countries.map(
    ({
      flags: { svg },
      name: { common },
      capital: [capital],
      region,
      area,
      population,
    }) => {
      return {
        flagImg: svg,
        name: common,
        capital: capital,
        region: region,
        area: area,
        population: population,
      };
    }
  );
