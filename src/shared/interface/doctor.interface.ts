export type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
};

export type DoctorSpecialty = {
  id: string;
  specialtyName: string;
};

export type DoctorType = {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE" | "OTHER";
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  review: Review;
  doctorSpecialties: DoctorSpecialty;
};
