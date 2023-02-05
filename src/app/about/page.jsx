'use client'
import React from 'react'
import styles from './about.module.sass'
import PageWrapper from '@/components/framer-motion/PageWrapper'
import pic from '/public/pic.png'
import Image from 'next/image'
import {FaGithub,FaInstagram,FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
const page = () => {

    return (
    <PageWrapper className={styles.about}>

        <h1>About</h1>

        <div className={styles.content}>
            <div className={styles.appearance}>
                <div className={styles.pic}>
                    <Image src={pic} width={0} height={0}/>
                </div>
                <div className={styles.buttons}>
                    <button><a href="https://github.com/Alex-DMB" target="_blank"><FaGithub/></a></button>
                    <button><a href="https://www.linkedin.com/in/alex-dmb/" target="_blank"><FaLinkedin/></a></button>
                    <button><a href="https://www.instagram.com/Ryuu.dev/" target="_blank"><FaInstagram/></a></button>
                </div>
                <div className={styles.aboutMe}>
                    <span>// Sobre Mim</span>
                    <br/>
                    <p>const aboutMe = {`{`}
                        <br/>
                        <br/>
                        <span>firstName: <span>"Alex"</span>,</span>
                        <span>lastName: <span>"de Matos"</span>,</span>
                        <span>email: <span>"Alex7DMB@gmail.com"</span>,</span>
                        <span>age: <span>22</span>,</span>
                        <span>state: <span>"Rio de Janeiro"</span>,</span>                
                        <span>country: <span>"Brasil"</span>,</span>
                        <br/>
                        {`}`}
                    </p>
                </div>

                <div className={styles.myDescription}>
                    <span>// Apresentação</span>
                    <br/>
                    <p>
                        Sou programador Front-End apaixonado por design e tecnologia, desenvolvo aplicações web com ReactJS e NextJS, sempre pensando na responsividade e performance. Atualmente estou estudando Typescript.
                    </p>
                </div>
                <div className={styles.education}>
                    <span>// Educação</span>
                    <br/>
                    <p>const education = {`{`}
                        <br/>
                        <br/>
                        <span>university: <span>"Unigranrio Caxias"</span>,</span>           
                        <span>course: <span>"Análise e Desenvolvimento de Sistemas"</span>,</span>
                        <span>status: <span>"Trancada"</span>,</span>
                        <span>graduation: <span>"Dezembro de 2023"</span>,</span>           
                        <br/>
                        {`}`}
                    </p>
                </div>
            </div>

            
        </div>

    </PageWrapper>
  )
}

export default page