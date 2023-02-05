import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {AiFillHome} from 'react-icons/ai'
import {FaUser,FaCode} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SlScreenDesktop} from 'react-icons/sl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../../app/layout.module.sass'

const Navbar = () => {

    const [showNavbarMobile,setShowNavbarMobile] = useState(false)

    return (
    <motion.nav
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className={styles.nav}>

            <div className={styles.navDesktop}>
                <Image className={styles.logo} src={'https://i.imgur.com/NhVxbDm.png'} alt='logo' height={0} width={265}/>
                <ul>
                    <li><Link href={'/'}><AiFillHome/><span>Home</span></Link></li>
                    <li><Link href={'/about'}><FaUser/><span>About</span></Link></li>
                    <li><Link href={'/projects'}><SlScreenDesktop/><span>Projects</span></Link></li>
                    <li><Link href={'/skills'}><FaCode/><span>Skills</span></Link></li>
                </ul>
            </div>

            <div 
                className={styles.navMobile}
                style={showNavbarMobile ? {height: '315px'} : {height: '60px'}}
                >
                
                <div 
                    onClick={()=>setShowNavbarMobile(!showNavbarMobile)}
                    className={styles.hamburger}>
                    <GiHamburgerMenu/>
                </div>
                
                <ul
                    onClick={()=>setShowNavbarMobile(false)}
                    style={showNavbarMobile ? {transform: 'translateY(0px)',opacity: 1, pointerEvents: 'all'} : {transform: 'translateY(-50px)',opacity: 0, pointerEvents: 'none'}}
                >
                    <li><Link href={'/'}><AiFillHome/><span>Home</span></Link></li>
                    <li><Link href={'/about'}><FaUser/><span>About</span></Link></li>
                    <li><Link href={'/projects'}><SlScreenDesktop/><span>Projects</span></Link></li>
                    <li><Link href={'/skills'}><FaCode/><span>Skills</span></Link></li>
                </ul>
                <Image 
                    style={showNavbarMobile ? {transform: 'translateY(0px)',opacity: 1} : {transform: 'translateY(-100px)',opacity: 0}}
                className={styles.logo} src={'https://i.imgur.com/NhVxbDm.png'} alt='logo' height={0} width={265}/>
            </div>
    
    </motion.nav>
  )
}

export default Navbar