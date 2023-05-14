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
    <div className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
      <article className="overflow-hidden rounded-lg shadow-lg border-2">
      <h3 className="text-accent-gray-200 hover:text-primary flex justify-center p-2 text-lg font-semibold sm:text-1xl lg:text-xl xl:text-1xl">
            {props.categoryName}
          </h3>
      <div className="mb-4 overflow-hidden rounded w-60 flex flex-row-reverse">
          <img src={props.imageUrl} alt="image" className="w-3/4" />
        </div>

       
        <p className="m-3 mx-4 text-sm">{props.description}</p>
      </article>
    </div>
  );
}
