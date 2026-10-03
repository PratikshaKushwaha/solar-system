import { Canvas } from "@react-three/fiber"
import Sun from "./components/Sun.jsx";
import Planet from "./components/Planet.jsx";
import {Stars, OrbitControls } from "@react-three/drei";
import Moon from "./components/Moon.jsx";
import { useState } from "react";
import InfoPanel from "./components/InfoPanel.jsx";
import AnimationController from "./components/AnimationController.jsx";


const App = () => {
  const [elapsed, setElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <div className="bg-black h-screen">
      <button 
        onClick={()=>setIsPaused((p)=>!p)}
        className={`px-2 py-1 ${isPaused? "bg-red-600" : "bg-green-400"} text-white font-bold cursor-pointer absolute top-5 right-5 rounded-sm border-none z-50`}>
        {!isPaused ? "Pause " : "Resume"}
      </button>
      <Canvas camera={{position:[0,20,30],fov:45}}>
        <AnimationController setElapsed={setElapsed} isPaused={isPaused}/>
        <ambientLight intensity={1.1}/>
        <directionalLight position={[10,5,5]} intensity={4}/>
        <Sun onSelect={setSelected} isPaused={isPaused}/>
        <Moon onSelect={setSelected} isPaused={isPaused} elapsed={elapsed} />
        <Planet onSelect={setSelected} isPaused={isPaused} elapsed={elapsed}/>
        <Stars radius={100} count={5000} factor={4} saturation={0} fade />
        <OrbitControls 
          enablePan={true} enableRotate={true} enableZoom={true} 
          panSpeed={2.5} rotateSpeed={1.0} zoomSpeed={1.0} minDistance={2} maxDistance={1000}
          autoRotate={!isPaused} autoRotateSpeed={0.4}
        />
      </Canvas>
      {selected && (
        <InfoPanel planet={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

export default App
