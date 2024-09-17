interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "July 2023",
    endDate: "December 2023",
    companyName: "Demand Management Institute",
    jobTitle: "Energy Engineer",
    description: [
      "Accurately quantified and validated energy savings analyses in HVAC, Refrigeration, and Industrial Processes sectors by employing bin models, 8,760 models, and eQuest models.",
      "Proficiently conducted energy audits and data collection, analyzing energy consumption patterns and building systems to create accurate and comprehensive energy savings analysis reports.",
      "Identified opportunities for increased energy efficiency and energy savings for local utility companies through comprehensive energy audits and on-site metering.",
      "Verified energy efficient equipment installation and operation through post-inspections and commissioning.",
    ],
  },
  {
    startDate: "July 2022",
    endDate: "December 2022",
    companyName: "DC Beane and Associates Construction Company",
    jobTitle: "Project Manager",
    description: [
      "Helped manage four muti-million dollar construction projects in the life science industry including a biophysics laboratory, manufacturing facility, R&D facility, and chemistry laboratory.",
      "Led cross-functional teams on all projects ensuring excellent communication with architects, engineers, subcontractors, and clients developing strong leadership and managerial skills.",
      "Successfully managed project schedules and budgets through weekly look ahead schedules and indicated outcome reports, delivering all projects within their timeline and keeping costs under budget.",
      "Conducted weekly site visits and project meetings to monitor progress, review quality, and address project issues.",
    ],
  }
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 list-disc pl-6">
          {workExperienceData.map((item, index) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.jobTitle} at {item.companyName}
              </h3>
              <ol className="text-base text-gray-700">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
