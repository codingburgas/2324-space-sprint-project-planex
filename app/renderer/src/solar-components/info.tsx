import { Tabs } from "./TabsDemo";

export function TabsDemo() {
    const tabs = [
        {
            title: "Sun",
            value: "Sun",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Sun</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/sun.png"
                            alt={`Image of the Sun`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className="text-2xl">The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field. The Sun provides the energy that sustains life on Earth and is the primary source of light and heat for our planet.</p>
                    </div>
                </div>
            )
        },
        {

            title: "Mercury",
            value: "Mercury",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Mercury</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/360.png"
                            alt={`Image of mercury`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Mercury is the smallest planet in the Solar System and the closest to the Sun. It has a barren, rocky surface, and its thin atmosphere consists mainly of oxygen, sodium, hydrogen, helium, and potassium.</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Venus",
            value: "Venus",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Venus</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/480.png"
                            alt={`Image of Venus`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Venus is the second planet from the Sun and is sometimes referred to as Earth's sister planet because of their similar size and composition. It has a thick atmosphere primarily composed of carbon dioxide, which traps heat, making it the hottest planet in the Solar System.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Earth",
            value: "Earth",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Earth</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/earth.png"
                            alt={`Image of Earth`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has a diverse ecosystem that supports a wide variety of organisms. Earth's atmosphere contains nitrogen, oxygen, carbon dioxide, and traces of other gases.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Mars",
            value: "Mars",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Mars</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/mars.png"
                            alt={`Image of Mars`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Mars is the fourth planet from the Sun and is often called the Red Planet due to its reddish appearance caused by iron oxide on its surface. It has polar ice caps and evidence of past water flows, making it a target for future exploration for signs of past life.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Jupiter",
            value: "Jupiter",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Jupiter</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/jupiter.png"
                            alt={`Image of Jupiter`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant composed mostly of hydrogen and helium. Jupiter has a prominent system of rings and numerous moons, including the four largest moons known as the Galilean moons.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Saturn",
            value: "Saturn",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Saturn</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/saturn.png"
                            alt={`Image of Saturn`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is known for its distinctive ring system, which consists mainly of ice particles and rocky debris. Saturn has a complex atmosphere and numerous moons.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Uranus",
            value: "Uranus",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Uranus</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/saturn.png"
                            alt={`Image of Uranus`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Uranus is the seventh planet from the Sun and is notable for its sideways rotation, with its axis of rotation tilted almost perpendicular to its orbit around the Sun. It is an ice giant composed mainly of hydrogen, helium, and methane. Uranus has a faint ring system and numerous moons.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Neptune",
            value: "Neptune",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Neptune</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/latest.png"
                            alt={`Image of Neptune`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className=" text-2xl">Neptune is the eighth and farthest-known Solar planet from the Sun. It is a blue gas giant with a stormy atmosphere and high winds. Neptune has a system of faint rings and a large moon called Triton, which orbits in a retrograde direction.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Pluto",
            value: "Pluto",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Pluto</p>
                    <div className="relative overflow-hidden rounded-xl flex">
                        <img
                            src="../../public/pluto.png"
                            alt={`Image of Pluto`}
                            className="object-cover h-[60%] md:h-[90%] w-1/2"
                        />
                        <p className="text-2xl">Pluto, once considered the ninth planet of the Solar System, was reclassified as a dwarf planet in 2006. It is located in the Kuiper Belt, a region of the Solar System beyond the orbit of Neptune. Pluto has a rocky core and is covered in a layer of ice.</p>
                    </div>
                </div>
            )
        }
    ];


    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}
