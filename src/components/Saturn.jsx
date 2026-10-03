import { useRef } from "react"
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Saturn = ({planet,elapsed,isPaused,onSelect}) => {
    const groupRef = useRef();
    useFrame((state,delta)=>{
        if(isPaused) return;
        const angle = elapsed*planet.speed;
        groupRef.current.position.x = Math.cos(angle) * planet.distance;
        groupRef.current.position.z = Math.sin(angle) * planet.distance;
        groupRef.current.children[0].rotation.y += delta * 0.5;

    })
  return (
    <group ref={groupRef}  onClick={() => onSelect("Saturn")}>
        <mesh>
            <sphereGeometry args={[planet.radius,32,32]}/>
            <meshStandardMaterial map={useTexture(planet.texture)}/>
        </mesh>
        <mesh rotation={[-Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[1.1,1.5,64]}/>
            {/* map={useTexture('/textures/saturn_rings.png')} */}
            <meshStandardMaterial map={useTexture('/textures/saturn_rings.png')}  side={2} transparent={true}/>
        </mesh>
    </group>
  )
}

export default Saturn