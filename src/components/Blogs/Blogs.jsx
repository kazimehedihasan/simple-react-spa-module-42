import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmarks}) => {
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
                
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;