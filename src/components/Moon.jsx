import { useTexture } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import { useRef } from "react";

const Moon = ({elapsed,isPaused,onSelect,}) => {
    const moonInfo = {
      radius: 0.2,
      distance:0.9,
      speed:2,
      texture: "/textures/moon.jpg"
    }
    const earthInfo ={
      distance:6,
      speed : 1
    }
    const meshRef = useRef();
    useFrame((state,delta)=>{
      if (isPaused) return;
      meshRef.current.rotation.y += delta * 0.8;
      const earthAngle = elapsed*earthInfo.speed;
      const earthX = Math.cos(earthAngle)*earthInfo.distance;
      const earthZ = Math.sin(earthAngle)*earthInfo.distance;

      const moonAngle = elapsed *moonInfo.speed;
      const moonX = Math.cos(moonAngle)*moonInfo.distance;
      const moonZ = Math.sin(moonAngle)*moonInfo.distance;
      meshRef.current.position.x = earthX + moonX;
      meshRef.current.position.z = earthZ + moonZ;
    });
  return (
    <mesh onClick={()=>onSelect('Moon')} ref={meshRef} position={[moonInfo.distance,0,0]}>
        <sphereGeometry args={[moonInfo.radius,42,42]}/>
        <meshStandardMaterial map={useTexture(moonInfo.texture)}/>
    </mesh>
  )
}

export default Moon;