import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";

const PlanetItem =({planet,elapsed,isPaused,onSelect})=>{
    const meshRef = useRef();
    useFrame((state,delta)=>{
        if (isPaused) return;

        meshRef.current.rotation.y += delta*0.8;

        const angle = elapsed*planet.speed;
        meshRef.current.position.x = Math.cos(angle)*planet.distance;
        meshRef.current.position.z = Math.sin(angle)*planet.distance;
    })
    return(
        <mesh onClick={()=>onSelect(planet.name)} ref={meshRef}>
            <sphereGeometry args={[planet.radius,32,32]}/>
            <meshStandardMaterial map={useTexture(planet.texture)}/>
        </mesh>
    );
}

export default PlanetItem
