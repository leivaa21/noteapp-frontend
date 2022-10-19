import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Link from "next/link";
// import styles from '../styles/Home.module.css'
// import axios from 'axios';
// import { API_ROUTE, configAxios } from "../lib/data";
// import Image from 'next/image';
// import Switch from './Switch'
// import Toggle from "./toggle";
// import { title } from "process";


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://noteapp-backend-production.up.railway.app/api/notes');
    const data = await res.json()
    return { props: { data } }
}



export default function Notas({data}) {
  return (
    <article>

      {/* voy a hacer aqui una nota FALSA para darle estilo */}
      <article>
        <h3>Titulo de la nota 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, quis odio culpa consectetur, molestiae facilis non, quae pariatur nostrum eius ab commodi ea molestias dolor architecto qui provident facere.</p>
        <div className={styles.botones}>
          <button>Editar</button> 
          <button className={styles.botonEliminar}>Eliminar</button>
        </div>
      </article>
      <article>
        <h3>Titulo de la nota 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, quis odio culpa consectetur, molestiae facilis non, quae pariatur nostrum eius ab commodi ea molestias dolor architecto qui provident facere.</p>
        <div className={styles.botones}>
          <button>Editar</button> 
          <button className={styles.botonEliminar}>Eliminar</button>
        </div> 
      </article>

      
    {/* {
      data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))
    } */}
    </article>
  )
}