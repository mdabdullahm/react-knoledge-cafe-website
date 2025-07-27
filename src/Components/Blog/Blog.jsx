import PropTypes from 'prop-types';
import { BiSolidBookmarkHeart } from "react-icons/bi";

// Functional component to display a single blog post.
const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
    // Destructuring props for easier access.
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;

    return (
        // Main container for the blog post.
        <div className='py-3'>
            {/* Blog cover image */}
            <img className='mb-2 rounded-md' src={cover} alt={`cover picture of the title ${title}`} />

            {/* Container for author info and reading time */}
            <div className='flex justify-between mb-1'>
                {/* Author details section */}
                <div className='flex gap-3'>
                    <img className='w-11 h-11' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* Reading time section */}
                <div className='flex items-center gap-2'>
                    <span>{reading_time} read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='text-red-500 text-2xl'><BiSolidBookmarkHeart></BiSolidBookmarkHeart></button>
                </div>
            </div>

            {/* Blog post title */}
            <h2 className='text-4xl mb-1'>{title}</h2>

            {/* Hashtags section */}
            <p className='text-blue-500'>
                {
                    // Mapping through the hashtags array to display each one.
                    // Added a unique 'key' for each element, which is important for list rendering in React.
                    hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a> </span>)
                }
            </p>
            {/* mark as read btn */}
            <button onClick={() =>handleMarkAsRead(reading_time)} className='text-purple-500 underline'>Mark As read</button>
        </div>
    );
};

// Defining prop types for the component for type checking.
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

// Exporting the Blog component to be used in other parts of the application.
export default Blog;