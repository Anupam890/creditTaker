import { useState } from "react";

function UploadSubject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    handleCloseModal();
  };


  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Upload Subject Data
        </h2>
        <label className="block mb-2 text-sm font-medium text-gray-700">Select Branch</label>
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
          Upload File
        </label>
        <input
          type="file"
          accept=".xlsx"
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Add Manually
            </h2>
            <form className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Programme
              </label>
              <input
                type="text"
                placeholder="Enter Programme"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Select Branch
              </label>

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
                Basket
              </label>
              <select
                name="Basket"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              >
                <option value="">Select Basket</option>
                <option value="1">Basket I</option>
                <option value="2">Basket II</option>
                <option value="3">Basket III</option>
                <option value="4">Basket IV</option>
                <option value="5">Basket V</option>
              </select>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Course Type
              </label>
              <input
                type="text"
                placeholder="Course Type"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Course Code
              </label>
              <input
                type="text"
                placeholder="Course Code"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Subject Name
              </label>
              <input
                type="text"
                placeholder="Subject Name"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Credit
              </label>
              <input
                type="Credit"
                placeholder="Enter Programme"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Type
              </label>
              <input
                type="Credit"
                placeholder="Enter Programme"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              />

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
