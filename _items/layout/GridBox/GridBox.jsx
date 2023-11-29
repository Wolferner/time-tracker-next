'use client'
import React from "react";
import styles from './GridBox.module.css'

const GridBox = (props) =>{

    return(
        <div className={` ${styles.GridBox} ${props.className} row `}>
            {props.children}
        </div>
    )
}

export default GridBox