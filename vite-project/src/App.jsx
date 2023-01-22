import { useRef } from 'react'
import { useState } from 'react'
import './App.css'
import FormInput from './components/FormInput'


function App() {
 const [values, setValues] = useState({
  username:"",
  email:"",
  birthday:"",
  password:"",
  confirmPassword:"",
 })

 const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    label:"password"
  },
  {
    id:2,
    name:"email",
    type:"text",
    placeholder:"Email",
    label:"Email"
  },
  {
    id:3,
    name:"birthday",
    type:"text",
    placeholder:"Birthday",
    label:"Birthday"
  },
  {
    id:4,
    name:"password",
    type:"text",
    placeholder:"Password",
    label:"Password"
  },
  {
    id:4,
    name:"confrimPassword",
    type:"text",
    placeholder:"Confrim Password",
    label:"Confrim Password"
  }
 ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  return (
    <div className="app">
     <form onSubmit={handleSubmit}>
       <FormInput name="username" placeholder="Username"/>
       <FormInput name="email" placeholder="Email"/>
       <FormInput name="fullname" placeholder="Full Name"/>
       <FormInput name="password" placeholder="Password"/>
       <button>Submit</button>
     </form>
     
    </div>
  )
}

export default App
