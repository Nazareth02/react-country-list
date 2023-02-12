interface CountryApi {
  flags: Flags;
  name: Name;
  capital: string[];
  region: string;
  area: number;
  population: number;
}
interface Flags {
  png: string;
  svg: string;
}
interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
interface NativeName {
  [key: string]: { official: string; common: string } | undefined;
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
