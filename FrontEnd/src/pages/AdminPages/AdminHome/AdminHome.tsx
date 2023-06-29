import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AdminHeader from "../../../components/AdminHeader";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import api from "../../../axios";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});

let placeCount: number = 0;
let blogCount: number = 0;
let userCount: number = 0;

export default function AdminHome() {
  const [placeListCount, setPlaceListCount] = useState<number>(0);
  const [blogListCount, setBlogListCount] = useState<number>(0);
  const [userListCount, setUserListCount] = useState<number>(0);

  useEffect(() => {
    getAllPlace();
    getAllBlog();
    getAllUser();
  }, []);

  const getAllPlace = () => {
    api
      .get("place")
      .then((res) => {
        placeCount = 0;
        for (let i = 0; i < res.data.responseData.length; i++) {
          placeCount = placeCount + 1;
        }
        setPlaceListCount(placeCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllBlog = () => {
    api
      .get("post")
      .then((res) => {
        blogCount = 0;
        for (let i = 0; i < res.data.responseData.length; i++) {
          blogCount = blogCount + 1;
        }
        setBlogListCount(blogCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllUser = () => {
    api
      .get("user")
      .then((res) => {
        userCount = 0;
        for (let i = 0; i < res.data.responseData.length; i++) {
          userCount = userCount + 1;
        }
        setUserListCount(userCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AdminHeader />
      <div className="flex justify-center mt-16 h-96">
        <div className="w-4/5 m-4">
          <Box sx={{ width: "100%" }}>
            <Grid container margin={3} rowSpacing={2} columnSpacing={3}>
              <Grid lg={3} md={3} sm={6} xs={12}>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      boxShadow: 2,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 180,
                    }}
                  >
                    <Box sx={{ color: "text.secondary" }}>Users Count</Box>
                    <Box
                      sx={{
                        color: "text.primary",
                        fontSize: 34,
                        fontWeight: "medium",
                      }}
                    >
                      {userListCount}
                    </Box>
                    <Box
                      id="txtCustomerCountPracentage"
                      sx={{
                        color: "success.dark",
                        display: "inline",
                        fontWeight: "bold",
                        mx: 0.5,
                        fontSize: 14,
                      }}
                    >
                      +18.77%
                    </Box>
                    <Box
                      sx={{
                        color: "text.secondary",
                        display: "inline",
                        fontSize: 14,
                      }}
                    >
                      vs. last week
                    </Box>
                  </Box>
                </ThemeProvider>
              </Grid>
              <Grid lg={3} md={3} sm={6} xs={12}>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      boxShadow: 2,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 180,
                    }}
                  >
                    <Box sx={{ color: "text.secondary" }}>Place Count</Box>
                    <Box
                      id="txtItemsCount"
                      sx={{
                        color: "text.primary",
                        fontSize: 34,
                        fontWeight: "medium",
                      }}
                    >
                      {placeListCount}
                    </Box>
                    <Box
                      id="txtItemsCountPracentage"
                      sx={{
                        color: "success.dark",
                        display: "inline",
                        fontWeight: "bold",
                        mx: 0.5,
                        fontSize: 14,
                      }}
                    >
                      +18.77%
                    </Box>
                    <Box
                      sx={{
                        color: "text.secondary",
                        display: "inline",
                        fontSize: 14,
                      }}
                    >
                      vs. last week
                    </Box>
                  </Box>
                </ThemeProvider>
              </Grid>
              <Grid lg={3} md={3} sm={6} xs={12}>
                <ThemeProvider theme={theme}>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      boxShadow: 2,
                      borderRadius: 2,
                      p: 2,
                      minWidth: 180,
                    }}
                  >
                    <Box sx={{ color: "text.secondary" }}>Blog Count</Box>
                    <Box
                      id="txtOrderCount"
                      sx={{
                        color: "text.primary",
                        fontSize: 34,
                        fontWeight: "medium",
                      }}
                    >
                      {blogListCount}
                    </Box>
                    <Box
                      sx={{
                        color: "success.dark",
                        display: "inline",
                        fontWeight: "bold",
                        mx: 0.5,
                        fontSize: 14,
                      }}
                    >
                      +18.77%
                    </Box>
                    <Box
                      sx={{
                        color: "text.secondary",
                        display: "inline",
                        fontSize: 14,
                      }}
                    >
                      vs. last week
                    </Box>
                  </Box>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}
