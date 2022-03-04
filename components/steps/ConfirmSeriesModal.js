import React from "react";

export default function ConfirmSeriesModal({ cancel, confirm, isOpen }) {
  return (
    <>
      {isOpen ? (
        <>
          <div
            transition-style="fade:in:faster"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto" style={{ maxWidth: '420px' }}>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold ml-2">
                    Confirm Series
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
                    Are you sure you want to change series? The selected Video Recorder and cameras will be removed from your cart.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none hover:bg-gray-100 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => cancel()}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-green-600 font-bold uppercase px-6 py-2 text-sm outline-none hover:bg-green-500 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => confirm()}
                  >
                    Confirm
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
