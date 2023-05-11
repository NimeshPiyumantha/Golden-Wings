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

 
  return (
    <>
      <AdminHeader />
      <div className="min-w-screen min-h-screen bg-accent-white-200 flex flex-col items-center justify-center px-5 py-5 mt-16">
        <div className="bg-gray-100  text-gray-500 rounded-3xl shadow-xl w-4/5 md:3/4 sm:1/2 xl:1/2 overflow-hidden">
          <div className="md:flex w-full">
            <div className="w-full  py-8 px-5 md:px-10">
             
            </div>
          </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
}
