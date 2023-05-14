import React from "react";

export const BlogCard = () => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mx-auto mb-10 max-w-[370px] shadow-lg p-5 rounded-lg">
        <div className="mb-8 overflow-hidden rounded">
          <img
            src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
            alt="image"
            className="w-full"
          />
        </div>
        <div>
          <span className="bg-primary mb-5 inline-block rounded px-4 text-center text-xs font-semibold leading-loose text-gray-400">
            Dec 22, 2023
          </span>
          <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
            Meet AutoManage, the best AI management tools
          </h3>
          <p className="text-body-color text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};
