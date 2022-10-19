import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"; // esto hace que no tenga que recargar toda la pagina cuando cambias de página
import React from 'react';
import Form from '../components/Form';
import Notas from '../components/Notas';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.cuerpo}>  
      <Head>
        <title>Notas</title>
        <meta name="description" content="Tu WebApp de notas" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <div className={styles.container}><h1>Notas</h1></div>
      <div className={styles.container}><Notas /></div>
      
      <Link href="/nuevaNota" passHref>
        <button className={styles.botonAñadir}>+</button>
      </Link>
    </div>
    </>
    )
}