import { useState } from "react";
import Loader from "../../components/Loader";
import 'animate.css';

const BasketCredit = () => {
  const [formDetail, setFormDetail] = useState({
    registrationNo: "",
    branch: "",
    year: "",
  });
  const [Loading, setLoading] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
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
          <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="text-4xl text-black animate__animated animate__fadeInUp">Fetch Credits</h2>
              </div>
            </div>
            <div className="p-3">
              {Loading ? (
                // Centering the Loader using Flexbox
                <div className="flex justify-center items-center h-64">
                  <Loader />
                </div>
              ) : (
                <form onSubmit={handleInput} className="animate__animated animate__fadeInUp">
                  <div className="mt-4 space-y-6">
                    <div className="col-span-full">
                      <label className="block mb-3 text-sm font-medium text-gray-600">
                        Registration No:
                      </label>
                      <input
                        type="text"
                        name="registrationNo"
                        value={formDetail.registrationNo}
                        onChange={handleChange}
                        placeholder="Enter Registration Number..."
                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-full">
                      <label className="block mb-3 text-sm font-medium text-gray-600">
                        Branch
                      </label>
                      <select
                        name="branch"
                        value={formDetail.branch}
                        onChange={handleChange}
                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400
                         focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      >
                        <option value="">Select Branch</option>
                        <option value="cse">Computer Science</option>
                        <option value="it">Information Technology</option>
                        <option value="ece">
                          Electronics and Communication
                        </option>
                      </select>
                    </div>
                    <div className="col-span-full">
                      <label className="block mb-3 text-sm font-medium text-gray-600">
                        Year
                      </label>
                      <input
                        type="text"
                        name="year"
                        value={formDetail.year}
                        onChange={handleChange}
                        placeholder="Enter Year (e.g., 1, 2, 3, 4)"
                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-full">
                      <button
                        type="submit"
                        className="items-center font-bold justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
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
