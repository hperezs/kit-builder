import React from "react";
import Image from "next/image";
import EditViewingArea from "./Inputs/editViewingArea";

export default function EditCamera({ camera }) {
  const [showModal, setShowModal] = React.useState(false);

  const button_styles =
    "px-3 py-2 border rounded border-green-600 text-green-600 text-sm mt-3 hover:bg-green-500 hover:border-green-500 hover:text-white focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50";

  return (
    <>
      <button
        className={button_styles}
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Edit this camera
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Camera</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative py-6 px-20 flex-auto">
                  <div className="px-5 py-7 w-full">
                    <p className="text-center text-lg">{camera.name} </p>
                    <div className="flex flex-col justify-start items-center flex-wrap ">
                      <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                        <div style={{ height: "66px", width: "100px" }}>
                          <div
                            style={{
                              position: "relative",
                              maxWidth: "100%",
                              height: "100%",
                            }}
                          >
                            <Image
                              src={`/images/${camera.housing}-style.png`}
                              layout="fill"
                              objectFit="contain"
                              quality={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="font-light mb-1">
                          Viewing Area: <EditViewingArea />
                        </p>
                        <p className="font-light mb-1">
                          Lens: {camera.cameraLens}
                        </p>
                        <p className="font-light mb-1">
                          Night Vision: {camera.nightVisionDist}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-evenly p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 "
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-600 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-green-400 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
