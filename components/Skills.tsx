const skillsData: string[] = [
  "Java",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
  "Python",
  "NumPy",
  "Pandas",
  "MySQL",
  "Docker",
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-1">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex border border-gray-200 rounded-md px-2 py-1 text-sm p-4 bg-gray-500 text-white">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
