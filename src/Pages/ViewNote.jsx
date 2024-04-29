import {IoIosArrowBack} from 'react-icons/io'
import {FiEdit} from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';

const ViewNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item)=> item.id == id)
  const title = note.title
  const details = note.details
  const date = note.date
  const navigate = useNavigate();

  const handleDelete = () => {
    const newNotes = notes.filter(item => item.id != id);

    setNotes(newNotes);
    navigate('/');
  }

  
  return (
    <section>
      <header className='header__view-note' >
      <Link to="/" className="btn">
          <IoIosArrowBack />
      </Link>
      <div className='viewnotes_btn'>
        <Link to={`/edit-note/${note.id}`} className="btn">
            <FiEdit />
        </Link>
        <button className='btn danger' onClick={handleDelete}><MdDeleteOutline/></button>
      </div>
      </header>
      <div className='note__form'>
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
        <p className="textarea">{details}</p>
      </div>
    </section>
  )
}

export default ViewNote