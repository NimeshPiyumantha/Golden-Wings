import api from "../../axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Toast } from "../../util/save_update_delete_success";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

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

export const Profile = () => {
  const [userList, setUserList] = useState<UserDetails[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [fristName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const id = localStorage.getItem("id");

  const navigate = useNavigate();
  const [isValidFristName, setIsValidFirstName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [isValidContactNo, setIsValidContactNo] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
    if (userList.length > 0) {
      const user = userList[0];
      setFirstName(user.fristName);
      setLastName(user.lastName);
      setAddress(user.address);
      setContactNo(String(user.contactNo));
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [userList]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    api
      .get(`user/${id}`)
      .then((res) => {
        const userData = res.data.responseData;
        setUserList(userData);
        console.log(userList);

        setFirstName(userData.fristName);
        setLastName(userData.lastName);
        setAddress(userData.address);
        setContactNo(userData.contactNo);
        setEmail(userData.email);
        setPassword(userData.password);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const nameRegex = /^[A-z ]{3,20}$/; // Regular expression for name validation (only alphabetic characters)
    const addressRegex = /^[A-z0-9/ ]{4,30}$/; // Regular expression for address validation
    const contactNoRegex = /^(07(0|1|2|4|5|6|7|8)[0-9]{7})$/; // Regular expression for 10-digit contact number validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Regular expression for password validation

    if (name === "fristName") {
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

    //  name === "fristName"
    //   ? setFirstName(value)
    //   : name === "lastName"
    //   ? setLastName(value)
    //   : name === "address"
    //   ? setAddress(value)
    //   : name === "contactNo"
    //   ? setContactNo(parseInt(value))
    //   : name === "email"
    //   ? setEmail(value)
    //   : name === "password" && setPassword(value);
  };

  const handleUpdate = () => {
    let newUser = {
      fristName: fristName,
      lastName: lastName,
      address: address,
      contactNo: contactNo,
      email: email,
      password: password,
    };

    api
      .put(`user/${id}`, newUser)
      .then((res) => {
        console.log(res);
        let user: UserDetails[] = [...userList];
        user.push(res.data.responseData);
        Toast.fire({
          icon: "success",
          title: "Update Successfully",
        });
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "success",
          title: "Update Successfully",
        });
      });
  };

  function handleDelete(): void {
    api
      .delete(`user/${id}`)
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Successfully",
        });
        navigate("/login", { replace: false });
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Delete UnSuccessfully",
        });
      });
  }

  return (
    <div className="min-w-screen min-h-screen bg-accent-white-200 flex items-center justify-center px-5 py-5 mt-3">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-3/5 md:2/4 sm:1/2 xl:1/2 overflow-hidden">
        <div className="md:flex w-full">
          <div className="w-full  py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Profile</h1>
            </div>

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
                    value={fristName}
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
                    value={lastName}
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
                    value={address}
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
                    value={contactNo}
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
                    value={email}
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
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex mx-4">
              <div className="flex justify-between gap-2">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-8  m-3 py-3  font-semibold"
                  type="submit"
                  onClick={handleUpdate}
                >
                  Update
                </button>

                <button
                  className="block w-full max-w-xs mx-auto bg-accent-red-50 hover:bg-accent-red-100 focus:bg-accent-red-200 text-white rounded-lg px-8 py-3 m-3 font-semibold"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
