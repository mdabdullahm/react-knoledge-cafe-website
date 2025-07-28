import PropTypes from 'prop-types';
import { BiSolidBookmarkHeart } from "react-icons/bi";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
    const { id, title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    
    return (
        <div className='py-4 border-b-2 dark:border-gray-700 last:border-b-0'>
            <img className='w-full mb-4 rounded-md' src={cover} alt={`cover picture of the title ${title}`} />

            <div className='flex flex-col md:flex-row justify-between mb-4'>
                <div className='flex gap-3 items-center mb-4 md:mb-0'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold dark:text-white'>{author}</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-gray-700 dark:text-gray-300'>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)} className='text-red-500 text-2xl'>
                        <BiSolidBookmarkHeart />
                    </button>
                </div>
            </div>

            <h2 className='text-2xl md:text-4xl mb-4 font-semibold dark:text-white'>{title}</h2>

            <p className='text-blue-600 dark:text-blue-400 mb-4'>
                {
                    hashtags.map((hash, index) => <span key={index} className="mr-2">#{hash}</span>)
                }
            </p>
            
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-600 dark:text-purple-400 font-bold underline'>
                Mark As read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;