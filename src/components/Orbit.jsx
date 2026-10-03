

const Orbit = ({distance}) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance-0.01,distance+0.01,128]}/>
        <meshBasicMaterial opacity={1} side={2} transparent/>
    </mesh>
  )
}

export default Orbit
