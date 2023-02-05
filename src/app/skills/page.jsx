'use client'
import React, { useRef, useState } from 'react'
import styles from './skills.module.sass'
import PageWrapper from '@/components/framer-motion/PageWrapper'
import { stack } from 'data'
import { Technology } from '@/components/Cards/Technology/Technology'

const page = () => {

    const selectRef = useRef()

    const defaultSkills = stack.map((skills)=>skills)
    
    const [showSkills,setShowSkills] = useState(defaultSkills)

    function sortSkills(type){
        switch(type){
            case 'alphabetical ascending':
                setShowSkills((prev)=>{
                    
                    const newArr = [...prev]
                    
                    newArr.sort(function(a,b){
                        if (a.name > b.name) {
                            return 1
                        }
                        if (a.name < b.name) {
                            return -1
                        }
                        return 0;
                    })

                    return newArr
                })
            break

            case 'alphabetical descending':
                setShowSkills((prev)=>{
                    
                    const newArr = [...prev]
                    
                    newArr.sort(function(a,b){
                        if (a.name < b.name) {
                            return 1
                        }
                        if (a.name > b.name) {
                            return -1
                        }
                        return 0;
                    })

                    return newArr
                })
            break

            case 'chronological ascending':
                setShowSkills((prev)=>{
                    
                    const newArr = [...prev]
                    
                    newArr.sort(function(a,b){
                        if (a.since > b.since) {
                            return 1
                        }
                        if (a.since < b.since) {
                            return -1
                        }
                        return 0;
                    })

                    return newArr
                })
            break

            case 'chronological descending':
                setShowSkills((prev)=>{
                    
                    const newArr = [...prev]
                    
                    newArr.sort(function(a,b){
                        if (a.since < b.since) {
                            return 1
                        }
                        if (a.since > b.since) {
                            return -1
                        }
                        return 0;
                    })

                    return newArr
                })
            break

            case 'default':
                setShowSkills(defaultSkills)
            break
        }
    }

    function selectOrder(){
        switch(selectRef.current.value){
            
            case 'ascendingAlphabeticalOrder':
                sortSkills('alphabetical ascending')
            break

            case 'descendingAlphabeticalOrder':
                sortSkills('alphabetical descending')
            break

            case 'ascendingChronologicalOrder':
                sortSkills('chronological ascending')
            break

            case 'descendingChronologicalOrder':
                sortSkills('chronological descending')
            break

            case 'defaultOrder':
                sortSkills('default')
            break

        }
    }

    return (

    <PageWrapper className={styles.skills}>

        <h1>Skills</h1>


    <div className={styles.content}>

        <div className={styles.sort}>
            <span>Ordenar por: </span>
            <select ref={selectRef} className={styles.customSelect} name="selectOrder" id="selectOrder" onChange={selectOrder}>
                <option value="defaultOrder">Default</option>
                <option className={styles.option} value="ascendingAlphabeticalOrder">Ordem Alfabética 🔼</option>
                <option value="descendingAlphabeticalOrder">Ordem Alfabética 🔽</option>
                <option value="ascendingChronologicalOrder">Ordem Cronológica 🔼</option>
                <option value="descendingChronologicalOrder">Ordem Cronológica 🔽</option>
            </select>
        </div>
        
        <div className={styles.cardsTechnology}>
            
            {showSkills.map((tech)=>(
                <Technology key={tech.name} alt={`Icone do ${tech.name}`} icon={tech.icon} name={tech.name} since={tech.since}/>
            ))}

        </div>

        </div>


    </PageWrapper>
  )
}

export default page