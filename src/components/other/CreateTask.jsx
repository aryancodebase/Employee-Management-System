const CreateTask = () => {
  return (
    <>
      <div className="w-full">
        <div className="rounded-xl bg-gray-900 w-full">
          <form className="flex flex-col gap-3 p-6 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm">
                Task title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Title here.."
                className="border border-gray-800 rounded-xl placeholder:text-sm p-3 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <textarea
                id="description"
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
                id="date"
                placeholder="Date here..."
                className="border border-gray-800 rounded-xl  p-3"
              />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="assign" className="text-sm">
                  Assign to
                </label>
                <select
                  name=""
                  id="assign"
                  className="border border-gray-800 rounded-xl placeholder:text-sm p-3 bg-gray-900"
                >
                  <option value="">-- Select member --</option>
                  <option value="employee1">Aarav Sharma</option>
                  <option value="employee2">Priya Verma</option>
                  <option value="employee3">Rohan Mehta</option>
                  <option value="employee4">Neha Kapoor</option>
                  <option value="employee5">Vikram Singh</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="category" className="text-sm">
                  Category
                </label>
                <select
                  name=""
                  id="category"
                  className="border border-gray-800 rounded-xl placeholder:text-sm p-3 bg-gray-900"
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
    </>
  );
};

export default CreateTask;
