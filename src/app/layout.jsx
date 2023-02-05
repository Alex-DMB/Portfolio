'use client'
import React from 'react'
import './globals.sass'
import styles from './layout.module.sass'
import { AnimatePresence } from "framer-motion"
import Navbar from '@/components/Navbar/Navbar'
import Bright from '@/components/Bright/Bright'

export default function RootLayout({ children }) {

    const classScreen = styles.screen

  return (
      <html lang="en">
      <head />

      <body className={`${classScreen}`}>


            <Navbar/>

            <main className={styles.content}>
            <AnimatePresence>

                {children}

            </AnimatePresence>
            </main>
            
            <Bright/>
        </body>

    </html>
  )
}
