import image1 from "../../assets/img/2.jpg";
import Tag from "../Tag";
import api from "../../axios";

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
  return (
    <a
      href="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl m-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image1}
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
      </div>
    </a>
  );
}
