import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import BlogSections from '../components/BlogSections'
import Scroll from '../components/Scroll'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline"></h1>
      <BlogSections></BlogSections>
      <Scroll />
    </div>
  )
}
