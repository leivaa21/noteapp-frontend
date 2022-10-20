import Head from 'next/head'
import React from 'react';
import Form from '../../components/Form';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div>  
      <Head>
        <title>Añadir Nota</title>
        <meta name="description" content="Tu WebApp de notas" />
        <link rel="icon" href="/new.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
      </Head>

      <h1>✍🏻 Añadir Nota</h1>
      <Form />

    </div>
    </>
    )
}