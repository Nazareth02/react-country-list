interface CountryApi {
  flags: CountryFlags;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}
interface CountryFlags {
  png: string;
  svg: string;
}
interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}
interface CountryNativeName {
  [name: string]: CountryNativeNameApi | undefined;
}
interface CountryNativeNameApi {
  official: string;
  common: string;
}
interface Country {
  flagImg: string;
  name: string;
  capital: string;
  area: number;
  population: number;
  region: string;
}

export type { CountryApi, Country };
