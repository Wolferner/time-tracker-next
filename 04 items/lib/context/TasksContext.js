import React from "react";

const TaskContext = React.createContext({
    taskData:{},
    updateTaskData:() =>{ },
    startSending:false,
    updateStartSending:()=>{},
})

export default TaskContext