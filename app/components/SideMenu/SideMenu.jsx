'use client'

import React from "react";
import styles from './SideMenu.module.css'


const SideMenu = (props) =>{



    return(
        <div className={`${props.className} ${styles.menuBox1 } row `}>
            <div className={`${styles.menuStart}col s12`}>
                <ul className={`${styles.menuStart}`}>
                    <li><a href="" title="My Profile" className="btn-floating btn-medium waves-effect waves-light"><i
                                className="large material-icons">account_box</i></a>
                    </li>
                    <li><a href="" title="Notification" className="btn-floating btn-medium waves-effect waves-light"><i
                                className="large material-icons">more</i></a>
                    </li>
                </ul>
            </div>
            <div className={`${styles.menuEnd} col s12 `}>
                <ul className={`${styles.menuEnd}`} >
                    <li><a href="" title="Settings" className="btn-floating btn-medium waves-effect waves-light"><i
                                className="large material-icons">build</i></a>
                    </li>
                    <li><a href="" title="FAQ" className="btn-floating btn-medium waves-effect waves-light"><i
                                className="large material-icons">question_answer</i></a>
                    </li>
                    <li><a href="" title="on/off" className="btn-floating btn-medium waves-effect waves-light"><i
                                className="large material-icons">settings_power</i></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default SideMenu