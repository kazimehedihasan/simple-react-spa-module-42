
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookMarks, setBookMarks] = useState([])
const handleAddToBookmarks = blog =>{
  console.log('Adding book');
}

  return (
    <>
 <Header></Header>
    <main className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    </>
  )
}

export default App
