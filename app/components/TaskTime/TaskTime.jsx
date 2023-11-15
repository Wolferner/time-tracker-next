'use client'

import React,{useState,useEffect} from 'react'
import styles from './TaskTime.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';

const TaskTime = (props) =>{

    const[inputState, setInputState] = useState()
    const[togleButtons, setTogleButtons] = useState()

    useEffect(()=>{
        if(props.place === 'card'){
            setTogleButtons(true)
        }else{setTogleButtons(false)}
    },[props.place])

    return(
        <div className={`${styles.TaskTime} `} >




            <input  className={`${styles.timer}`} type='text' disabled={true} placeholder='Start - End' value={`${props.timeStart}-${props.timeEnd}`}/>
            <div className={`${styles.btns}`}>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><PlayArrowIcon/></a>
                {togleButtons?
                <>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red hidden"><PauseIcon/></a>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><StopIcon/></a>
                </>:''}
            </div>
        </div>
    )
}

export default TaskTime