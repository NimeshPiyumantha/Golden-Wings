import UsersHeader from "../../../components/UsersHeader";
import Footer from "../../../components/Footer";
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import api from "../../../axios";

type PostDetails = {
  _id: string;
  isClickedCreateNewPost: boolean;
  userId: string;
  imageUrl: string;
  date: Date;
  title: string;
  description: string;
  tagString: string[];
  categoryName: string;
};

export default function UserBlog() {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date("2023-05-07T12:00:00"));
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tagString, setTagString] = useState<string[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name === "userId"
      ? setUserId(value)
      : name === "imageUrl"
      ? setImageUrl(value)
      : name === "date"
      ? setDate(new Date(value))
      : name === "title"
      ? setTitle(value)
      : name === "description"
      ? setDescription(value)
      : name === "tagString"
      ? setTagString([...tagString, value])
      : name === "categoryName" && setCategoryName(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let tagsArray = convertTagStringToArray(tagString);
    let newPost = {
      userId: "64560da147a6ec3aea427d68",
      imageUrl: imageUrl,
      date: date,
      title: title,
      description: description,
      tags: tagsArray,
      categoryName: categoryName,
    };

    api
      .post("post", newPost)
      .then((res) => {
        console.log(res);
        let post: PostDetails[] = [...postList, res.data.responseData];
        setPostList(post);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const convertTagStringToArray = (tagString: string): string[] => {
    if (tagString !== "") {
      return tagString.split(",").map((tag) => tag.trim());
    }
    return [];
  };

  return (
    <>
      <UsersHeader />

      <div className="mt-24">
        <div className="flex justify-center">
          <div className="bg-accent-white-50 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center pb-6 font-Ubuntu font-bold text-lg">
              Create New Post
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="-mx-3 md:flex mb-4">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <TextField
                    type="text"
                    variant="outlined"
                    name="imageUrl"
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    // value={this.state.categoryName}
                    fullWidth={true}
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-4">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                  <TextField
                    label="Post Description"
                    type="text"
                    variant="outlined"
                    name="description"
                    placeholder="Enter post description"
                    // value={this.state.description}
                    onChange={handleInputChange}
                    fullWidth={true}
                    multiline
                    minRows={5}
                    maxRows={Infinity}
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-4">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                  <TextField
                    label="Tags (Comma separated tags)"
                    type="text"
                    variant="outlined"
                    name="tags"
                    placeholder="Enter comma separated tags"
                    onChange={handleInputChange}
                    // value={this.state.tagString}
                    fullWidth={true}
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-4">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                  <button className="p-2 pr-3 pl-3 bg-accent-green-200 text-white rounded">
                    <h6>Publish Post</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
