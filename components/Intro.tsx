"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
      <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
        <h1 className="text-4xl font-bold">Hi! I&apos;m Peter</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">
          I recently graduated from Northeastern University with a B.S. in Computer Science and Civil Engineering 
          and currently work as a Software Engineer at Tyler Technologies. I enjoy connecting with professionals 
          in the tech industry to exchange ideas, learn from others, and explore new opportunities.
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
