import propTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    title,
    id,
    cover,
    author,
    author_img,
    hashtags,
    reading_time,
    posted_date,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4 ">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmarks(blog)} className="ml-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="text-purple-600 font-bold"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: propTypes.object.isRequired,
  handleAddToBookmarks: propTypes.func.isRequired,
  // handleMarkAsRead: propTypes.func.isRequired
};
export default Blog;
