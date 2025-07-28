import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 mt-3 p-4 rounded-lg sticky top-4 h-fit">
            <div className='bg-purple-100 dark:bg-purple-900/50 border border-purple-400 dark:border-purple-600 p-4 rounded-lg mb-4 text-center'>
                <h3 className='text-lg md:text-xl font-bold text-purple-700 dark:text-purple-300'>Reading Time: {readingTime} min</h3>
            </div>
            
            <div className="divider divider-info"></div>

            <div>
                <h2 className='text-xl md:text-2xl font-bold mb-3 dark:text-white'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
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