'use client'

import React from 'react'
import styles from './Workspace.module.css'
import Task from '../Task/Task'
import InfoBlock from '@/app/components/InfoBlock/InfoBlock'
import TaskTime from '../TaskTime/TaskTime'
// import WsSearching from './WsSearching/WsSearching'
// import TimeLine from './TimeLine/TimeLine'

const datas = [
    {
        id: "item-1",
        tasks: [
          {
            id: "kdm42f2e",
            title: "Main Task",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            timeStart: "10:30",
            timeEnd: "11:45",
            duration: 75,
            type: "main"
          },
          {
            id: "hjdm45e2",
            title: "Parallel Task",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            timeStart: "10:50",
            timeEnd: "11:30",
            duration: 40,
            type: "parallel"
          }
        ]
      },
      {
        id: "item-2",
        tasks: [
          {
            id: "n6umd33f",
            title: "Main Task",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            timeStart: "09:15",
            timeEnd: "10:00",
            duration: 45,
            type: "main"
          }
        ]
      },
      {
        id: "item-3",
        tasks: [
          {
            id: "jm2lm23k",
            title: "Main Task",
            description: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
            timeStart: "14:00",
            timeEnd: "15:30",
            duration: 90,
            type: "main"
          },
          {
            id: "kl23dm3f",
            title: "Parallel Task",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            timeStart: "14:10",
            timeEnd: "14:40",
            duration: 30,
            type: "parallel"
          },
          {
            id: "5tumj2df",
            title: "Parallel Task",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            timeStart: "14:50",
            timeEnd: "15:20",
            duration: 30,
            type: "parallel"
          }
        ]
    }
]


const Workspace = (props) =>{

    return(
        <div className={`${styles.Workspace} ${props.className} row `}>
            <div className={` col s12 `} >
                <Task >
                    <InfoBlock/>
                    <TaskTime place=''/>
                </Task >
            </div>
            <div className={`col s12 `}>
                <p>Favorits</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ratione explicabo vitae. Suscipit mollitia odit amet assumenda blanditiis, ad aliquam quae corrupti enim beatae incidunt veritatis nostrum accusamus ut animi.</p>
            </div>
            <div className={`col s12 `}>
                {/* <WsSearching/> */}
            </div>
            <div className={`col s12 `}>
                {/* <TimeLine datas={datas}/> */}
            </div>
        </div>
    )
}

export default Workspace
