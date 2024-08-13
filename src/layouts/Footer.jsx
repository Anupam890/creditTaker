const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-[#07294D] dark:text-white/75 lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  className="mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
                </svg>
                About
              </h6>
              <h1 className="text-2xl font-bold">
                CUTM
              </h1>
              <p>
                Credit Tracker is a web application that helps students to manage their coursework, track their grades, and stay on top of their academic progress with ease.
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  className="mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
                </svg>
                Products
              </h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    Angular
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    Vue
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    Laravel
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  className="mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
                </svg>
                Useful links
              </h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <svg
                  className="mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
                </svg>
                Contact
              </h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                  CUTM, Paralakhemundi, Odisha, India.
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    icutm@123
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
                  >
                    +91 123 456 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 text-center text-surface dark:text-white/75">
          <span>
            © 2024{" "}
            <a
              href="#!"
              className="text-surface/75 hover:text-surface dark:text-white/75 dark:hover:text-white"
            >
              CUTM
            </a>
            . All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
