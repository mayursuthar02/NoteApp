// import React from 'react'
import { BiSearch } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { MdCollectionsBookmark } from "react-icons/md";
import NoteItem from "../Components/NoteItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Notes = ({ notes, colors, setColor }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect( handleSearch, [text] )

  return (
    <section className="section">
      <header>
        {!showSearch && <h2 className="title"><MdCollectionsBookmark/> Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button className="btn" onClick={() => setShowSearch((prev) => !prev)}>
          { showSearch ? <IoCloseSharp/> : <BiSearch /> }
        </button>
      </header>

      <div className="notes-container">
        <div className="notes">
        { filteredNotes.length == 0 && <p className="notfound">Notes Not Found</p> }
          {filteredNotes.map((note, index) => (
            <NoteItem
              key={note.key}
              note={note}
              index={index}
              colors={colors}
              setColor={setColor}
            />
          ))}
        </div>
      </div>

      <Link to="./create-note" className="btn add__btn">
        <FiPlus />
      </Link>
    </section>
  );
};

export default Notes;
