import UsersHeader from "../../../components/UsersHeader";
import Footer from "../../../components/Footer";
import { Alert, Divider, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import api from "../../../axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Post from "../../../components/Post/Post";

type State = {
  isClickedCreateNewPost: boolean;
};

type PostDetails = {
  _id: string;
  userId: string;
  imageId: string;
  imageUrl: string;
  date: Date;
  title: string;
  description: string;
  tags: string[];
  categoryName: string;
  categoryId: string;
};

export default function UserBlog() {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<any>();
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tagString, setTagString] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [state, setState] = useState<State>({ isClickedCreateNewPost: false });
  const id = localStorage.getItem("id");

  function clearTextFileds() {
    setImageUrl("");
    setDate("");
    setTitle("");
    setDescription("");
    setTagString("");
    setCategoryName("");
    handleClickCreateNewPost();
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    name === "userId"
      ? setUserId(value)
      : name === "imageUrl"
      ? setImageUrl(value)
      : name === "date"
      ? setDate(value)
      : name === "title"
      ? setTitle(value)
      : name === "description"
      ? setDescription(value)
      : name === "tagString"
      ? setTagString(value)
      : name === "categoryName" && setCategoryName(value);
  };

  function convertToBase64(e: any) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImageUrl(reader.result);
    };
    reader.onerror = (error) => {
      console.log("errar :", error);
    };
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let tagsArray = convertTagStringToArray(tagString);
    let newPost = {
      userId: id,
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
        alert("Post Add Successfully.");
        clearTextFileds();
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

  const handleClickCreateNewPost = () => {
    setState((prevState) => ({
      ...state,
      isClickedCreateNewPost: !state.isClickedCreateNewPost,
    }));
  };

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

  return (
    <>
      <UsersHeader />

      <div className="py-6 lg:px-60 md:px-32 xl:px-96 px-8 mt-20">
        <div className="w-full flex flex-col space-y-1">
          {!state.isClickedCreateNewPost ? (
            <>
              <div
                className="cursor-pointer w-full p-4 bg-accent-green-50 text-white rounded flex justify-between items-center"
                onClick={handleClickCreateNewPost}
              >
                <h6 className="text-center font-Ubuntu font-bold text-lg">
                  Create New Post
                </h6>
                <AddCircleIcon />
              </div>
              <div
                className="cursor-pointer p-8 bg-white rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400"
                onClick={handleClickCreateNewPost}
              >
                <PostAddIcon />
                <h6 className="text-center font-Ubuntu font-bold text-lg">
                  Your New Post
                </h6>
              </div>
            </>
          ) : (
            <>
              <div
                className="cursor-pointer w-full p-4 bg-accent-red-50 text-white rounded flex justify-between items-center"
                onClick={handleClickCreateNewPost}
              >
                <h6 className="text-center font-Ubuntu font-bold text-lg">
                  Discard Post
                </h6>
                <RemoveCircleIcon />
              </div>
              <div className="w-full cursor-pointer p-8 bg-accent-white-50 rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400">
                <form>
                  <div className="-mx-3 md:flex mb-4">
                    <div className="md:w-1/2 px-2 mb-6 md:mb-0">
                      <TextField
                        type="file"
                        variant="outlined"
                        name="imageUrl"
                        onChange={convertToBase64}
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
                        name="tagString"
                        placeholder="Enter comma separated tags"
                        onChange={handleInputChange}
                        fullWidth={true}
                        required
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-4">
                    <div className="md:w-full px-3 mb-6 md:mb-0">
                      <button
                        className="p-2 mt-2 pr-3 pl-3 bg-accent-green-200 text-white rounded"
                        onClick={handleSubmit}
                      >
                        <h6>Publish Post</h6>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <Divider className="!my-5" />

        {postList.map((post) => (
          <Post
            key={post._id}
            _id={post._id}
            userId={post._id}
            imageId={post.imageId}
            imageUrl={post.imageUrl}
            date={post.date}
            title={post.title}
            description={post.description}
            tags={post.tags}
            categoryName={post.categoryName}
            categoryId={post.categoryId}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
