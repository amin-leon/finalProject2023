const User = [
  {
    fullName: "John Doe",
    email: "john.doe@example.com",
    password: "hashedPassword123",
    role: "student",
    profileImage: "https://th.bing.com/th/id/R.00bcab38c5e420cf7251e9d95faa9d56?rik=38LLSiBhuF19Mw&pid=ImgRaw&r=0",
    contactNumber: "+250123456789",
    dateOfBirth: "1995-08-15",
    isActive: true,
    notificationPreferences: {
      email: true,
      inApp: true
    },
    createdAt: "2023-07-01T10:00:00.000Z",
    updatedAt: "2023-07-15T15:30:00.000Z"
  },
  {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    password: "hashedPassword456",
    role: "faculty",
    profileImage: "https://th.bing.com/th/id/R.a86b33bb1ce4484510de58b638cbf4f9?rik=0%2bQo%2b9j%2f2Adp5A&pid=ImgRaw&r=0",
    contactNumber: "+250987654321",
    dateOfBirth: "1980-03-21",
    isActive: true,
    notificationPreferences: {
      email: true,
      inApp: true
    },
    createdAt: "2023-06-20T09:30:00.000Z",
    updatedAt: "2023-07-10T14:45:00.000Z"
  },
  {
    fullName: "Admin User",
    email: "admin@example.com",
    password: "hashedAdminPassword",
    role: "admin",
    profileImage: "https://th.bing.com/th/id/OIP.oqPN6K7KnOEFrpxkvtdLtQHaLH?pid=ImgDet&w=720&h=1080&rs=1",
    contactNumber: "+250555555555",
    dateOfBirth: "1975-11-10",
    isActive: true,
    notificationPreferences: {
      email: false,
      inApp: true
    },
    createdAt: "2023-05-10T08:15:00.000Z",
    updatedAt: "2023-07-05T12:20:00.000Z"
  }
];

export default User
