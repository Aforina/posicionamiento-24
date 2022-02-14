import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Tariffs from '../components/Tariffs'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posicionamiento Web 24</title>
      </Head>
      <Hero />
      <Nav />
      <Services />
      <Tariffs />
      <ContactForm />
      <h1 className='text-3xl font-bold underline text-red-700'>Hello World!</h1>
    </div>
  )
}
