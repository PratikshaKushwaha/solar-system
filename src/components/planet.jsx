const planet = () => {
    const Moon = {
        radius: 0.27,
        distance: 1.8,
        rotationSpeed: 0.005,
        orbitSpeed: 0.03,
        texture: "/textures/moon.jpg"
    };
    const Sun ={
        radius: 5,
        rotationSpeed: 0.002,
        texture: "/textures/sun.jpg"
    };
    const planetConfig = {
        Mercury: {
        radius: 0.38,
        distance: 6,
        rotationSpeed: 0.004,
        orbitSpeed: 0.008,
        texture: "./textures/mercury.jpg",
        },

        Venus: {
        radius: 0.95,
        distance: 9,
        rotationSpeed: -0.002,
        orbitSpeed: 0.006,
        texture: "./textures/venus.jpg",
        },

        Earth: {
        radius: 1,
        distance: 12,
        rotationSpeed: 0.01,
        orbitSpeed: 0.005,
        texture: "./textures/earth.jpg",
        },

        Mars: {
        radius: 0.53,
        distance: 15,
        rotationSpeed: 0.008,
        orbitSpeed: 0.004,
        texture: "/textures/mars.jpg",
        },

        Jupiter: {
        radius: 2.5,
        distance: 21,
        rotationSpeed: 0.02,
        orbitSpeed: 0.002,
        texture: "/textures/jupiter.jpg",
        },

        Saturn: {
        radius: 2.1,
        distance: 27,
        rotationSpeed: 0.018,
        orbitSpeed: 0.0015,
        texture: "/textures/saturn.jpg",
        },

        Uranus: {
        radius: 1.5,
        distance: 33,
        rotationSpeed: 0.012,
        orbitSpeed: 0.001,
        texture: "/textures/uranus.jpg",
        },

        Neptune: {
        radius: 1.45,
        distance: 39,
        rotationSpeed: 0.011,
        orbitSpeed: 0.0008,
        texture: "/textures/neptune.jpg",
        },
    };
  return <div>{planetConfig}</div>;
};

export default planet;
