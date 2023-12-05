'use client'

import React from "react";
import styles from './SideMenu.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const SideMenu = (props) =>{



    return(
        <div className={`${props.className} ${styles.menuBox1 } row `}>
            <div className={`${styles.menuStart}col s12`}>
                <ul className={`${styles.menuStart}`}>
                    <li><a href="" title="My Profile" className="btn-floating btn-medium waves-effect waves-light"><AccountCircleIcon/></a>
                    </li>
                    <li><a href="" title="Notification" className="btn-floating btn-medium waves-effect waves-light"><NotificationsIcon/></a>
                    </li>
                </ul>
            </div>
            <div className={`${styles.menuEnd} col s12 `}>
                <ul className={`${styles.menuEnd}`} >
                    <li><a href="" title="Settings" className="btn-floating btn-medium waves-effect waves-light"><SettingsIcon/></a>
                    </li>
                    <li><a href="" title="FAQ" className="btn-floating btn-medium waves-effect waves-light"><ChatBubbleIcon/></a>
                    </li>
                    <li><a href="" title="on/off" className="btn-floating btn-medium waves-effect waves-light"><PowerSettingsNewIcon/></a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default SideMenu