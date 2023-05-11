import image1 from "../../assets/img/1.jpg";

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
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block w-auto h-auto items-center"
            src={image1}
          />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {props.title}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">{props.location}</p>
        </header>

        <p className="m-4 mx-4 text-sm">{props.description}</p>
      </article>
    </div>
  );
}
