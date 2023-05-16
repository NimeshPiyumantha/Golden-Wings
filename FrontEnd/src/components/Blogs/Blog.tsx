import { useEffect, useState } from "react";
import api from "../../axios";
import BlogCard from "../BlogCard";

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

export default function Blog() {
  const [postList, setPostList] = useState<PostDetails[]>([]);

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
    <section className="pt-20 pb-10 lg:pt-[80px] lg:pb-20 bg-accent-white-50">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] text-accent-green-200">
                Our Recent News
              </h2>
              <p className="text-body-color text-base">
                One inspiring story is worth traveling. Discover more about
                local food, tradition and history. Read the stories that make
                you want to travel.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 p-2 flex flex-wrap">
          {postList.map((post) => (
            <BlogCard
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
      </div>
    </section>
  );
}
