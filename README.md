# Employee Task Management Dashboard

A simple **React-based Employee Task Management Dashboard** that allows employees and administrators to log in and manage tasks. The application demonstrates **role-based dashboards, authentication, task management, and global state management using React Context API**.

This project simulates a **real-world task management system** where employees can view their assigned tasks and administrators can manage the system.

---

# 🚀 Features

### 🔐 Authentication System

* Login system for both **Admin** and **Employees**
* Authentication handled using **React Context API**
* Logged-in user information stored in **Local Storage**
* Session persistence even after page refresh

### 👨‍💼 Role-Based Dashboards

* **Admin Dashboard**

  * Access system-level controls
  * Manage employees and tasks (future enhancement)

* **Employee Dashboard**

  * View assigned tasks
  * Track task status
  * See task details including category and deadline

### 📋 Task Management

Each employee has a list of tasks containing:

* Task title
* Description
* Category
* Deadline date
* Task status (Active / Completed)

### 🔄 Dynamic Task Rendering

Tasks are dynamically displayed using:

* `React.map()` to loop through task lists
* Task cards generated automatically based on user data

### 🌐 Global State Management

* Implemented using **React Context API**
* Allows access to logged-in user data across components

### 💾 Persistent Login

User login information is saved in:

```
localStorage
```

This allows the application to remember the logged-in user even after refreshing the page.

---

# 🛠️ Tech Stack

| Technology        | Purpose                      |
| ----------------- | ---------------------------- |
| React.js          | Frontend UI                  |
| React Hooks       | State & lifecycle management |
| Context API       | Global state management      |
| Tailwind CSS      | UI styling                   |
| LocalStorage      | Persist login session        |
| JavaScript (ES6+) | Application logic            |

---

# 📁 Project Structure

```
src
│
├── components
│   ├── Auth
│   │   └── Login.jsx
│   │
│   ├── Dashboard
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   │
│   └── TaskList
│       └── TaskList.jsx
│
├── context
│   └── AuthProvider.jsx
│
├── utils
│   └── localStorage.js
│
├── App.jsx
└── main.jsx
```

---

# 👥 User Roles

## Admin

```
Email: admin@me.com
Password: 123
```

Capabilities:

* Access Admin Dashboard
* Monitor system (future enhancements)

---

## Employees

Example users:

```
employee1@me.com
employee2@me.com
employee3@me.com
employee4@me.com
employee5@me.com

Password: 123
```

Capabilities:

* Login to employee dashboard
* View assigned tasks
* Track task progress

---

# 📊 Task Object Structure

Each employee contains a list of tasks structured as:

```javascript
{
  id: 1,
  title: "Fix login bug",
  description: "Resolve issue where users cannot login with valid credentials.",
  date: "2026-03-01",
  category: "Development",
  status: "active"
}
```

---

# 🔑 Authentication Flow

1. User enters **email and password**
2. System searches the `users` array
3. If credentials match:

   * User data is stored in **React Context**
   * User data is stored in **Local Storage**
4. Based on the **user role**, the appropriate dashboard is rendered

```
Admin → Admin Dashboard
Employee → Employee Dashboard
```

---

# 📌 Key Concepts Demonstrated

This project demonstrates several important React concepts:

### React Hooks

* `useState`
* `useEffect`
* `useContext`

### Context API

Used to share authenticated user information globally.

### Optional Chaining

Used to safely access nested properties:

```
user?.tasks?.map()
```

### Dynamic Rendering

Tasks are rendered dynamically from user data.

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/employee-task-dashboard.git
```

### 2️⃣ Navigate into the project

```
cd employee-task-dashboard
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Run the development server

```
npm run dev
```

---

# 📸 Application Flow

```
User opens application
        ↓
Login Page
        ↓
User Authentication
        ↓
Role Check
        ↓
Admin Dashboard OR Employee Dashboard
        ↓
Employee sees assigned tasks
```

---

# 🚧 Future Improvements

Potential enhancements for the project:

* Add **task creation by Admin**
* Add **task status updates**
* Add **task filtering**
* Integrate **backend API (Node.js / Express)**
* Implement **JWT authentication**
* Add **database (MongoDB / PostgreSQL)**
* Add **real-time task updates**

---

# 🎯 Learning Outcomes

This project helped practice:

* React component architecture
* Authentication flow
* Global state management
* Dynamic UI rendering
* Role-based application design

---

# 📜 License

This project is open-source and available under the **MIT License**.
