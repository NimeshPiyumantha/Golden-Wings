import api from "../../axios";
import { ChangeEvent, useState } from "react";

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

export default function Profile() {
  const [userList, setUserList] = useState<UserDetails[]>([]);
  const [roleType, setRoleType] = useState<string>("");
  const [fristName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name === "roleType"
      ? setRoleType(value)
      : name === "fristName"
      ? setFirstName(value)
      : name === "lastName"
      ? setLastName(value)
      : name === "address"
      ? setAddress(value)
      : name === "contactNo"
      ? setContactNo(value)
      : name === "email"
      ? setEmail(value)
      : name === "password" && setPassword(value);
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-w-screen min-h-screen bg-accent-white-200 flex items-center justify-center px-5 py-5 mt-3">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-3/5 md:2/4 sm:1/2 xl:1/2 overflow-hidden">
        <div className="md:flex w-full">
          <div className="w-full  py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Profile</h1>
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
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="**********"
                      name="password"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3 mt-2">
                <div className="w-1/2 px-3 mb-2">
                  <button
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    type="submit"
                  >
                    Update
                  </button>
                  <button
                    className="block w-full max-w-xs mx-auto bg-accent-red-50 hover:bg-accent-red-100 focus:bg-accent-red-200 text-white rounded-lg px-3 py-3 m-3 font-semibold"
                    type="submit"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
