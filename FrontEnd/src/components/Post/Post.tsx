import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tag from "../Tag";
import api from "../../axios";
import {
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Box,
  TextField,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Toast } from "../../util/save_update_delete_success";

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
  // updateList: any;
};

export default function Post(props: PostDetails) {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [postArray, setPostArray] = useState<PostDetails[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<any>();
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tagString, setTagString] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");

  const style = {
    position: "absolute" as "absolute",
    top: "54%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = () => {
    api
      .get("post")
      .then((res) => {
        setPostArray(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlUpdateSelectedRows = (id: string) => {
    setOpen(true);

    const filteredData = postArray.filter((post) => post._id === id);
    console.log(postArray);
    console.log(filteredData);
    filteredData.forEach((post) => {
      // setImageUrl(post.imageUrl);
      // setDate(post.date.toISOString());
      setTitle(post.title);
      setDescription(post.description);
      setTagString(post.tags.join(", "));
      setCategoryName(post.categoryName);
    });
  };

  function clearTextFileds() {
    setImageUrl("");
    setDate("");
    setTitle("");
    setDescription("");
    setTagString("");
    setCategoryName("");
    setOpen(false);
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

  const handleDeleteSelectedPost = (id: string) => {
    api
      .delete(`post/${id}`)
      .then((res) => {
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

  const updatePost = (id: string) => {
    let tagsArray = convertTagStringToArray(tagString);
    let updatePost = {
      imageUrl: imageUrl,
      date: date,
      title: title,
      description: description,
      tags: tagsArray,
      categoryName: categoryName,
    };

    api
      .put(`post/${id}`, updatePost)
      .then((res) => {
        console.log(res);
        let post: PostDetails[] = [...postList, res.data.responseData];
        setPostList(post);
        clearTextFileds();

        Toast.fire({
          icon: "success",
          title: "Update Successfully",
        });
      })
      .catch((error) => {
        console.log(error);
      });

    let updateImage = {
      imageUrl: imageUrl,
    };
    api
      .put(`post/image/${id}`, updateImage)
      .then((res) => {
        console.log(res);
        let post: PostDetails[] = [...postList, res.data.responseData];
        setPostList(post);
      })
      .catch((error) => {
        console.log(error);
      });
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

  const convertTagStringToArray = (tagString: string): string[] => {
    if (tagString !== "") {
      return tagString.split(",").map((tag) => tag.trim());
    }
    return [];
  };

  const dateString = props.date;
  const dateObj = new Date(dateString);

  // Extract the year, month, and day components of the date
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1; // months are zero-indexed, so add 1
  const day = dateObj.getUTCDate();

  // Interpolate the components into a formatted string

  return (
    <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl m-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg m-2"
        src={props.imageUrl}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-accent-white-100 dark:text-white">
          {props.title}
        </h4>
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-accent-white-50 dark:text-accent-white-50">
          {props.categoryName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-row-reverse mx-5">
          {
            // Create a new Date object from the date prop

            `${year}/${month}/${day}`
          }
        </p>
        <span className="w-full mt-3 flex space-x-2">
          {props.tags &&
            props.tags.map((tagText, index) => (
              <Tag key={index} text={tagText} />
            ))}
        </span>
        <div className="flex flex-row-reverse mx-5">
          <IconButton onClick={() => handleDeleteSelectedPost(props._id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
          <IconButton onClick={() => handlUpdateSelectedRows(props._id)}>
            <EditIcon sx={{ color: "blue" }} />
          </IconButton>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <div className="modal-content">
                  <div className="-mx-3 md:flex mb-4">
                    <div className="md:w-1/2 px-2 mb-6 md:mb-0">
                      <TextField
                        type="file"
                        variant="outlined"
                        name="imageUrl"
                        // value={imageUrl}
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
                        // value={date}
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
                        value={title}
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
                        value={categoryName}
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
                        value={description}
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
                        value={tagString}
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
                        onClick={() => updatePost(props._id)}
                      >
                        <h6>Publish Post</h6>
                      </button>
                    </div>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </a>
  );
}
