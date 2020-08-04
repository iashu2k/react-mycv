import React from "react";

const Blog = ({ e }) => {
  return (
    <a href={e.url} target="blank">
      <div class="max-w-sm w-full lg:max-w-full lg:flex hover:shadow-lg">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: `url("${e.img}")`,
          }}
          title={e.title}
        ></div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">{e.title}</div>
            <p class="text-gray-700 text-base">{e.desc}</p>
          </div>
          <div class="flex items-center">
            <p class="text-gray-600">{e.date}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Blog;
