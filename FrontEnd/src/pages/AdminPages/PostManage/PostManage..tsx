import React, { useState } from "react";
import AdminHeader from "../../../components/AdminHeader";
import Footer from "../../../components/Footer";
import {
  TextField,
  InputAdornment,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

type placeDetails = {
  _id: string;
  title: string;
  description: string;
  imageId: string;
  date: Date;
  timeId: string;
  cost: number;
  contact: number;
  tags: string[];
  categoryName: string;
};
export default function PostManage() {
  const [placesList, setPlacesList] = useState<placeDetails[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageId, setImageId] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [timeId, setTimeId] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [contactNo, setContactNo] = useState<number>(0);
  const [tags, setTags] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [searchKey, setSearchKey] = useState<string>("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
  };

  const handleSave = (event: any) => {
    const { name, value } = event.target;
  };

  const handleUpdate = (event: any) => {
    const { name, value } = event.target;
  };

  const handleDeleteSelectedRows = (userId: string) => {};
  const handleSearch = () => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {};
  return (
    <>
      <AdminHeader />
      <div className="min-w-screen min-h-screen bg-accent-white-200 flex flex-col items-center justify-center px-5 py-5 mt-16">
        <div className="bg-gray-100  text-gray-500 rounded-3xl shadow-xl w-4/5 md:3/4 sm:1/2 xl:1/2 overflow-hidden">
          <div className="md:flex w-full">
            <div className="w-full  py-8 px-5 md:px-10">
              <form>
                <div className="flex -mx-3 ">
                  <div className="w-1/3 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Title <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="Adventure of Hill"
                        required
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/3 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Cost <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="number"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="2500"
                        name="cost"
                        value={cost}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/3 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Date <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="date"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="Colombo"
                        required
                        name="date"
                        value={date}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/3 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Category <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="Adventures"
                        name="categoryName"
                        value={categoryName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/3 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Contact No <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="tel"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="07771123456"
                        name="contactNO"
                        value={contactNo}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Duration <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="8:00 A.M - 4.00 P.M"
                        name="timeId"
                        value={timeId}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Image <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="file"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="file"
                        name="imageId"
                        value={imageId}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Description <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="Smith"
                        required
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="w-1/2 px-3 mb-5">
                    <label form="" className="text-xs font-semibold px-1">
                      Tags <span className="text-accent-red-100">*</span>
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-bold"
                        placeholder="Crazy,Fanticy"
                        name="tags"
                        value={tags}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mx-4">
                  <div className="flex justify-between gap-2">
                    <button
                      className="block w-full max-w-xs mx-auto bg-accent-green-200 hover:bg-accent-green-50 focus:bg-accent-green-100 text-white rounded-lg px-8  m-3 py-3  font-semibold"
                      type="submit"
                      onClick={handleSave}
                    >
                      Save
                    </button>

                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
}
