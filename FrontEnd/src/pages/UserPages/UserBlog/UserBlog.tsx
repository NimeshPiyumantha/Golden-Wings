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
            <div className="-mx-3 md:flex mb-4">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <TextField
                  type="file"
                  variant="outlined"
                  name="imageUrl"
                  // onChange={this.handleInputChange}
                  // value={this.state.imageUrl}
                  fullWidth={true}
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <TextField
                  type="date"
                  variant="outlined"
                  name="date"
                  // onChange={this.handleInputChange}
                  // value={this.state.date}
                  fullWidth={true}
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-4">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <TextField
                  label="Post Title"
                  type="text"
                  variant="outlined"
                  name="title"
                  placeholder="Enter post title"
                  // onChange={this.handleInputChange}
                  // value={this.state.title}
                  fullWidth={true}
                  required
                />
              </div>
              <div className="md:w-1/2 px-3">
                <TextField
                  label="Category"
                  type="text"
                  variant="outlined"
                  name="categoryName"
                  placeholder="Enter Category Name"
                  // onChange={this.handleInputChange}
                  // value={this.state.categoryName}
                  fullWidth={true}
                  required
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
