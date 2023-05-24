import signUp_bg from "../../assets/img/signUp-bg.jpg";
import api from "../../axios";
import { ChangeEvent, useState } from "react";
import { Toast } from "../../util/save_update_delete_success";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

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
export default function Register() {
  const [userList, setUserList] = useState<UserDetails[]>([]);
  const [roleType, setRoleType] = useState<string>("");
  const [fristName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const [isValidFristName, setIsValidFirstName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [isValidContactNo, setIsValidContactNo] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const nameRegex = /^[A-z ]{3,20}$/; // Regular expression for name validation (only alphabetic characters)
    const addressRegex = /^[A-z0-9/ ]{4,30}$/; // Regular expression for address validation
    const contactNoRegex = /^(07(0|1|2|4|5|6|7|8)[0-9]{7})$/; // Regular expression for 10-digit contact number validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Regular expression for password validation

    if (name === "roleType") {
      setRoleType(value);
    } else if (name === "fristName") {
      setFirstName(value);
      setIsValidFirstName(nameRegex.test(value));
    } else if (name === "lastName") {
      setLastName(value);
      setIsValidLastName(nameRegex.test(value));
    } else if (name === "address") {
      setAddress(value);
      setIsValidAddress(addressRegex.test(value));
    } else if (name === "contactNo") {
      setContactNo(value);
      setIsValidContactNo(contactNoRegex.test(value));
    } else if (name === "email") {
      setEmail(value);
      setIsValidEmail(emailRegex.test(value));
    } else if (name === "password") {
      setPassword(value);
      setIsValidPassword(passwordRegex.test(value));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newUser = {
      roleType: "USER",
      fristName: fristName,
      lastName: lastName,
      address: address,
      contactNo: contactNo,
      email: email,
      password: password,
    };

    api
      .post("user", newUser)
      .then((res) => {
        console.log(res);
        let user: UserDetails[] = [...userList];
        user.push(res.data.responseData);
        setUserList(user);
        navigate("/login", { replace: false });
        Toast.fire({
          icon: "success",
          title: "Register Successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Register UnSuccessfully",
        });
      });
  };

  return (
    <div className="min-w-screen min-h-screen bg-accent-white-200 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-4/5 overflow-hidden max-width:1000px">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 shadow-lg">
            <img src={signUp_bg} className="w-full h-full"></img>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p className="mt-1">Enter your information to register</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex -mx-3 ">
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    First name <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
                        isValidFristName ? "valid" : "invalid"
                      }`}
                      placeholder="John"
                      required
                      name="fristName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Last name <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
                        isValidLastName ? "valid" : "invalid"
                      }`}
                      placeholder="Smith"
                      required
                      name="lastName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Address <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
                        isValidAddress ? "valid" : "invalid"
                      }`}
                      placeholder="Colombo"
                      required
                      name="address"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Contact <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="tel"
                      className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
                        isValidContactNo ? "valid" : "invalid"
                      }`}
                      placeholder="0777123456"
                      name="contactNo"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Email <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
                        isValidEmail ? "valid" : "invalid"
                      }`}
                      placeholder="yourmail@gmail.com"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Password <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
                        isValidPassword ? "valid" : "invalid"
                      }`}
                      placeholder="**********"
                      name="password"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3 mt-2">
                <div className="w-full px-5 mb-5">
                  <button
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    type="submit"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Back
                </Link>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
