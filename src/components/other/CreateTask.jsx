import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { formData, setFormData } = useContext(AuthContext);

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const employees = users.filter((u) => u.role === "employee");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.assignedTo) {
      alert("Please select an employee");
      return;
    }

    const employee = users.find((u) => u.id === Number(formData.assignedTo));

    if (!employee) return;

    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      date: formData.date,
      category: formData.category,
      status: "active",
    };

    employee.tasks = [...employee.tasks, newTask];

    localStorage.setItem("users", JSON.stringify(users));

    alert("Task assigned successfully");

    // reset form
    setFormData({
      title: "",
      description: "",
      date: "",
      category: "",
      assignedTo: "",
    });
  };

  return (
    <div className="w-full">
      <div className="rounded-xl bg-gray-900 w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 p-6 w-full"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm">
              Task title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              id="title"
              placeholder="Title here.."
              className="border border-gray-800 rounded-xl placeholder:text-sm p-3"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="border p-3 border-gray-800 rounded-xl placeholder:text-sm"
              rows={3}
              placeholder="Describe your task here..."
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-sm">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              id="date"
              className="border border-gray-800 rounded-xl p-3"
            />
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="assign" className="text-sm">
                Assign to
              </label>

              <select
                id="assign"
                value={formData.assignedTo}
                onChange={(e) =>
                  setFormData({ ...formData, assignedTo: e.target.value })
                }
                className="border border-gray-800 rounded-xl p-3 bg-gray-900"
              >
                <option value="">-- Select member --</option>

                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="category" className="text-sm">
                Category
              </label>

              <select
                id="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="border border-gray-800 rounded-xl p-3 bg-gray-900"
              >
                <option value="">-- Select --</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="testing">Testing</option>
                <option value="security">Security</option>
                <option value="devops">DevOps</option>
                <option value="management">Management</option>
                <option value="optimization">Optimization</option>
                <option value="ux">UX</option>
                <option value="ui">UI</option>
                <option value="marketing">Marketing</option>
                <option value="documentation">Documentation</option>
                <option value="analytics">Analytics</option>
                <option value="research">Research</option>
                <option value="database">Database</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="content">Content</option>
                <option value="seo">SEO</option>
              </select>
            </div>
          </div>

          <div className="mt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700 transition-colors w-full"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
