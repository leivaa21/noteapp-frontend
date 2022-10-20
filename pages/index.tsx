import Head from 'next/head';
import Link from "next/link";
import React from 'react';
import NoteList from '../components/NoteList';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Notas</title>
        <meta name="description" content="Tu WebApp de notas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="note-section">
          <h1 className='title'>Notas</h1>
          <NoteList />
          <Link href="/notes/new" passHref>
            <button className={styles.botonAñadir}>+</button>
          </Link>
        </section>
      </main>
      <footer>

      </footer>
    </div>
    )
}