import { useTexture } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import { useRef } from "react";

const Sun = ({isPaused, onSelect}) => {
    const sunInfo ={
        radius: 1.4,
        speed: 0.05,
        texture: "/textures/sun.jpg"
    };
    const meshRef = useRef();
    useFrame((state,delta)=>{
      if(isPaused) return
      meshRef.current.rotation.y += sunInfo.speed*delta;
    });
  return (
    <group>
      <pointLight intensity={400} distance={100} decay={2} />
      <mesh ref={meshRef} onClick={()=>onSelect("Sun")}>
        <sphereGeometry args={[sunInfo.radius,64,64]}/>
        <meshBasicMaterial map={useTexture(sunInfo.texture)}/>
      </mesh>
    </group>
  )
}

export default Sun