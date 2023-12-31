"use client"

import React,{useContext, useEffect, useState} from 'react'
import styles from './Task.module.css'
import TaskContext from '@/app/lib/TasksContext'


const Task = (props) =>{

    const [text, setText] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState('')
    const taskCtx = useContext(TaskContext)

    const togleHandler = ()=>{
        setIsEditing(!isEditing)
    }
    const changeTextHandler = (event) =>{
        setText(event.target.value)
    }
    const changeTitleHandler = (event) =>{
        setTitle(event.target.value)
    }

    useEffect(()=>{
        if(taskCtx.startSending){
            taskCtx.updateTaskData({
                title:title,
                description: text,
            })
            // console.log(taskCtx.taskData)
            setText('')
            setTitle('')
        }
    },[taskCtx.startSending])


    return(

        <div className={`${styles.Task} ${props.className}  row`}  >
            <div className={`${styles.card} ${props.className}  card blue-grey darken-1`}>
                
                    <div className={`${styles.textArea} card-content white-text`}>
                        <input placeholder='Your Title' className="card-title" onChange={changeTitleHandler} value={title}/>
                        {isEditing 
                        ?  (<div className={`${styles.cardContent} input-field col s12`}>
                                <textarea id="textarea1" className=" materialize-textarea" 
                                onChange={changeTextHandler}  onBlur={togleHandler} value={text} placeholder='Your text must be here' />
                            </div>)

                        :  (<div onClick={togleHandler} className={`${styles.cardContent} col s12`} >
                                {text? text: "Your text must be here" }
                            </div>)}
                    </div>

                    <div className={`card-action`} >
                        {props.children}
                    </div>
             
            </div>
        </div>
    )
}

export default Task