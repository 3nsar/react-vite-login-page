import { useEffect, useRef } from 'react'
import { useState } from 'react'
import './App.css' 
import FormInput from './components/FormInput'
import  * as THREE from "three"

function App() {

  useEffect(()=>{
    const scene = new THREE.Scene();

  },[])

    return(
      <div>
        <canvas id='myThreeJsCanvas'/>
      </div>
    )
}

export default App
