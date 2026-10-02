
const Info = () => {
    const data = {
        Sun: {
            name: "Sun",
            type: "Star",
            description:
                "The Sun is the star at the center of our Solar System. Its enormous gravity keeps the planets, moons, asteroids, and other objects in orbit. It provides the light and heat that make life on Earth possible.",
            diameter: "1.39 million km",
            distanceFromEarth: "149.6 million km",
            surfaceTemperature: "≈ 5,500°C",
            age: "≈ 4.6 billion years",
            moons: 0,
            funFact:"The Sun contains about 99.8% of the total mass of the Solar System."
        },
        Moon: {
            name: "Moon",
            type: "Natural Satellite",
            description:
                "The Moon is Earth's only natural satellite. Its gravitational pull influences Earth's tides, and its surface is covered with craters, mountains, and large plains formed by ancient volcanic activity.",
            diameter: "3,475 km",
            distanceFromEarth: "≈ 384,400 km",
            orbitalPeriod: "27.3 days",
            surfaceTemperature: "≈ 127°C to -173°C",
            moons: 0,
            funFact:"The same side of the Moon always faces Earth because its rotation period matches its orbital period."
        },
        Mercury: {
            name: "Mercury",
            type: "Terrestrial Planet",
            description:"Mercury is the smallest planet and the closest planet to the Sun. It has a rocky surface covered with craters and experiences extreme temperature changes between day and night.",
            diameter: "4,879 km",
            distanceFromSun: "57.9 million km",
            dayLength: "58.6 Earth days",
            yearLength: "88 Earth days",
            moons: 0,
            temperature: "167°C average",
            funFact:"A year on Mercury is shorter than a day on Mercury."
        },

        Venus: {
            name: "Venus",
            type: "Terrestrial Planet",
            description:"Venus is the second planet from the Sun and is similar in size to Earth. Its thick atmosphere traps heat, making it the hottest planet in the Solar System.",
            diameter: "12,104 km",
            distanceFromSun: "108.2 million km",
            dayLength: "243 Earth days",
            yearLength: "224.7 Earth days",
            moons: 0,
            temperature: "464°C average",
            funFact:"Venus rotates in the opposite direction to most planets."
        },

        Earth: {
            name: "Earth",
            type: "Terrestrial Planet",
            description:"Earth is the third planet from the Sun and the only known planet to support life. Its surface contains vast oceans, continents, and a protective atmosphere.",
            diameter: "12,742 km",
            distanceFromSun: "149.6 million km",
            dayLength: "23.9 hours",
            yearLength: "365.25 days",
            moons: 1,
            temperature: "15°C average",
            funFact:"About 71% of Earth's surface is covered by water."
        },

        Mars: {
            name: "Mars",
            type: "Terrestrial Planet",
            description:"Mars is a cold, rocky planet known for its reddish appearance. Its surface contains huge volcanoes, deep valleys, and evidence of ancient water activity.",
            diameter: "6,779 km",
            distanceFromSun: "227.9 million km",
            dayLength: "24.6 hours",
            yearLength: "687 Earth days",
            moons: 2,
            temperature: "-63°C average",
            funFact:"Mars is home to Olympus Mons, the largest known volcano in the Solar System."
        },

        Jupiter: {
            name: "Jupiter",
            type: "Gas Giant",
            description:"Jupiter is the largest planet in the Solar System. It is a massive gas giant made mostly of hydrogen and helium and is famous for its enormous storms.",
            diameter: "139,820 km",
            distanceFromSun: "778.5 million km",
            dayLength: "9.9 hours",
            yearLength: "11.86 Earth years",
            moons: 95,
            temperature: "-110°C average",
            funFact:"Jupiter's Great Red Spot is a gigantic storm that has lasted for centuries."
        },

        Saturn: {
            name: "Saturn",
            type: "Gas Giant",
            description:"Saturn is the sixth planet from the Sun and is famous for its spectacular ring system. Like Jupiter, it is primarily composed of hydrogen and helium.",
            diameter: "116,460 km",
            distanceFromSun: "1.43 billion km",
            dayLength: "10.7 hours",
            yearLength: "29.45 Earth years",
            moons: 274,
            temperature: "-140°C average",
            funFact:"Saturn's rings are made mostly of ice and rocky particles."
        },

        Uranus: {
            name: "Uranus",
            type: "Ice Giant",
            description:"Uranus is a pale blue ice giant with a unique sideways rotation. Its unusual orientation gives it extreme seasonal changes as it travels around the Sun.",
            diameter: "50,724 km",
            distanceFromSun: "2.87 billion km",
            dayLength: "17.2 hours",
            yearLength: "84 Earth years",
            moons: 28,
            temperature: "-195°C average",
            funFact:"Uranus rotates almost completely on its side."
        },

        Neptune: {
            name: "Neptune",
            type: "Ice Giant",
            description:"Neptune is the farthest known planet from the Sun. It is a cold, blue ice giant with some of the fastest winds in the Solar System.",
            diameter: "49,244 km",
            distanceFromSun: "4.5 billion km",
            dayLength: "16.1 hours",
            yearLength: "164.8 Earth years",
            moons: 16,
            temperature: "-200°C average",
            funFact:"Neptune has some of the fastest winds measured on any planet."
        }
    };

  return (
    <div>{data}</div>
  )
}

export default Info