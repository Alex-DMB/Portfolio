'use client'
import React from 'react'
import styles from './projects.module.sass'
import { projects } from 'data'
import ProjectCard from '@/components/Cards/Project/ProjectCard'
import PageWrapper from '@/components/framer-motion/PageWrapper'

const page = () => {

    return (
    <PageWrapper className={styles.projects}>

        <h1>Projects</h1>

        <div className={styles.content}>

                {projects.map((projectData,index) => (
                        <ProjectCard key={index} project={projectData}/>
                ))}


        </div> 



    </PageWrapper>

  )
}

export default page