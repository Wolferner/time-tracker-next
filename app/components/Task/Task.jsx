"use client"

import React,{useState} from 'react'
import styles from './Task.module.css'


const Task = (props) =>{

    const [text, setText] = useState(props.description)
const [isEditing, setIsEditing] = useState(false)

const togleHandler = ()=>{
    setIsEditing(!isEditing)
}
const changeTextHandler = (event) =>{
    setText(event.target.value)
}

    return(

        <div className={`${styles.Task} ${props.placedin === 'header'? styles.taskHeader:''} row`}  >
            <div className={`${styles.card} col s12 m6 card blue-grey darken-1`}>
                
                    <div className={`${styles.textArea} card-content white-text`}>
                        <input placeholder='Your Title' className="card-title">{props.title}</input>

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