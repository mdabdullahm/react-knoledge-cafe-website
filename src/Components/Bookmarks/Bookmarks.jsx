import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime}) => {
    return (
        <div className="md:1/3 bg-lime-100 mt-3 mx-4">
            <div>
                <h3 className='text-4xl px-4 py-1'>Reding Time: {readingTime}</h3>
            </div>
                <hr className="divider divider-info" />
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

