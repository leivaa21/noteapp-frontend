import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from '../styles/Home.module.css'


export default function FormPonentes() {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  
  const onTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onContentChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const [errorMsg, setErrorMsg] = useState<string>('');
  const submitNote = async () => {
    if (!title) {
      setErrorMsg('Title must be defined!');
      return;
    }
    if (!content) {
      setErrorMsg('Content must be defined!');
      return;
    }
    const url = 'https://noteapp-backend-production.up.railway.app/api/notes';
    const response = await axios.post(url, {title, content})
    if (response && response.status === 201) {
      router.push('/');
      return;
    }
    setErrorMsg('Invalid Params!');
  };
  return (
    <div className="note-form">
      <h1>Añadir Nota</h1>
      <p style={{color: 'var(--alt-primary-color)'}}>{errorMsg}</p>
      <div className="field">
        <label className="label" htmlFor="title">Titulo:</label>
        <input className="input" type="text" id="title" name="title" value={title} onChange={onTitleChange} />
      </div>
      <div className="field">
        <label className="label" htmlFor="content">Contenido:</label>
        <textarea className="input" name="content" id="content" value={content} onChange={onContentChange}/>
      </div>
      <button onClick={async () => await submitNote()}>Añadir Nota</button>
      <Link href="/">
        <button className="cancelBtn">Cancel</button>
      </Link>
    </div>
  )
}