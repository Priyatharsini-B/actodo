import { useState } from "react"

function Addtodoform(props)
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity, setNewActivity] = useState("")

    function handlechange(evnt)
    {
        setNewActivity(evnt.target.value)
    }
    function addActivity()
    {
        setActivityArr([...activityArr, {id:activityArr.length+1, activity:newActivity}])
    }
    return(
        <div className="flex flex-col gap-3">
                <h1 className="font-medium text-2xl">Manage Activities</h1>

                <div>
                <input value={newActivity} onChange={handlechange} className="bg-transparent border border-black p-1" placeholder="Next Activity?" type="text"/>
                <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
                </div>   
        </div>
    )
}

export default Addtodoform
