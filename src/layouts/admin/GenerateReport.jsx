

function GenerateReport() {
  return (
    <div>
        <form className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Generate Report</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-600">Registration No:</label>
                <input
                  type="text"
                  name="registrationNo"
                  placeholder="Enter Registration Number..."
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600">Branch</label>
                <select
                  name="branch"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                >
                  <option value="">Select Branch</option>
                  <option value="cse">Computer Science</option>
                  <option value="it">Information Technology</option>
                  <option value="ece">Electronics and Communication</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-600">Year</label>
                <input
                  type="text"
                  name="year"
                  placeholder="Enter Year (e.g., 1, 2, 3, 4)"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Generate
              </button>
            </div>
          </form>
      
    </div>
  )
}

export default GenerateReport
