import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
      <Navbar></Navbar>
      <div className='fixed bottom-0 left-0 top-0'>
      <Footer ></Footer>
      </div>
    </div>
  )
}
