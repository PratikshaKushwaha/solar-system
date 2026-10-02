import { Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const App = () => {
  return (
    <Canvas className="bg-black">
      <Stars radius={0.2} count={10000} depth={50}/>
    </Canvas>
  )
}

export default App
