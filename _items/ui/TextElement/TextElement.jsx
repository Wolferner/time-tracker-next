'use client'

import styles from './TextElement.module.css'
import Link from 'next/link'

const TextElement = (props) =>{

    const {url} = props

switch(url){
    case undefined:
    case "" :
        return(
        <div className= {`${styles.collectionHeader} collection-item collection-header  transparent`} ><span>{props.children}</span></div>)
    default:
        return(
        <Link href={url} className={`${styles.collectionItems} collection-item transparent`} >{props.children}</Link>)
}  
}

export default TextElement