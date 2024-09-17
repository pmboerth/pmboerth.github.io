"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
      <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
        <h1 className="text-4xl font-bold">Hi! I'm Peter</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">
          I am a Computer Science student at Northeastern University seeking
          opportunities to further develop my skills as a software engineer. I
          would love to connect to discuss potential projects or collaborations.
        </p>
      </div>
      <div className="md:w-3/12 sm:w-full">
        <Image
          src="/images/headshot.png"
          alt="Peter"
          width={100}
          height={100}
          className="rounded-full border dark:border-gray-800 border-gray-100 h-36 w-36"
        />
      </div>
    </div>
  );
};

export default Intro;
