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

export default function BlogCard(props: PostDetails) {
  const dateString = props.date;
  const dateObj = new Date(dateString);

  // Extract the year, month, and day components of the date
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1; // months are zero-indexed, so add 1
  const day = dateObj.getUTCDate();

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mx-auto mb-10 max-w-[350px] shadow-lg p-4 rounded-lg  border-2">
        <h3 className="text-accent-green-200 hover:text-primary flex justify-center p-2 text-lg font-semibold sm:text-1xl lg:text-xl xl:text-1xl">
          {props.categoryName}
        </h3>
        <div className="mb-4 overflow-hidden rounded w-60 flex flex-row-reverse">
          <img src={props.imageUrl} alt="image" className="w-3/4" />
        </div>
        <div className="px-2">
          <h3 className="text-dark hover:text-primary  inline-block text-lg font-semibold sm:text-1xl lg:text-xl xl:text-1xl">
            {props.title}
          </h3>
          <h6 className="bg-primary mb-2 inline-block rounded px-4 text-center text-sm font-semibold  text-gray-400">
            {year}/{month}/{day}
          </h6>
          <p className="text-body-color text-sm">{props.description}</p>
          <span className="w-full mt-2 flex">
            <h1 className="py-1 font-bold">Tags :</h1>
            {props.tags &&
              props.tags.map((tagText, index) => (
                <Tag key={index} text={tagText} />
              ))}
          </span>
        </div>
      </div>
    </div>
  );
}
