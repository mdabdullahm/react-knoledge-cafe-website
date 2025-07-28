import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 dark:bg-slate-700 p-3 mx-4 my-2 rounded-md">
            <h3 className="text-xl dark:text-white">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;