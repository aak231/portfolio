"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"

const Intro = () => {
  return (
    <section className="mb-28 max-2-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/myself.jpeg"
              alt="Ahad"
              width="192"
              height="192"
              quality="90"
              priority={true}
              className="h-48 w-48  rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            ></Image>
          </motion.div>
        </div>
      </div>
      <br></br>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium text-green-800 !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ahad.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">a year</span> of professional experience. I
        enjoy building
        <span className="italic"> websites & apps</span>. I am currently looking
        for positions in{" "}
        <span className="italic underline">
          Software Development, Business Analytics or Product Management
        </span>
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <Link href="#contact" className="bg-green-800 text-white px-7 py-3 flex items-center gap-2 rounded-full" >
          Contact me here <BsArrowRight/> 
        </Link>
        <a className="bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full">
          Download CV <HiDownload/> 
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full">
          <BsLinkedin/>
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full">
          <BsGithub/>
        </a>
      </div>
    </section>
  ); 
};

export default Intro;
