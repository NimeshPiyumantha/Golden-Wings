import Header from "../Header";
import Footer from "../Footer";
import Cards from "../Cards";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Location {
  name: string;
}

interface Type {
  name: string;
}

const type: readonly Type[] = [
  { name: "Free" },
  {
    name: "Charge",
  },
];

const location: readonly Location[] = [
  { name: "AD" },
  {
    name: "AD",
  },
];

export default function Places() {
  return (
    <>
      <div className="mt-20 flex justify-center mr-20 ml-20 m-5 sm:p-3">
        <div className="bg-accent-white-50 flex-wrap rounded-lg shadow-lg">
          <div className="justify-center p-4 flex gap-3 flex-wrap">
            <Autocomplete
              id="LocationID"
              sx={{ width: 250 }}
              options={location}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a Location"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />

            <Autocomplete
              id="typeID"
              sx={{ width: 250 }}
              options={type}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a Payement"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="container my-5 mx-auto px-4 md:px-12 mt-3">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}
