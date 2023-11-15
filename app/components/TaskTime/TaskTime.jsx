'use client'

import React,{useState,useEffect, useContext} from 'react'
import styles from './TaskTime.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import Time from '../Time/Time';
import TaskContext from '@/app/lib/TasksContext';

const TaskTime = (props) =>{

    const[togleButtons, setTogleButtons] = useState()
    const taskCtx = useContext(TaskContext)

    useEffect(()=>{
        if(props.place === 'card'){
            setTogleButtons(true)
        }else{setTogleButtons(false)}
    },[props.place])

    const curentTimeHandler = ()=>{
        taskCtx.updateStartSending(true)
        
    }

    return(
        <div className={`${styles.TaskTime} `} >
            <Time  />
            <div className={`${styles.btns}`}>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red" disabled={taskCtx.startSending} onClick={curentTimeHandler}><PlayArrowIcon/></a>

                {togleButtons?
                <>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red hidden" disabled={!taskCtx.startSending}><PauseIcon/></a>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red" disabled={!taskCtx.startSending}><StopIcon/></a>
                </>:''}

            </div>
        </div>
    )
}

export default TaskTime