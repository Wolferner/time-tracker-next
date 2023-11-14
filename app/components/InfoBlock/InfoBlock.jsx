'use client'

import React, { useState } from "react";
import styles from './InfoBlock.module.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CloseIcon from '@mui/icons-material/Close';

const InfoBlock = () =>{

    const[isHiden, setIsHiden] = useState(false)

    const showStateHandler = (event) =>{
        event.preventDefault()
        setIsHiden(!isHiden)
    }

    return(
        <div>


            <div>
            <a href="" className={`${styles.settings}  secondary-content`} onClick={showStateHandler}><SettingsApplicationsIcon/></a>
            </div>

            <div className= {`${styles.rowContent} ${isHiden ?styles.disabled : styles.enabled} row`}>
                <form className={`${styles.formCont} col s12 m6`}>
                    <h6>Additional Info</h6>
                    <div className="row" id="info_label">

                        <div className={`${styles.inputBox} input-field col s12`}>
                            <AccountBoxIcon/>
                            <input id="icon_prefix" type="text" className="validate"/>
                            <label htmlFor="icon_prefix">Customer</label>
                        </div>

                        <div className={`${styles.inputBox} input-field col s12`}>
                            <BackupTableIcon/>
                            <input id="icon_project" type="text" className="validate"/>
                            <label htmlFor="icon_project">Project</label>
                        </div>

                        <div className={`${styles.inputBox} input-field col s12`}>
                            <AccountTreeIcon/>
                            <input id="icon_incident" type="text" className="validate"/>
                            <label htmlFor="icon_incident">INC</label>
                        </div>

                        <div className="chip col">
                            Tag
                            <CloseIcon/>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default InfoBlock