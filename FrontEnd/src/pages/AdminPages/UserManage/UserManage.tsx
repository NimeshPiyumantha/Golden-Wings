import AdminHeader from "../../../components/AdminHeader";
import Footer from "../../../components/Footer";
import api from "../../../axios";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type UserDetails = {
  _id: string;
  roleId: string;
  fristName: string;
  lastName: string;
  address: string;
  contactNo: number;
  email: string;
  password: string;
};

export default function UserManage() {
  const [userList, setUserList] = useState<UserDetails[]>([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    api
      .get("user")
      .then((res) => {
        setUserList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredData = userList.filter(
    (role) => role.roleId === "6455cd8b0a57e1ba94c0eba2"
  );

  const handleDeleteSelectedRows = (postId: string) => {
    api
      .delete(`user/${postId}`)
      .then((res) => {
        getAllUsers();
        alert("Delete Successfully.");
      })
      .catch((error) => {
        console.log(error);
        alert("Delete Unsuccessfully.");
      });
  };

  return (
    <>
      <AdminHeader />
      <div className="mt-24 px-1 m-3 md:px-2 sm:px-1 lg:px-32">
        <div className="px-12">
          <TableContainer component={Paper}>
            <Table style={{ backgroundColor: "#f5f5f5", borderRadius: "20px" }}>
              <TableHead style={{ backgroundColor: "#bdc3c7" }}>
                <TableRow>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Contact No</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Password</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow key={index}>
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
                        <DeleteIcon />
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
