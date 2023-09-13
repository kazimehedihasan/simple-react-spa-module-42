
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookMarks] = useState([])
const [readingTime, setReadingTime] = useState(0)
const handleAddToBookmarks = blog =>{
  const newbookmarks =[...bookmarks, blog]
  setBookMarks(newbookmarks)
}
const handleMarkAsRead = (id, time) =>{
  const newRedingTime = readingTime + time;
  setReadingTime(newRedingTime)
  // setReadingTime(readingTime + time);
const remainingBookmarks =  bookmarks.filter(bookmark => bookmark.id !== id); 
setBookMarks(remainingBookmarks);

}
  return (
    <>
 <Header></Header>
    <main className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </main>
    </>
  )
}

export default App
