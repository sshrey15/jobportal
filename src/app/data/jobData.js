let jobs = [
  {
    id: '1',
    title: 'Software Developer',
    description: 'Infosys is seeking a skilled Software Developer proficient in React to join our dynamic team.',
    requirements: 'Proficiency in React, experience in building and maintaining efficient, reusable, and reliable software solutions.',
    location: 'Goa',
    type: 'Full Time',
    salary: '50000-60000',
    postedAt: '2022-01-01T00:00:00Z',
    colleges: ['college1', 'college2'],
    applicants: ['applicant1', 'applicant2'],
    employerId: 'employer1',
    companyId: 'company1'
  },
  {
    id: '2',
    title: 'Java Backend Developer',
    description: 'Frover is looking for a part-time Java Backend Developer to contribute to the development and maintenance of our backend systems.',
    requirements: 'Experience in Java, knowledge of backend systems.',
    location: 'Mumbai',
    type: 'Part Time',
    salary: '30000-40000',
    postedAt: '2022-01-02T00:00:00Z',
    colleges: ['college3'],
    applicants: ['applicant3'],
    employerId: 'employer2',
    companyId: 'company2'
  },
  {
    id: '3',
    title: 'Data Scientist',
    description: 'TechSolutions Inc. is hiring a Data Scientist with expertise in machine learning and data analysis.',
    requirements: 'Strong background in statistics, machine learning, and data analysis tools.',
    location: 'Bangalore',
    type: 'Full Time',
    salary: '60000-70000',
    postedAt: '2022-01-03T00:00:00Z',
    colleges: ['college4', 'college5'],
    applicants: ['applicant4', 'applicant5'],
    employerId: 'employer3',
    companyId: 'company3'
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    description: 'DesignHub is in search of a creative UX/UI Designer to join our design team.',
    requirements: 'Proven experience in designing user interfaces and creating wireframes, user flows, and prototypes.',
    location: 'Pune',
    type: 'Full Time',
    salary: '55000-65000',
    postedAt: '2022-01-04T00:00:00Z',
    colleges: ['college5'],
    applicants: ['applicant6'],
    employerId: 'employer4',
    companyId: 'company4'
  },
  {
    id: '5',
    title: 'Frontend Developer',
    description: 'WebSolutions Ltd. is looking for a skilled Frontend Developer with expertise in React and Vue.',
    requirements: 'Experience in React and Vue, knowledge of frontend development.',
    location: 'Hyderabad',
    type: 'Full Time',
    salary: '55000-65000',
    postedAt: '2022-01-05T00:00:00Z',
    colleges: ['college2', 'college4'],
    applicants: ['applicant7'],
    employerId: 'employer5',
    companyId: 'company5'
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    description: 'DesignHub is in search of a creative UX/UI Designer to join our design team.',
    requirements: 'Proven experience in designing user interfaces and creating wireframes, user flows, and prototypes.',
    location: 'Pune',
    type: 'Full Time',
    salary: '55000-65000',
    postedAt: '2022-01-04T00:00:00Z',
    colleges: ['college5'],
    applicants: ['applicant6'],
    employerId: 'employer4',
    companyId: 'company4'
  },
  // Add more jobs as needed
];

  export const getJobs = (colleges) => {
    if (!colleges) {
      return jobs;
    }
  
    const filteredJobs = jobs.filter(job => job.colleges.some(college => collegesArray.includes(college)));
    return filteredJobs;
  }


export const getByCollege = (colleges) => {
  return jobs.filter(job => job.colleges.includes(colleges));
};

export const deleteJob = (id) => {
  jobs = jobs.filter(job => job.id !== id);
}

export const updateJob = (id, title, description, requirements, location, type, salary, postedAt, colleges, applicants, employerId, companyId) => {
  const job = jobs.find(job => job.id === id);

  if (job) {
    job.title = title;
    job.description = description;
    job.requirements = requirements;
    job.location = location;
    job.type = type;
    job.salary = salary;
    job.postedAt = postedAt;
    job.colleges = colleges;
    job.applicants = applicants;
    job.employerId = employerId;
    job.companyId = companyId;
  } else {
    throw new Error("Job not found");
  }
}

export const getById = (id) => {
  return jobs.find(job => job.id === id);
}