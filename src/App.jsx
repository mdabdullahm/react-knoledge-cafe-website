import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddBookmark = blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = time =>{
    setReadingTime(newRedingTime => newRedingTime + time);
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <main className="md:flex">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  )
}

export default App
