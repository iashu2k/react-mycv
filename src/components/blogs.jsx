import React from "react";
import Blog from "./common/blog";

const Blogs = () => {
  const blogs = [
    {
      title: "Message Traceability vs End-to-End Encryption",
      desc:
        "The craze of texting can be seen in the world, we see people texting anytime and anyplace, these texts connect people to their friends, family and relatives...",
      img:
        "https://images.unsplash.com/photo-1514464750060-00e6e34c8b8c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9",
      date: "June 4, 2020",
      url:
        "https://medium.com/@iashu2k/message-traceability-vs-end-to-end-encryption-add848ad7159",
    },
    {
      title: "What are WebSockets ?",
      desc:
        "A socket is one endpoint of a two way communication link between a client and a server which can be used to establish a real-time, bidirectional and event-based communication. In simpler terms...",
      img: "https://miro.medium.com/max/3894/0*XOjKAa-eh5jhdck3",
      date: "Apr 30, 2021",
      url: "https://iashu2k.medium.com/what-are-websockets-20322b45989d",
    },
    {
      title: "useRef hook in Reactjs | Simplified",
      desc:
        "In this post we’ll cover what the useRef Hook is, what we can use it for and some advice for using it. useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.",
      img: "https://miro.medium.com/max/1125/1*3d0jsQppieVP5XL6KGK6YA.png",
      date: "Apr 30, 2021",
      url:
        "https://iashu2k.medium.com/useref-hook-in-reactjs-simplified-c44806f42f2a",
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
