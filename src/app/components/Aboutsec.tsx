"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

export default function Aboutsec() {
  return (
    <div>
      <h3 className='text-center uppercase tracking-[20px] text-gray-500 text-2xl mt-8 mb-8 '>
        Experience
      </h3> 
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1}}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-8"
      >
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory py-2">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  );
}
