import { useState } from "react"
import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"


function TodoContainer()
{

    const [activityArr, setActivityArr] = useState([
        {
            id:1,
            activity:"Wakeup early"
        },
        {
            id:2,
            activity:"go to walk"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])

    return(
        <div>

        <div className="flex flex-wrap gap-5">
            <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>
            <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>

        </div>
        
    )
}

export default TodoContainer

