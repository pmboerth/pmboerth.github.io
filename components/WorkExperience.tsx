interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
  startDate: "September 2025",
  endDate: "Present",
  companyName: "Tyler Technologies",
  jobTitle: "Software Engineer",
  description: [
    "Delivered the highest number of engineering work items (41) on a team of 14 software engineers in 2026, implementing new features, production fixes, and performance improvements for Tyler's enterprise EERP Tax platform.",
    "Designed and implemented backend functionality in Genero 4GL for enterprise property tax software used by local governments, developing customer-specific features across billing, assessment, and tax administration modules.",
    "Optimized SQL queries processing over 300,000+ records by leveraging set-based operations and partitioned transaction processing, reducing database overhead by up to 30% while improving scalability.",
    "Served as the primary developer for a Tax Increment Financing (TIF) application supporting a high-priority client, implementing tax adjustment, reporting, and financial processing functionality.",
    "Presented feature demonstrations to government clients and authored technical specifications for customer-requested enhancements.",
  ],
},
{
  startDate: "January 2025",
  endDate: "May 2025",
  companyName: "Khoury College of Computer Science",
  jobTitle: "Teaching Assistant",
  description: [
    "Held weekly office hours to support students with programming concepts, coursework, and debugging strategies.",
    "Evaluated homework assignments and examinations, providing detailed feedback to reinforce student understanding and learning outcomes.",
    "Guided students through challenging technical concepts in a collaborative and supportive learning environment.",
  ],
},
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Work Experience</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 list-disc pl-6">
          {workExperienceData.map((item, index) => (
            <li key={index} 
                className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.jobTitle} at {item.companyName}
              </h3>
              <ol className="text-base text-gray-700 dark:text-gray-300">
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
