const handleServer = (e)=>{
  e.preventDefault();
  
}


function UploadStudent() {
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleServer}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Student Data</h2>
            <label className="block mb-2 text-sm font-medium text-gray-700">Upload Excel File</label>
            <input
              type="file"
              accept=".xlsx"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-2"
            />
            <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
              Upload
            </button>
          </form>
    </div>
  )
}

export default UploadStudent
