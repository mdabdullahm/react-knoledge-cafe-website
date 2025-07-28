import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-full md:w-2/3 mt-3">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blogs;