import Head from 'next/head'
import React from 'react'

import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Tariffs from '../components/Tariffs'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen min-w-screen overflow-hidden bg-[#F6F6F6]'>
      <Head>
        <title>Posicionamiento Web 24</title>
      </Head>
      <div className='relative w-screen h-screen overflow-y-hidden'>
        <Hero />
        <Nav />
      </div>
      <Services />
      <Tariffs />
      <ContactForm />
      <Footer />
      <h1 className='text-3xl font-bold underline text-red-700'>Hello World!</h1>
    </div>
  )
}
