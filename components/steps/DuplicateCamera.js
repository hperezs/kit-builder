import React from "react";

export default function DuplicateCamera({duplicateCamera, camera, lastIndex}) {
  const [showModal, setShowModal] = React.useState(false);
  const [duplicateCount, setDuplicateCount] = React.useState(1);

  const handleChange = e => {
      let value = e.target.value;
      if(value > 25) {
          setDuplicateCount(25);
      } else if(value < 0) {
          setDuplicateCount(1);
      } else {
          setDuplicateCount(value);
      }

  }

  return (
    <>
        <button 
            onClick={e => setShowModal(true)}
            className="text-green-600 mt-2 py-1 px-2 uppercase font-semibold border rounded border-green-600 hover:bg-green-600 hover:text-white transition-colors duration-400 ease focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
        >
            Duplicate
        </button>
        {showModal ? (
        <>
          <div
            transition-style="fade:in:faster"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold ml-2">
                    Duplicate Camera
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
                <div className="relative p-6 flex-auto flex flex-col items-center">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-center">
                        How many times do you want to duplicate this camera?
                    </p>
                    <input 
                        type="number" 
                        value={duplicateCount}
                        onChange={handleChange}
                        className="border border-gray-300 rounded w-14 outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-80"
                    />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {setShowModal(false); duplicateCamera(camera, duplicateCount, lastIndex)}}
                  >
                    Duplicate
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