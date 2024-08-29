import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Card from "./components/Card"
import TodoContainer from "./components/TodoContainer"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Landing from "./pages/landing"
import Login from "./pages/login"
import Signup from "./pages/signup"
import { useState } from "react"

const root = ReactDOM.createRoot(document.getElementById("root"))


function App()
{

  const [users, setusers] = useState([
    {
        username:"sar",
        password:"123"
    }
  ]) 

  return(
    <div>
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
     <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
     <Route path="/landing" element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
}
root.render(<App/>)

/*function App() 
{
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header/>
      <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
        <Card bgcolor={"#FD6663"} title={"December 20"} subtitle={"14:23:09"}/>
        <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}/>
      </div>
    <TodoContainer/>
      </div>
      </div>
  );
}*/

export default App;
