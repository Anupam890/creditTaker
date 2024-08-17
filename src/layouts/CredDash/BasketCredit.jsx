import { useState } from "react";
import Loader from "../../components/Loader";
import 'animate.css';

const BasketCredit = () => {
  const creditTable = [
    { basketName: "Basket 1", requirements: 10, completedCredits: 7, pendingCredits: 3 },
    { basketName: "Basket 2", requirements: 15, completedCredits: 12, pendingCredits: 3 },
    { basketName: "Basket 3", requirements: 8, completedCredits: 5, pendingCredits: 3 },
    { basketName: "Basket 4", requirements: 20, completedCredits: 18, pendingCredits: 2 },
    { basketName: "Basket 5", requirements: 5, completedCredits: 5, pendingCredits: 0 }
  ];

  const [formDetail, setFormDetail] = useState({
    registrationNo: "",
    branch: "",
    year: "",
  });
  const [loading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null); // State to store fetched data

  const handleInput = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate fetching data; you can replace this with actual data fetching logic
      setFetchedData(creditTable);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="min-h-screen">
        <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div className="w-full max-w-md mx-auto md:max-w-sm sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="text-3xl md:text-4xl text-black animate__animated animate__fadeInUp">Fetch Credits</h2>
              </div>
            </div>
            <div className="p-3">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader />
                </div>
              ) : fetchedData ? (
                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basket Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requirements</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed Credits</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Credits</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {fetchedData.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 text-sm font-medium text-gray-900">{item.basketName}</td>
                          <td className="px-4 py-2 text-sm text-gray-500">{item.requirements}</td>
                          <td className="px-4 py-2 text-sm text-gray-500">{item.completedCredits}</td>
                          <td className="px-4 py-2 text-sm text-gray-500">{item.pendingCredits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <form onSubmit={handleInput} className="animate__animated animate__fadeInUp">
                  <div className="mt-4 space-y-6">
                    <div className="col-span-full">
                      <label className="block mb-2 text-sm font-medium text-gray-600">Registration No:</label>
                      <input
                        type="text"
                        name="registrationNo"
                        value={formDetail.registrationNo}
                        onChange={handleChange}
                        placeholder="Enter Registration Number..."
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-full placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="block mb-2 text-sm font-medium text-gray-600">Branch</label>
                      <select
                        name="branch"
                        value={formDetail.branch}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-full placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="">Select Branch</option>
                        <option value="cse">Computer Science</option>
                        <option value="it">Information Technology</option>
                        <option value="ece">Electronics and Communication</option>
                      </select>
                    </div>
                    <div className="col-span-full">
                      <label className="block mb-2 text-sm font-medium text-gray-600">Year</label>
                      <input
                        type="text"
                        name="year"
                        value={formDetail.year}
                        onChange={handleChange}
                        placeholder="Enter Year (e.g., 1, 2, 3, 4)"
                        className="block w-full px-4 py-3 text-black bg-white border border-gray-200 rounded-full placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-full">
                      <button
                        type="submit"
                        className="w-full px-6 py-2.5 text-center text-white bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm duration-200"
                      >
                        Fetch
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasketCredit;
