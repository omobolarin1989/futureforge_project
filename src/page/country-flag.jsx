import countries from "world-countries";
import ReactCountryFlag from "react-country-flag";

// Convert all countries into react-select format
export const options = countries.map((country) => ({
//   value: country.cca2, // e.g. "NG"
  label: country.name.common, // e.g. "Nigeria"
  flag: (
    <ReactCountryFlag
      countryCode={country.cca2}
      svg
      style={{ width: "1.5em", height: "1.5em" }}
    />
  ),
}));