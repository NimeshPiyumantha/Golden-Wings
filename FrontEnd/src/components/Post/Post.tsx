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

export default function Post(props: PostDetails) {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<any>();
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tagString, setTagString] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl m-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.imageUrl}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-accent-white-100 dark:text-white">
          {props.title}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-accent-white-100 dark:text-white">
          {props.categoryName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <span className="w-full mt-3 flex space-x-2">
          {props.tags &&
            props.tags.map((tagText, index) => (
              <Tag key={index} text={tagText} />
            ))}
        </span>
        <div>
          <IconButton onClick={handleOpen}>
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
          <IconButton onClick={() => handleDeleteSelectedPost(props._id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </div>
      </div>
    </a>
  );
}
