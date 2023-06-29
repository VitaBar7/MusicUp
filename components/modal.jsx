import React, { useState } from "react";
import Modal from 'react-modal'
import MoodOptions from "./mood-options";



const TestModals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-40 ">
      <div className="flex gap-5 ">
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open Modal 
        </button>
       
      </div>
      {showModal ? (
        <Modal 
          className="mt-10 bg-white text-dark-grey flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2"
          animationType="slide"
          transparent={true}
          visible={showModal}
        >
         <h1>Hello World</h1>
         <button
            className="my-5 w-auto bg-orange px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal>
      ) : null}

      
    </div>
  );
};

export default TestModals;
