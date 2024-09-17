interface EducationItem {
    startDate: string;
    endDate: string;
    schoolName: string;
    courseName: string;
    gpa: string;
    address: string;
    description: string[];
}

const educationData: EducationItem[] = [
    {
        startDate: "September 2020",
        endDate: "May 2025",
        schoolName: "Northeastern University",
        courseName: "BS in Computer Science and Civil Engineering",
        gpa: "3.9",
        address: "Boston, MA",
        description: [
            "Honors & Activities: Club Ultimate Frisbee (A-Team Captain), Chi Epsilon Civil Engineering Honors Society (Treasurer), ASCE, Academic Scholarship, Resilience Award, Deans List",
            "Relevant Courses: Object Oriented Design, Algorithms and Data Structures, Database Design, Fundamentals of Data Science, Fundamentals of Computer Science I and II, Discrete Structures, Energy Systems, Thermodynamics"
        ]
    },
    {
        startDate: "September 2016",
        endDate: "June 2020",
        schoolName: "Strath Haven High School",
        courseName: "High School Diploma",
        gpa: "3.9",
        address: "Wallingford, PA",
        description: [
            "Honors and Activities: National Honor Society 2018-2020, Varsity Soccer, Varsity Track and Field, Varsity Ultimate Frisbee (Captain)"
        ]
    }
];



const Education = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Education</h1>
            <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 list-disc pl-6">
          {educationData.map((item, index) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.schoolName}
                </span>
                ,&nbsp;
                <span className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.address}
                    </span>
              </h3>
              <h2 className="text-md italic font-semibold text-gray-900 dark:text-white">
                {item.courseName}, GPA: {item.gpa}
              </h2>
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

export default Education;