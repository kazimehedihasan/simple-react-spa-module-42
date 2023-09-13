import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from "prop-types"


const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
fetch('blogs.json')
.then(res => res.json())
.then(data => setBlog(data))
    },[]);
    return (
        <div className="md:w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmarks: propTypes.func.isRequired,
    handleMarkAsRead:propTypes.func
}
export default Blogs;