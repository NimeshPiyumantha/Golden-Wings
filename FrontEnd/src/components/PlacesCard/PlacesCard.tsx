import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import Cards from "../Cards";
import { useEffect, useState } from "react";
import api from "../../axios";
import SearchIcon from "@mui/icons-material/Search";

type PlaceDetails = {
  _id: string;
  title: string;
  description: string;
  location: string;
  imageId: string;
  imageUrl: string;
  date: Date;
  timeId: string;
  timeRange: string;
  cost: number;
  contact: number;
  tags: string[];
  categoryName: string;
  categoryId: string;
};

type CategoryDetails = {
  _id: string;
  categoryName: string;
};

type LocaionDetails = {
  location: string;
};
export default function Places() {
  const [placesList, setPlacesList] = useState<PlaceDetails[]>([]);
  const [placesList2, setPlacesList2] = useState<PlaceDetails[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryDetails[]>([]);
  const [locationList, setLocationList] = useState<LocaionDetails[]>([]);
  const [location, setLocation] = useState<string>("");
  const [categoryName, setCategory] = useState<string>("");

  useEffect(() => {
    getAllPlaces();
    getAllCategory();
  }, []);

  const getAllPlaces = () => {
    api
      .get("place")
      .then((res) => {
        setPlacesList(res.data.responseData);
        setLocationList(res.data.responseData);
        setPlacesList2(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllCategory = () => {
    api
      .get("category")
      .then((res) => {
        setCategoryList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target; // Define name and value variables

    // Update the category or cost state based on the name property of the Select component
    if (name && name === "location") {
      setLocation(value);
    } else if (name && name === "categoryName") {
      setCategory(value);
    }
  };
  function search(event: any) {
    const filteredData = placesList2.filter(
      (place) =>
        place.categoryId === categoryName && place.location === location
    );

    setPlacesList(filteredData);
  }

  return (
    <>
      <div className="mt-20 flex justify-center mr-20 ml-20 m-5 sm:p-3">
        <div className="bg-accent-white-50 flex-wrap rounded-lg shadow-xl">
          <div className="justify-center p-4 flex gap-3 flex-wrap">
            <div>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Location
                </InputLabel>

                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="location"
                  label="location"
                  value={location}
                  onChange={handleChange}
                  style={{
                    borderRadius: "15px",
                    boxShadow:
                      " rgba(0, 0, 0, 0.3) 0px 15px 33px, rgba(0, 0, 0, 0.22) 0px 10px 12px",
                  }}
                >
                  {locationList.map((row, index) => (
                    <MenuItem value={row.location}>{row.location}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>

                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="categoryName"
                  value={categoryName}
                  label="category"
                  onChange={handleChange}
                  style={{
                    borderRadius: "15px",
                    boxShadow:
                      " rgba(0, 0, 0, 0.3) 0px 15px 33px, rgba(0, 0, 0, 0.22) 0px 10px 12px",
                  }}
                >
                  {categoryList.map((row, index) => (
                    <MenuItem value={row._id}>{row.categoryName}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={search}
                  className="text-lg"
                  style={{
                    marginTop: "5px",
                    padding: "8px",
                    borderRadius: "15px",
                    boxShadow:
                      " rgba(0, 0, 0, 0.3) 0px 15px 33px, rgba(0, 0, 0, 0.22) 0px 10px 12px",
                  }}
                >
                  Search
                  <SearchIcon className="ml-3" />
                </Button>
              </FormControl>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 mx-auto px-4 md:px-12 mt-3">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {placesList.map((post) => (
            <Cards
              key={post._id}
              _id={post._id}
              title={post.title}
              description={post.description}
              date={post.date}
              location={post.location}
              imageId={post.imageId}
              imageUrl={post.imageUrl}
              timeId={post.timeId}
              timeRange={post.timeRange}
              cost={post.cost}
              contact={post.contact}
              tags={post.tags}
              categoryName={post.categoryName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
