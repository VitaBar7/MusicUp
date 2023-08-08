import React, { useState } from "react";
import Image from "next/image";


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
        <button
          className="border border-blue-100  text-gray-800 hover:text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal
        </button>
      </div>
      {showModal ? (
        <div className="mt-10 bg-white text-dark-grey flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          {/* <Image src={Trophy} width={100} height={100} objectFit="contain" /> */}
          <h2 className="text-base mt-2 mx-4 text-gray-400 text-center">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button
            className="my-5 w-auto bg-orange px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      ) : null}

      
    </div>
  );
};

export default TestModals;
