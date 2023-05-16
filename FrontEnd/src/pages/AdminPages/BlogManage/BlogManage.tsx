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
import { Toast } from "../../../util/save_update_delete_success";

type PostDetails = {
  _id: string;
  userId: string;
  imageId: string;
  date: Date;
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
};
export default function BlogManage() {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = () => {
    api
      .get("post")
      .then((res) => {
        setPostList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteSelectedRows = (postId: string) => {
    api
      .delete(`post/${postId}`)
      .then((res) => {
        getAllPost();
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Delete UnSuccessfully",
        });
      });
  };

  const handleSearch = () => {
    api
      .get(`post/search/${searchKey}`)
      .then((res) => {
        setPostList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
        getAllPost();
      });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

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
                  sx={{ mx: 2, borderRadius: "15px" }}
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
                {postList.map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell align="center">{row.userId}</TableCell>
                    <TableCell align="center">
                      {row.date.toLocaleString()}
                    </TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.categoryId}</TableCell>
                    <TableCell align="center">{row.imageId}</TableCell>
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
