import React, { useState } from "react";
import styles from '../styles/Home.module.css'


export default function FormPonentes() {

  return (
    <div className={styles.FormPonentes}>
      <h1>Añadir Nota</h1>
      <form action={"https://noteapp-backend-production.up.railway.app/api/notes"} method="post" className={styles.form}>
        <label htmlFor="Titulo">Titulo:</label>
          <input type="string" id="title" name="title" />
        <label htmlFor="Contenido">Contenido:</label>
          {/* <input type="string" id="content" name="content" /> */}
          <textarea name="content" rows="3" cols="30" id="content"></textarea>
        <button type="submit">Añadir Nota</button>
      </form>
    </div>
  )
}