// App.jsx

import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    // جلوگیری করা হচ্ছে যাতে একই ব্লগ দুইবার বুকমার্ক না হয়
    if (!bookmarks.find(b => b.id === blog.id)) {
      const newBookmark = [...bookmarks, blog];
      setBookmarks(newBookmark);
    } else {
      alert("You have already bookmarked this blog!");
    }
  }

  const handleMarkAsRead = time => {
    setReadingTime(prevReadingTime => prevReadingTime + parseInt(time));
  }

  return (
    // আমরা এখানে p-4 যোগ করেছি যাতে মোবাইল স্ক্রিনে কন্টেন্টগুলো একদম স্ক্রিনের ধারে না লেগে থাকে
    <div className="max-w-6xl mx-auto p-4 lg:p-0">
      <Header></Header>
      {/* এখানে md:gap-6 যোগ করা হয়েছে যাতে দুটি কলামের মধ্যে ৬ ইউনিটের একটি গ্যাপ তৈরি হয় */}
      <main className="md:flex md:gap-6">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  )
}

export default App;