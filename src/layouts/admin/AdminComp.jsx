import { useState, useRef, useEffect } from "react";
import { IoPeopleSharp } from "react-icons/io5";
import DeleteSubject from "./DeleteSubject";
import UploadSubject from "./UploadSubject";
import DeleteStudent from "../DeleteStudent";
import UploadStudent from "./UploadStudent";
import GenerateReport from "./GenerateReport";
import 'animate.css';

function AdminComp() {
  const [modalType, setModalType] = useState(null);
  const modalRef = useRef(null);

  const handleOpenModal = (type) => setModalType(type);
  const handleCloseModal = () => setModalType(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (modalType) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalType]);

  const renderModalContent = () => {
    switch (modalType) {
      case "deleteStudent":
        return <DeleteStudent handleCloseModal={handleCloseModal} />;
      case "deleteSubject":
        return <DeleteSubject handleCloseModal={handleCloseModal} />;
      case "uploadSubject":
        return <UploadSubject handleCloseModal={handleCloseModal} />;
      case "uploadStudent":
        return <UploadStudent handleCloseModal={handleCloseModal} />;
      case "generateReport":
        return <GenerateReport handleCloseModal={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen mx-4 flex items-center justify-center mb-4 p-3">
      <div className="form-div max-w-6xl w-full animate__animated animate__fadeIn ">
        <div className="info mb-4 text-center">
          <IoPeopleSharp size={48} className="text-blue-500 mx-auto animate__animated animate__zoomIn" />
          <h2 className="text-3xl font-bold text-gray-900 animate__animated animate__fadeIn ">Welcome, Admin!</h2>
        </div>
        <div className="admin-form animate__animated animate__fadeIn ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["deleteStudent", "deleteSubject", "uploadSubject", "uploadStudent", "generateReport"].map(type => (
              <div key={type} className="box bg-white rounded-lg shadow-md p-6 animate__animated animate__fadeInUp animate__delay-1s">
                <h3 className="text-xl font-bold mb-2">{type.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
                <button
                  onClick={() => handleOpenModal(type)}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 animate__animated animate__pulse"
                >
                  Show Modal
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn">
          <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg animate__animated animate__fadeInDown">
            {renderModalContent()}
            <button onClick={handleCloseModal} className="bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded-md mt-4 hover:bg-gray-300 transition ease-in-out duration-150">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminComp;
