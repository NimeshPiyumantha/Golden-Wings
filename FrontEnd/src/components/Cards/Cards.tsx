type PlaceDetails = {
  _id: string;
  title: string;
  description: string;
  location: string;
  imageId: string;
  imageUrl: string;
  date: Date;
  timeId: string;
  timeRange: string;
  cost: number;
  contact: number;
  tags: string[];
  categoryName: string;
};
export default function Cards(props: PlaceDetails) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg border-2">
        <h3 className="text-accent-red-100 hover:text-primary flex justify-center p-2 py-5 text-lg font-semibold sm:text-1xl lg:text-xl xl:text-1xl">
          {props.title}
        </h3>
        <div className="mb-4 overflow-hidden rounded flex justify-around">
          <img src={props.imageUrl} alt="image" className="w-3/4" />
        </div>

        <div className="m-5 mx-5 flex flex-col space-y-1 px-9">
          <h3 className="text-accent-green-50 font-Poppins font-bold text-sm">
            Location :{" "}
            <span className="text-gray-500 ml-1"> {props.location}</span>
          </h3>

          <h3 className="text-accent-green-50 font-Poppins font-bold text-sm">
            Cost : <span className="text-gray-500 ml-1"> {props.cost}</span>
          </h3>

          <h3 className="text-accent-green-50 font-Poppins font-bold text-sm">
            Contact :{" "}
            <span className="text-gray-500 ml-1"> {props.contact}</span>
          </h3>

          <h3 className="text-accent-green-50 font-Poppins font-bold text-sm">
            Time Range :{" "}
            <span className="text-gray-500 ml-1"> {props.timeRange}</span>
          </h3>

          <h3 className="text-accent-green-50 font-Poppins font-bold text-sm">
            Category :{" "}
            <span className="text-gray-500 ml-1"> {props.categoryName}</span>
          </h3>
        </div>
      </article>
    </div>
  );
}
