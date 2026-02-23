import React, { useState } from "react";
import Navbar from "../components/navbar";
import image from "../assets/bg.jpg";
import gymPic1 from "../assets/gym-pics.jpg";
import gymPic2 from "../assets/gym-pics-2.jpg";
import board from "../assets/location.webp";
import { Location01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";

const Home = () => {
  const [activeId, setActiveId] = useState(1);

  const data = [
    {
      id: 1,
      title: "Strength",
      description: "Build power and endurance with guided workouts.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
    },
    {
      id: 2,
      title: "Cardio",
      description: "High-energy cardio sessions for fat burn.",
      image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=1200",
    },
    {
      id: 3,
      title: "Yoga",
      description: "Improve flexibility and mental clarity.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
    },
    {
      id: 4,
      title: "CrossFit",
      description: "Full-body functional fitness training.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200",
    },
  ];

  const leftVariant = {
    hidden: { x: -120, opacity: 0, y: 20 },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 }
    }
  };

  const rightVariant = {
    hidden: { x: 120, opacity: 0, y: 20 },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 }
    }
  };

  return (
    <section className="bg-black overflow-hidden">
      <header className="pt-4">
        <Navbar />

        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 pt-8 lg:pt-16 max-w-7xl mx-auto px-6">

          {/* LEFT SIDE */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-white">
              Unleash Your Inner Athlete
            </h2>

            <p className="mt-5 text-gray-300 text-sm md:text-base">
              We are dedicated to helping you transform your body and mind
              through the power of fitness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex">
                <button className="bg-green-500 px-4 py-2 rounded-tl-2xl w-full sm:w-auto">
                  JOIN NOW
                </button>
                <button className="bg-green-700 px-4 py-2 w-full sm:w-auto">
                  $49/Month
                </button>
              </div>

              <button className="border border-white text-white px-4 py-2 rounded transition-all duration-300 hover:bg-white hover:text-black">
                Join Free Trial
              </button>
            </div>

            <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl mt-16">
              Transform Your Fitness Journey
            </h1>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-end relative"
          >
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl">
              <img
                src={image}
                alt="bg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-40 rounded-xl px-3 py-2.5 backdrop-blur-xl border border-green-400 relative -top-10 lg:-top-28 left-0 lg:left-5 text-white">
              <p className="font-semibold text-xl">500+</p>
              <p>happy members</p>
            </div>

            <p className="text-gray-400 text-center lg:text-left text-sm max-w-md mt-2">
              Offers customised workout programs to help clients achieve
              their fitness goals such as weight loss, strength and conditioning.
            </p>
          </motion.div>

        </div>
      </header>

      {/* EXPANDABLE CARDS */}
      <main className="mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {data.map((item) => {
              const isActive = item.id === activeId;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500
                  ${isActive ? "lg:flex-[4]" : "lg:flex-[1]"} flex-1 h-56 lg:h-80`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  <div className="relative h-full flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg lg:text-xl font-semibold">
                      {item.title}
                    </h3>

                    {isActive && (
                      <p className="text-sm mt-2 text-gray-200">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GYM SECTION */}
        <div className="max-w-7xl mx-auto px-6 mt-20 flex flex-col lg:flex-row gap-12">
          <div className="text-white lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl">Comfortable Gym</h1>

            <p className="text-gray-400 mt-5">
              Our facilities provide the perfect setting to help you reach your fitness goals.
            </p>

            <div className="mt-10 flex gap-4 overflow-hidden">
              <img
                src={gymPic1}
                alt=""
                className="hidden lg:block w-64 h-60 object-cover rounded-xl"
              />
              <img
                src={gymPic2}
                alt=""
                className="w-full sm:w-96 h-60 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="bg-slate-950 text-white lg:w-1/2 relative">
            <img src={board} alt="" className="rounded-tr-[150px]" />

            <div className="bg-green-500 w-10 py-3 px-2 rounded-xl absolute right-6 top-6">
              <HugeiconsIcon icon={Location01FreeIcons} className="text-black" />
            </div>

            <div className="flex justify-between px-6 py-4">
              <h2 className="text-2xl lg:text-3xl">Location</h2>
              <p className="text-sm text-gray-400 text-right">
                1234 FITNESS AVENUE, LONDON CA0001
              </p>
            </div>
          </div>
        </div>

        {/* MEMBERSHIP CTA */}
        <section className="relative w-full min-h-[380px] lg:h-[420px] overflow-hidden mt-20">
          <img
            src={image}
            alt="gym"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

          <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                Let’s Join
                <br />
                <span className="font-bold">Membership</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="bg-green-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-green-300 transition">
                  JOIN NOW
                </button>

                <button className="border border-white/30 px-6 py-3 rounded-md hover:border-white hover:bg-white hover:text-black transition">
                  JOIN FREE TRIAL
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Home;