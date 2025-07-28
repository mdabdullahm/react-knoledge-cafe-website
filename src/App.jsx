// src/App.jsx

import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    if (!bookmarks.find(b => b.id === blog.id)) {
      const newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
    } else {
      alert("You have already bookmarked this blog!");
    }
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(prevReadingTime => prevReadingTime + parseInt(time));
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className="font-sans bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 lg:p-0">
          <Header />
          <main className="md:flex md:gap-6">
            <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead} />
            <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
          </main>
      </div>
    </div>
  )
}

export default App;