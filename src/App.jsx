import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import CreateNote from "./Pages/CreateNote"
import EditNote from "./Pages/EditNote"
import ViewNote from "./Pages/ViewNote"
import Notes from "./Pages/Notes"


// import dummynotes from './dummyNotes'

const App = () => {

  const colors = [ '#ffab91', '#ffcc80' ,'#e6ee9b', '#80deea', '#cf93d9', '#80cbc4', '#f48fb1']

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('noteLists')) || [])

  useEffect(()=> {
    localStorage.setItem('noteLists', JSON.stringify(notes));
  },[notes])
    

  return (
    <main>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Notes notes={notes} colors={colors}/>} />
        <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
        <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
        <Route path="/view-note/:id" element={<ViewNote notes={notes} setNotes={setNotes} colors={colors}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App