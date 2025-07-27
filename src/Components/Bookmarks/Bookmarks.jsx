import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime}) => {
    return (
        <div className="md:1/3 bg-lime-100 mt-3 mx-4">
            <div>
                <h3 className='text-4xl p-4'>Reding Time: {readingTime}</h3>
            </div>
            <h2 className='mx-4'>Bookmarks Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
}

export default Bookmarks

