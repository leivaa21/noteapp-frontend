import Head from 'next/head';
import Link from "next/link";
import React from 'react';
import NoteList from '../components/NoteList';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Note App</title>
        <meta name="description" content="Tu WebApp de notas" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <h1>📝 Note App</h1>
        <section id="section">
          <NoteList />
          <Link href="/notes/new" passHref>
            <button className="add">+</button>
          </Link>
        </section>
      </main>
      <footer>

      </footer>
    </div>
    )
}