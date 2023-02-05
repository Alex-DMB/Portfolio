'use client'
import Image from 'next/image'
import React from 'react'
import styles from './projectcard.module.sass'
import { AiOutlineGithub,AiOutlineLink,AiOutlineArrowRight } from 'react-icons/ai'

const ProjectCard = ({project}) => {

    return (
    <div className={styles.projectcard}>
        <div className={styles.image}>
            <Image onClick={()=>window.open(project.link)} src={project.thumb} width={500} quality={75} alt={`Projeto Akatsuki`} height={500}/>
        </div>
        <div className={styles.content}>
            <span className={styles.title}>{project.name}</span>
            <p>{project.shortDescription}</p>
            <div className={styles.externalButtons}>
                <a href={project.repo} target="_blank"><AiOutlineGithub/></a>
                <a href={project.link} target="_blank"><AiOutlineLink/></a>
            </div>
            <div className={styles.internalButton}>
                <a href={`/projects/${project.name}`}><span>Acessar página do projeto para mais detalhes</span><AiOutlineArrowRight/></a>
            </div>
            <div className={styles.brights}>
                <div className={styles.bright1}></div>
                <div className={styles.bright2}></div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard