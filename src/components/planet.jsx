import Saturn from "./Saturn";
import PlanetItem from "./PlanetItem";
import Orbit from "./Orbit";

const planet = ({elapsed,isPaused,onSelect,}) => {
    const planets = [
        {
            name: "Mercury",        
            radius: 0.25,
            distance: 3,
            speed:2.0,
            texture: "/textures/mercury.jpg",
        },

        {
            name: "Venus",
            radius: 0.45,
            distance: 4.5,
            speed:1.6,
            texture: "/textures/venus.jpg",
        },

        {
            name: "Earth",  
            radius: 0.5,
            distance: 6, 
            speed: 1.0,
            texture: "/textures/earth.jpg",
        },

        {
            name: "Mars",
            radius: 0.35,
            distance: 8, 
            speed: 0.8,
            texture: "/textures/mars.jpg",
        },

        {
            name: "Jupiter",
            radius:1.2,
            distance: 12, 
            speed: 0.4,
            texture: "/textures/jupiter.jpg",
        },

        {
            name: "Saturn",
            radius: 1.0,
            distance: 16,
            speed:0.3,
            texture: "/textures/saturn.jpg",
        },

        {
            name: "Uranus",
            radius:0.7,
            distance: 20, 
            speed: 0.2,
            texture: "/textures/uranus.jpg",
        },

        {
            name: "Neptune",
            radius: 0.8,
            distance: 24, 
            speed: 0.15,
            texture: "/textures/neptune.jpg",
        },
    ];
  return (
    <>
    {planets.map((planet)=>{
        return(
            <group key={planet.name}>
                <Orbit distance={planet.distance}/>
                {planet.name === 'Saturn'? 
                (<Saturn key={planet.name} elapsed={elapsed} isPaused={isPaused} onSelect={onSelect} planet={planet}/>):
                (<PlanetItem key={planet.name} planet={planet} elapsed={elapsed} isPaused={isPaused} onSelect={onSelect}/>)
                }
            </group>
        )
    })}
    </>
  )
};

export default planet;
