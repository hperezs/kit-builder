import Image from "next/image";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function ProVueModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <p
        onClick={(e) => setShowModal(true)}
        className={
          "mt-5 text-green-600 text-center cursor-pointer hover:text-green-500"
        }
        transition-style="fade:in:faster"
      >
        What is ProVue?
      </p>
      {showModal ? (
        <>
          <div
            transition-style="fade:in:faster"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              className="relative w-auto my-6 mx-auto"
              style={{ maxWidth: "900px" }}
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold ml-2">
                    What is ProVue?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto flex">
                  <p className="my-4 text-lg ">
                    Our ProVue series provides the perfect balance between cost
                    and performance.
                    <br />
                    <br /> The system is a proven and tested platform offering a
                    professional solution for home and business owners who are
                    looking for value.
                    <br />
                    <br />
                    The series is equipped with standard AI features allowing
                    users to customize automatic alerts and custom recording
                    options. The series offers a large selection of low cost
                    cameras packed with high performance feature such as 4K
                    clarity, live 30 frames per second video, audio, extreme
                    weather ratings and our industry exclusive 5 year warranty.
                  </p>
                  <div className="flex items-center" style={{ minWidth: 300 }}>
                    <img
                      src={"/images/ProVue_Transparent.png"}
                      width={300}
                      height={64}
                      alt="ProVue logo"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none hover:bg-gray-100 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black animate-gray"></div>
        </>
      ) : null}
    </>
  );
}
