import { TfiQuoteLeft } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ImBubble } from "react-icons/im";

const Blog = () => {
  const navigate = useNavigate();

  const blogData = [
    {
      id: 1,
      type: "post",
      date: "25 Feb, 2018",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "See our gallery post to improve your design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Full details of this blog... You can add paragraphs, images, etc.",
      author: "Admin",
    },
    {
      id: 2,
      type: "quote",
      text: "One of the difficult things, especially about blogging, is that you put all of your personal out there, into the political. And what's been difficult, for me at least",
      author: "Jacika Valentie",
      content:
        "Here’s a deeper explanation of the quote, why it was said, and the context behind it.",
    },
    {
      id: 3,
      type: "post",
      date: "21 Feb, 2018",
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      title: "How to generate idea from nature to beautify your design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "This blog dives into how you can take inspiration from natural elements...",
      author: "Mark W. Schaefer",
    },
    {
      id: 2,
      type: "quote",
      text: "One of the difficult things, especially about blogging, is that you put all of your personal out there, into the political. And what's been difficult, for me at least",
      author: "Jacika Valentie",
      content:
        "Here’s a deeper explanation of the quote, why it was said, and the context behind it.",
    },
    {
      id: 3,
      type: "post",
      date: "21 Feb, 2018",
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      title: "How to generate idea from nature to beautify your design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "This blog dives into how you can take inspiration from natural elements...",
      author: "Mark W. Schaefer",
    },
    {
      id: 2,
      type: "quote",
      text: "One of the difficult things, especially about blogging, is that you put all of your personal out there, into the political. And what's been difficult, for me at least",
      author: "Jacika Valentie",
      content:
        "Here’s a deeper explanation of the quote, why it was said, and the context behind it.",
    },
  ];

  return (
    <section id="blog" className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
        {blogData.map((item) =>
          item.type === "post" ? (
            <div
              key={item.id}
              className="bg-stone-900 shadow-md flex flex-col justify-between"
            >
              <div className="relative cursor-pointer" onClick={() => navigate(`/blog/${item.id}`, { state: item })}>
                <img
                  src={item.img}
                  alt="Blog Thumbnail"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-0 left-0 bg-black text-white text-sm px-4 py-1">
                  {item.date}
                </span>
              </div>
              <div className="p-6">
                <h2
                  onClick={() => navigate(`/blog/${item.id}`, { state: item })}
                  className="text-xl font-bold mb-3 text-white leading-snug cursor-pointer hover:text-blue-400"
                >
                  {item.title}
                </h2>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                <button
                  onClick={() => navigate(`/blog/${item.id}`, { state: item })}
                  className="text-white font-semibold flex items-center gap-2 hover:text-blue-400 cursor-pointer"
                >
                  READ MORE
                  <FaArrowRightLong className="text-blue-400" />
                </button>
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              onClick={() => navigate(`/blog/${item.id}`, { state: item })}
              className="bg-stone-900 shadow-md p-8 flex flex-col justify-center text-center relative"
            >
              <div className="absolute top-1 md:top-10 left-1/2 -translate-x-1/2">
                <div className="">
                    <ImBubble className="text-5xl md:text-7xl relative text-blue-400"></ImBubble>
                  <TfiQuoteLeft className="text-lg md:text-3xl absolute top-3 left-4 md:top-4 md:left-5" />
                </div>
              </div>
              <p className="text-lg text-white leading-relaxed mt-8 mb-6 hover:text-blue-400 cursor-pointer font-bold">
                {item.text}
              </p>
              <span className="text-sm text-gray-400 font-semibold">
                {item.author}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Blog;
