'use client'
import React from 'react'
import styles from './home.module.sass'
import image from '/public/Arte.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
export default function Home() {
    const router = useRouter()

    return (

            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className={styles.home}>
                <div className={styles.descriptionPage}>
                    <p>Modern and Responsive Design, Developed with [ 'NextJS 13', 'Sass', 'React-Icons', 'Framer-Motion' ] by me with great affection.</p>
                </div>
                
                <div className={styles.me}>
                    <span>Olá 👋, Eu sou</span>
                    <h1>Alex de Matos</h1>
                    <span>Designer / Front End Developer 🚀</span>
                    <button onClick={() => router.push('/projects')}><span>Projetos</span></button>
                </div>
                
                <div className={styles.art}>
                    <Image src={image}/>
                </div>

            </motion.div>

  )
}
