import React from "react";
import Blog from "./common/blog";

const Blogs = () => {
  const blogs = [
    {
      title: "Message Traceability vs End-to-End Encryption",
      desc:
        "The craze of texting can be seen in the world, we see people texting anytime and anyplace, these texts connect people to their friends, family and relatives...",
      img: "https://source.unsplash.com/33oxtOMk6Ac/1600x900",
      date: "June 4",
      url:
        "https://medium.com/@iashu2k/message-traceability-vs-end-to-end-encryption-add848ad7159",
    },
  ];
  return (
    <div>
      <div className="font-bold text-3xl py-10 border-b border-t  border-gray-300 mt-6">
        Blogs
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {blogs.map((x) => (
          <Blog e={x} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
