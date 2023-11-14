'use client'

import styles from './TextElement.module.css'

const TextElement = (props) =>{

    const {url} = props

switch(url){
    case undefined:
    case "" :
        return(
        <div className= {`${styles.collectionHeader} collection-item collection-header  transparent`} ><span>{props.children}</span></div>)
    default:
        return(
        <a href={url} className={`${styles.collectionItems} collection-item transparent`} >{props.children}</a>)
}  
}

export default TextElement