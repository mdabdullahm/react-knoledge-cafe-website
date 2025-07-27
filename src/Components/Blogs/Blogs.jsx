// Blogs.jsx

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        // এখানে w-full md:w-2/3 ব্যবহার করা হয়েছে
        // মোবাইল স্ক্রিনে পুরো চওড়া, মাঝারি স্ক্রিন থেকে ২/৩ অংশ চওড়া
        <div className="w-full md:w-2/3 mt-3">
            {/* ফন্ট সাইজ রেসপন্সিভ করা হয়েছে */}
            <h1 className="text-3xl md:text-4xl font-bold">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;