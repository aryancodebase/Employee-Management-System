export const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@me.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 1,
        title: "Fix login bug",
        description: "Resolve issue where users cannot login with valid credentials.",
        date: "2026-03-01",
        category: "Development",
        status: "active",
      },
      {
        id: 2,
        title: "Update dashboard UI",
        description: "Improve styling and responsiveness of dashboard page.",
        date: "2026-02-28",
        category: "Design",
        status: "completed",
      },
    ],
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@me.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 1,
        title: "Create landing page",
        description: "Build responsive landing page using React.",
        date: "2026-03-02",
        category: "Frontend",
        status: "active",
      },
      {
        id: 2,
        title: "Database optimization",
        description: "Optimize slow queries in PostgreSQL.",
        date: "2026-02-27",
        category: "Backend",
        status: "completed",
      },
    ],
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "employee3@me.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 1,
        title: "Implement JWT auth",
        description: "Secure APIs using JWT authentication.",
        date: "2026-02-20",
        category: "Security",
        status: "completed",
      },
      {
        id: 2,
        title: "Setup CI/CD pipeline",
        description: "Configure GitHub Actions for auto deployment.",
        date: "2026-03-01",
        category: "DevOps",
        status: "active",
      },
    ],
  },
  {
    id: 4,
    name: "Neha Kapoor",
    email: "employee4@me.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 1,
        title: "Client meeting",
        description: "Discuss feature requirements with client.",
        date: "2026-03-01",
        category: "Management",
        status: "active",
      },
    ],
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "employee5@me.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 1,
        title: "SEO optimization",
        description: "Improve website SEO ranking.",
        date: "2026-03-02",
        category: "Marketing",
        status: "active",
      },
    ],
  },
  {
    id: 6,
    name: "System Admin",
    email: "admin@me.com",
    password: "123",
    role: "admin",
    tasks: [],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};