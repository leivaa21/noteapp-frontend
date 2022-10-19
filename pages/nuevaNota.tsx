import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"; // esto hace que no tenga que recargar toda la pagina cuando cambias de página
import React from 'react';
import Form from '../components/Form';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div>  
      <Head>
        <title>Añadir Nota</title>
        <meta name="description" content="Tu WebApp de notas" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <Form />

    </div>
    </>
    )
}