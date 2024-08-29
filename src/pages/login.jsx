import { Link } from "react-router-dom"
import Landing from "./landing"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate=useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setRuser] = useState(true)

    const users = props.users
    

    function handleUInput(evnt)
    {
        setEusername(evnt.target.value)
    }
    function handlePInput(evnt)
    {
        setEpassword(evnt.target.value)
    }

    function checkusers()
    {
        var userfound = false
        
        users.forEach(function(item)
        {
            if (item.username === eusername && item.password === epassword)
            {
                console.log("login successful")
                userfound=true
                navigate("/landing", {state:{user:eusername}})
            }
    })
    if(userfound===false)
    {
        console.log("login failed")
        setRuser(false)
    }

    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
           {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-400">Please Signup before you login!!</p>}
            


        <div className="flex flex-col m-2 gap-2">
            <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username" onChange={handleUInput}/>

            <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password" onChange={handlePInput}/>
        

            <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkusers}>
            Login
            </button>

            <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>

        </div>
    </div>
</div>
    )
}
export default Login