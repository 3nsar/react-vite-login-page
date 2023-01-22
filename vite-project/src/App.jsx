import { useRef } from 'react'
import { useState } from 'react'
import './App.css'
import FormInput from './components/FormInput'


function App() {
 // const [username, setUsername] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(data)
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
