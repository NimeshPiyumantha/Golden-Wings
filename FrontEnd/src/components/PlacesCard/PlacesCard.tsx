import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Cards from "../Cards";
import { useEffect, useState } from "react";
import api from "../../axios";
import { type } from "os";

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
};

type CategoryDetails = {
  _id: string;
  categoryName: string;
};
export default function Places() {
  const [placesList, setPlacesList] = useState<PlaceDetails[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryDetails[]>([]);
  const [cost, setCost] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    getAllPlaces();
    getAllCategory();
  }, []);

  const getAllPlaces = () => {
    api
      .get("place")
      .then((res) => {
        setPlacesList(res.data.responseData);
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
    if (name && name === "cost") {
      setCost(value);
    } else if (name && name === "category") {
      setCategory(value);
    }
  };
  
  
  return (
    <>
      <div className="mt-20 flex justify-center mr-20 ml-20 m-5 sm:p-3">
        <div className="bg-accent-white-50 flex-wrap rounded-lg shadow-lg">
          <div className="justify-center p-4 flex gap-3 flex-wrap">
            <div>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Cost
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={cost}
                  name="cost"
                  label="cost"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="category"
                  value={category}
                  label="category"
                  onChange={handleChange}
                >
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
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
