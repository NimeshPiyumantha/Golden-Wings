import Tag from "../Tag";

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
        <div className="flex flex-row-reverse mx-5 text-accent-white-50">
          {" "}
          {props._id}
        </div>
      </div>
    </a>
  );
}
