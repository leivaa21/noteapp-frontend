import {useRouter} from "next/router";
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'

type Note = {
  title: string,
  content: string,
  id: string,
}

export default function NoteList() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>(new Array<Note>());
  useEffect(() => {
    async function fetchData() {
      const url = 'https://noteapp-backend-production.up.railway.app/api/notes';
      const requestParams = { method: 'GET' };
      const response = await fetch(url, requestParams);
      const result = await response.json();
      if (result.notes === undefined) {
        setNotes([]);
        return;
      }
      setNotes(result.notes);
    }
    try {
      fetchData();
    } catch (e) {
      
    }

  }, [setNotes]);

  async function onEditButtonClick(title: string) {
    router.push(`/notes/edit/${title}`);
  }
  async function onDeleteButtonClick(id: string) {
    const url = `https://noteapp-backend-production.up.railway.app/api/notes/${id}` 
    const requestParams = { method: 'DELETE' };
    await fetch(url, requestParams);
    router.reload();
  }

  return (
    <div className="note-wrapper">

      {notes.map(note => (
        <div className="note" key={note.id}>
          <div className="content">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
          <div className="options">
            <button className="edit" onClick={(e) => {
              e.preventDefault();
              onEditButtonClick(note.title)
            }}>Editar</button> 
            <button className="delete" onClick={(e) => {
              e.preventDefault();
              onDeleteButtonClick(note.id)
            }}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  )
}