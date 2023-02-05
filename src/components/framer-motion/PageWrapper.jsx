import React from 'react'
import { motion } from 'framer-motion'


const PageWrapper = (props) => {

    const initial = {x: '80%',opacity: 0}
    const animate = {x: '0%',opacity: 1}
    const duration = {duration: 0.5}
      
  return (
    <motion.div
    initial={initial}
    animate={animate}
    transition={duration}
    className={props.className}
    >
        {props.children}
    </motion.div>
  )
}

export default PageWrapper