'use client'

import React from "react"
import styles from './SideBar.module.css'


const SideBar = (props) =>{

    let PositionClass = "left";
    // const position = props.position.toLowerCase();

    let gridRatio = props.gridRatio

    return(
        <div className={` ${styles.SideBar} s${gridRatio} ${styles[PositionClass]} col  `}>
            {props.children}
        </div>
    )
}

export default SideBar