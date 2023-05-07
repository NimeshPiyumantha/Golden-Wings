import UsersHeader from "../../../components/UsersHeader";
import Footer from "../../../components/Footer";
import { TextField } from "@mui/material";

export default function UserBlog() {
  return (
    <>
      <UsersHeader />

      <div className="mt-24">
        <div className="flex justify-center">
          <div className="bg-accent-white-50 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center pb-6 font-Ubuntu font-bold text-lg">Create New Post</h1>
          
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
