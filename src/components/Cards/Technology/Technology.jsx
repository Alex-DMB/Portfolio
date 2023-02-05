import Image from 'next/image'
import React from 'react'
import styles from './technology.module.sass'
export const Technology = (props) => {
  return (
    <div className={styles.technology}>
        <Image src={props.icon} width={0} height={0}/>
        <span class={styles.name}>{props.name}</span>
        <span class={styles.since}>Desde {props.since}</span>
    </div>
  )
}
