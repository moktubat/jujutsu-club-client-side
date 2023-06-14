import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      title: "Jiu jitsu",
      subtitle: "Photo by Minh Pham",
      image:
        "https://img.freepik.com/free-photo/girl-practicing-taekwondo-with-black-belt-isolated-gradient-wall_155003-41641.jpg?w=740&t=st=1686585823~exp=1686586423~hmac=307db5ae2ec03cfc1c4fcbb378b2e048e9921fcdbc54c89cd62e5d82d8458d1b",
    },
    {
      id: 2,
      title: "Taekwondo",
      subtitle: "Photo by Magicle",
      image:
        "https://rifkinprokarate.com/wp-content/uploads/sites/95/2019/06/exit-pop-banner.jpg",
    },
    {
      id: 3,
      title: "Karate",
      subtitle: "Photo by Martin Sanchez",
      image:
        "https://www.thestudiodirector.com/wp-content/uploads/advantages-of-martial-arts.png.webp",
    },
    {
      id: 4,
      title: "Judo",
      subtitle: "Photo by Lorenzo Herrera",
      image:
        "https://img.freepik.com/premium-photo/confident-european-teenage-boy-puts-white-kimono-ties-belt-around-his-waist-ready-combat-sports-aikido-fighter-oriental-martial-arts_328764-9939.jpg?w=740",
    },
  ];

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 text-center gap-8 sm:mb-8 md:mb-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-5xl py-8 text-center">
              Photo Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {items.map((item) => (
              <motion.a
                key={item.id}
                layoutId={item.id}
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                onClick={() => setSelectedId(item.id)}
              >
                <img
                  src={item.image} // Replace with your image URL
                  loading="lazy"
                  alt={item.subtitle}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  {item.title}
                </span>
              </motion.a>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{items[selectedId - 1].subtitle}</motion.h5>
                <motion.h2>{items[selectedId - 1].title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
