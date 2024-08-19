

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                
                <span className="text-3xl font-bold">CUTM</span>
              </a>
              <p className="mt-4 text-gray-400">
                Empowering your digital presence with innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  Company
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  Resources
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                  
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      API Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  Support
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  Follow Us
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />

          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm text-center">
              &copy; 2024 CUTM. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
