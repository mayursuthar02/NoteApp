import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note, index, colors}) => {

  // const colors = [ '#ffab91', '#ffcc80' ,'#e6ee9b', '#80deea', '#cf93d9', '#80cbc4', '#f48fb1'] 

  return (
    <Link to={`/view-note/${note.id}`} className='note' style={{ backgroundColor: colors[index % 5]}} note={note.id}>
      <h4 style={{'textDecoration':'none'}}>{note.title.length > 40 ? (note.title.substr(0,40))+'...' : note.title }</h4>
      <p>{note.date}</p>
    </Link> 
  )
}

export default NoteItem