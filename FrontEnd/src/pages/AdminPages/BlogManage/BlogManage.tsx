import AdminHeader from "../../../components/AdminHeader";
import Footer from "../../../components/Footer";
import api from "../../../axios";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BlogManage() {
  return (
    <>
      <AdminHeader />
      <div className="mt-24 px-1 m-3 md:px-2 sm:px-1 lg:px-32">
        <div>
          <div className="lg:w-2/5 sm:w-1/2 md:w-4/5">
            <div className="my-5 mx-2">
              <div className="m-4">
                <TextField
                  label="Search"
                  name="searchKey"
                  variant="filled"
                  fullWidth
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.currentTarget.value)}
                  onKeyDown={handleKeyDown}
                  sx={{mx: 2, borderRadius: "15px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table style={{ backgroundColor: "#f5f5f5", borderRadius: "20px" }}>
              <TableHead style={{ backgroundColor: "#bdc3c7" }}>
                <TableRow>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bolder",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    User Id
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bolder",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bolder",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Title
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bolder",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bolder",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: "bolder",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    Image
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell align="center">{row.fristName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{row.contactNo}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.password}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => handleDeleteSelectedRows(row._id)}
                      >
                        <DeleteIcon sx={{ color: "red" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}
