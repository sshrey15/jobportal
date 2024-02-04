let applicantData = [
  {
    id: 'student1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    collegeId: 'college1',
    major: 'Computer Science',
    graduationYear: 2023,
    skills: ['JavaScript', 'React', 'Node.js'],
    experience: [
      {
        title: 'Intern',
        company: 'TechCo',
        year: 2022,
      },
    ],
    contact: {
      phone: '123-456-7890',
      address: '123 Main St, Cityville, State',
    },
    social: {
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
    },
  },
  {
    id: 'student2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    collegeId: 'college2',
    major: 'Business Administration',
    graduationYear: 2023,
    skills: ['Marketing', 'Sales', 'Communication'],
    experience: [
      {
        title: 'Marketing Coordinator',
        company: 'MarketingHub',
        year: 2022,
      },
    ],
    contact: {
      phone: '987-654-3210',
      address: '456 Oak St, Townsville, State',
    },
    social: {
      linkedin: 'linkedin.com/in/janesmith',
      github: 'github.com/janesmith',
    },
  },
  {
    id: 'student3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    collegeId: 'college1',
    major: 'Electrical Engineering',
    graduationYear: 2023,
    skills: ['Circuit Design', 'Embedded Systems', 'Python'],
    experience: [
      {
        title: 'Engineering Intern',
        company: 'ElectroTech',
        year: 2022,
      },
    ],
    contact: {
      phone: '555-123-4567',
      address: '789 Pine St, Villagetown, State',
    },
    social: {
      linkedin: 'linkedin.com/in/bobjohnson',
      github: 'github.com/bobjohnson',
    },
  },
  // Add more student data as needed
];


export const getApplicants = () => {
  return applicantData;
}

export const getByCollege = (collegeId) => {
  return applicantData.filter(applicant => applicant.collegeId === collegeId);
};

export const deleteApplicant = (id) => {
  applicantData = applicantData.filter(applicant => applicant.id !== id);
}

export const updateApplicant = (id, updatedApplicant) => {
  const index = applicantData.findIndex(applicant => applicant.id === id);

  if (index !== -1) {
    applicantData[index] = { ...applicantData[index], ...updatedApplicant };
  } else {
    throw new Error("Applicant not found");
  }
};

export const getById = (id) => {
  return applicantData.find(applicant => applicant.id === id);
}

export const checkCollegeExists = (collegeId) => {
  return applicantData.some(applicant => applicant.collegeId === collegeId);
}

export const addApplicant = (applicant) => {
  
 
  applicantData.push(applicant);
}