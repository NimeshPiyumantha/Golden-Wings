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


export default function PostManage() {

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
