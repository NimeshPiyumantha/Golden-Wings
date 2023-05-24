import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import sigIn_bg from "../../assets/img/signIn-bg.jpg";
import "./Login.css";
import api from "../../axios";
import { useState } from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../util/save_update_delete_success";

export default function Login() {
  const [roleId, setroleId] = useState<string>("");
  const [email, setuseremail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newUser = {
      roleId: roleId,
      email: email,
      password: password,
    };
    api
      .post("user/login", newUser)
      .then((res) => {
        localStorage.setItem("id", res.data.responseData._id);
        // alert(localStorage.getItem("id"));
        if (res.data.responseData.roleId === "6455cd8b0a57e1ba94c0eba2") {
          navigate("/u", { replace: false });
          Toast.fire({
            icon: "success",
            title: "User Login Successfully",
          });
        }
        if (res.data.responseData.roleId === "6455d4640a57e1ba94c0eba7") {
          navigate("/a", { replace: false });
          Toast.fire({
            icon: "success",
            title: "Admin Login Successfully",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Login UnSuccessfully",
        });
      });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (name === "roleId") {
      setroleId(value);
    } else if (name === "email") {
      setuseremail(value);
      setIsValidEmail(emailRegex.test(value));
      setuseremail(value);
    } else if (name === "password") {
      setPassword(value);
      setIsValidPassword(passwordRegex.test(value));
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-accent-white-200 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-4/5 overflow-hidden max-width:1000px">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 shadow-lg">
            <img src={sigIn_bg} className="w-full h-full"></img>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
              <p className="mt-2">Enter your information to login.</p>
            </div>
            <div className="px-8">
              <form onSubmit={handleSubmit}>
                {/* <Box component="form" noValidate sx={{ mt: 1 }}> */}
                <InputLabel id="roleId">Role Type</InputLabel>
                <Select
                  required
                  fullWidth
                  id="roleId"
                  label="Role Type"
                  name="roleId"
                  onChange={handleInputChange}
                >
                  <MenuItem value={"6455cd8b0a57e1ba94c0eba2"}>USER</MenuItem>
                  <MenuItem value={"6455d4640a57e1ba94c0eba7"}>ADMIN</MenuItem>
                </Select>

                <TextField
                  margin="normal"
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleInputChange}
                  InputProps={{
                    className: isValidEmail ? "valid" : "invalid",
                  }}
                />
                <TextField
                  margin="normal"
                  autoFocus
                  required
                  fullWidth
                  variant="filled"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                  InputProps={{
                    className: isValidPassword ? "valid" : "invalid",
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/home" variant="body2">
                      Back
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account ? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
