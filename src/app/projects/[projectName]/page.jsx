import Image from 'next/image'
import React from 'react'
import {projects} from '../../../../data'
import { AiOutlineGithub,AiOutlineLink,AiOutlineArrowRight } from 'react-icons/ai'
import styles from './individualProject.module.sass'

export function generateStaticParams(){
    const myProjects = projects.map((project)=>({projectName: project.name}))
    return myProjects
}

const page = ({params}) => {
    const projectsProps = projects.filter((project) => (project.name === params.projectName))
    const project = projectsProps[0]

  return (
    <div className={styles.individualProject}>

        <div className={styles.bannerImage}>
            <Image src={project.image} width={1500} height={0} quality={75} alt=''/>
        </div>

        <div className={styles.content}>

            <div className={styles.info}>
                <h1>
                    {project.name}
                </h1>
                <div className={styles.description}>
                    <p>
                        {project.fullDescription}
                    </p>
                </div>


            
            </div>

            <div className={styles.buttons}>
                <a href={project.repo} target="_blank"><AiOutlineGithub/>Acessar Repositório</a>
                <a href={project.link} target="_blank"><AiOutlineLink/>Acessar a Página</a>
            </div>

            <div className={styles.stack}>

                <h2>Tecnologias utilizadas</h2>

                <div className={styles.stackContainer}>
                    {project.stack.map((tech,index)=>(
                        <div className={styles.technology}>
                            <Image key={index} src={tech.icon} width={50} height={50} alt={tech.name}/>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default page