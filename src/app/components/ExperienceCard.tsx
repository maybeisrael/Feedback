"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-w-[500px] md:max-w-[600px] xl:max-w-[900px] snap-center bg-gray-900 p-10 hover:opacity-50 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/netflix.png"
          alt="card"
          width={200}
          height={200}
          className="rounded-full object-center object-cover"
        />
      </ motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">FORZA</h4>
        <p className="font-bold text-2xl mt-1">Forza</p>
        <div className="flex space-x-2 my-2">
          <Image width={20} height={20} src="/images/html2.png" alt="" />
          <Image width={20} height={20} src="/images/html2.png" alt="" />
          <Image width={20} height={20} src="/images/html2.png" alt="" />
          <Image width={20} height={20} src="/images/html2.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg mb-8">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
}
