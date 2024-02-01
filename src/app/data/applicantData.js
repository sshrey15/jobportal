let applicantData = [
  {
    id: 'student1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    collegeId: 'college1',
  },
  {
    id: 'student2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    collegeId: 'college2',
  },
  {
    id: 'student3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    collegeId: 'college1',
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

export const updateApplicant = (id, name, email, collegeId) => {
  const applicant = applicantData.find(applicant => applicant.id === id);

  if (applicant) {
    applicant.name = name;
    applicant.email = email;
    applicant.collegeId = collegeId;
  } else {
    throw new Error("Applicant not found");
  }
}

export const getById = (id) => {
  return applicantData.find(applicant => applicant.id === id);
}

export const checkCollegeExists = (collegeId) => {
  return applicantData.some(applicant => applicant.collegeId === collegeId);
}

export const addApplicant = (applicant) => {
  
 
  applicantData.push(applicant);
}