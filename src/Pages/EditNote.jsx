import {IoIosArrowBack} from 'react-icons/io'
import {MdDeleteOutline} from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useCreateDate } from '../Components/useCreateDate';
import { v4 as uuid } from 'uuid';

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item)=> item.id == id);
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  // console.log(note)
  const navigate = useNavigate();
  const date = useCreateDate();

  const handleSave = (e) => {
    e.preventDefault();
    if (title && details) {
      
      const newNote = {...note, title, details, date}

      const newNotes = notes.map(item => {
        if (item.id == id) {
          item  = newNote;
        }
        return item;
      })

      setNotes(newNotes)

      navigate('/');
    }
  }

  const handleDelete = () => {
    const newNotes = notes.filter(item => item.id != id);

    setNotes(newNotes);
    navigate('/');
  }
  
  return (
    <section>
      <header className='header__view-note' >
        <Link to={`/`} className="btn">
            <IoIosArrowBack />
        </Link>
        <div className='btnsection'>
          <button className='btn btn__save' onClick={handleSave}>Save</button>
          <button className='btn danger' onClick={handleDelete}><MdDeleteOutline/></button>
        </div>
      </header>


      <form className='note__form' onSubmit={handleSave}>
        <input
        className='title' 
        type='text' 
        placeholder='Title'
        autoFocus
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        <textarea 
        className='textarea'
        placeholder='Note details...'
        rows={26}
        value={details}
        onChange={(e)=>setDetails(e.target.value)}
        ></textarea>
      </form>


    </section>
  )
}

export default EditNote