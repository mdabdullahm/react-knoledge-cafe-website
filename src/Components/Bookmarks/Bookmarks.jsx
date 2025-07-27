// Bookmarks.jsx

import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        // এখানেও w-full md:w-1/3 ব্যবহার করা হয়েছে
        // এবং UI সুন্দর করতে কিছু ক্লাস যোগ করা হয়েছে
        <div className="w-full md:w-1/3 bg-gray-100 mt-3 p-4 rounded-lg sticky top-4 h-fit">
            <div className='bg-purple-100 border border-purple-400 p-4 rounded-lg mb-4 text-center'>
                {/* ফন্ট সাইজ রেসপন্সিভ করা হয়েছে */}
                <h3 className='text-lg md:text-xl font-bold text-purple-700'>Reading Time: {readingTime} min</h3>
            </div>
            
            <div className="divider divider-info"></div>

            <div>
                <h2 className='text-xl md:text-2xl font-bold mb-3'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}

export default Bookmarks;