import React,{useState, useEffect, } from "react";
import styles from './timeLine.module.css'
// import TimeLineItem from "../../TimeLineItem/TimeLineItem.jsx";

const TimeLine = (props) =>{

    // let propDatas = props.datas

    // const [timeLineItems, setTimeLineItems] = useState(propDatas)



    return(
        <div className={`${styles.timeLine} outline`}>

            {/* {timeLineItems.map(item=>(
                <div className={`${styles.cont}`}>
                    <div className={`${styles.sideBar}`} > </div>
                    <TimeLineItem key={item.id} tasks={item.tasks}/>
                </div>
            ))} */}

        </div>
    )
}

export default TimeLine