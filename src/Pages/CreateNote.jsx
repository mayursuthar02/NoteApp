import {IoIosArrowBack} from 'react-icons/io'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useCreateDate } from '../Components/useCreateDate';
import { v4 as uuid } from 'uuid';
import notes from '../dummyNotes';

const CreateNote = ({setNotes}) => {
  const navigate = useNavigate();
  const date = useCreateDate();
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const handleCreate = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = {id:uuid(), title, details, date}
      // console.log(note)
      setNotes((prev) => [note, ...prev])
      navigate('/');
    }
  }

  
  return (
    <section>
      <header className='header__view-note' >
        <Link to={`/`} className="btn">
            <IoIosArrowBack />
        </Link>
        <button className='btn btn__save' onClick={handleCreate}>Create</button>
      </header>


      <form className='note__form' onSubmit={handleCreate}>
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

export default CreateNote