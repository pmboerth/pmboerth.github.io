import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <Intro />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
}
