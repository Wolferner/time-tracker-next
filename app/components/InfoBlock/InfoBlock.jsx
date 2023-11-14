'use client'

import React, { useState } from "react";
import styles from './InfoBlock.module.css'

const InfoBlock = () =>{

    const[isHiden, setIsHiden] = useState(false)

    const showStateHandler = (event) =>{
        event.preventDefault()
        setIsHiden(!isHiden)
    }

    return(
        <div>
            <div>
            <a href="" className={`${styles.settings}  secondary-content`} onClick={showStateHandler}><i className="material-icons small " >settings</i></a>
            </div>

            <div className= {`${styles.rowContent} ${isHiden ?styles.disabled : styles.enabled} row`}>
                <form className={`${styles.formCont} col s12 m6`}>
                    <h6>Additional Info</h6>
                    <div className="row" id="info_label">

                        <div className={`${styles.inputBox} input-field col s12`}>
                            <i className=" material-icons  prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate"/>
                            <label htmlFor="icon_prefix">Customer</label>
                        </div>

                        <div className={`${styles.inputBox} input-field col s12`}>
                            <i className=" material-icons prefix">insert_chart</i>
                            <input id="icon_project" type="text" className="validate"/>
                            <label htmlFor="icon_project">Project</label>
                        </div>

                        <div className={`${styles.inputBox} input-field col s12`}>
                            <i className=" material-icons prefix">lightbulb_outline</i>
                            <input id="icon_incident" type="text" className="validate"/>
                            <label htmlFor="icon_incident">INC</label>
                        </div>

                        <div className="chip col">
                            Tag
                            <i className="close material-icons">close</i>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default InfoBlock