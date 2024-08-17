import  { useState } from 'react';

function UploadSubject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <form className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Subject Data</h2>
        <select
          name="branch"
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        >
          <option value="">Select Branch</option>
          <option value="cse">Computer Science</option>
          <option value="it">Information Technology</option>
          <option value="ece">Electronics and Communication</option>
        </select>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Select File
        </label>
        <input
          type="file"
          accept='.xlsx'
          className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        >
          Upload
        </button>
        <button
          type="button"
          onClick={handleOpenModal}
          className="bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded-md mt-2 hover:bg-gray-300 transition ease-in-out duration-150"
        >
          Add Manually
        </button>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Manually</h2>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Enter Subject Name"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              />
              <select
                name="branch"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              >
                <option value="">Select Branch</option>
                <option value="cse">Computer Science</option>
                <option value="it">Information Technology</option>
                <option value="ece">Electronics and Communication</option>
              </select>
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Add
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded-md mt-2 hover:bg-gray-300 transition ease-in-out duration-150"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadSubject;
