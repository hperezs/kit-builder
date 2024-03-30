import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import Image from "next/image";
import Camera from "./SetCameraCount/camera";

export default function SetCameraCount({
  cameras,
  incrementOutdoorCount,
  incrementIndoorCount,
  decrementOutdoorCount,
  decrementIndoorCount,
  submitCameraName,
}) {
  return (
    <section className="my-10 ">
      <p className="mb-10">
        Add as many cameras as you need. You can always come back to this step
        if you want to change the amount of cameras.
      </p>

      <p className="my-10 font-light p-5 border border-green-50 rounded bg-green-50">
        <span className="text-green-600 font-normal">Tip:</span> You can name
        each camera by clicking on the{" "}
        <BiEditAlt className="inline mb-1 text-lg" /> button.
      </p>

      {/* Outdoor Cameras */}
      <div className={"flex flex-row items-center mb-10 "}>
        <div className="flex flex-col w-2/12 items-center">
          <span className="text-xl text-gray-700">Outdoors:</span>
          <div className="flex flex-row justify-center mt-4 w-full">
            {/* Remove Camera button */}
            <button
              className="flex flex-row justify-center mr-3 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
              onClick={decrementOutdoorCount}
            >
              <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                <span className="text-lg">
                  <AiOutlineMinus />
                </span>
              </div>
            </button>

            {/* Add camera button */}
            <button
              className="flex flex-row justify-center focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
              onClick={incrementOutdoorCount}
            >
              <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                <span className="text-lg">
                  <GrAdd />
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center w-10/12 border border-gray-300 rounded">
          {/* List Cameras */}
          {cameras.outdoor.length == 0 ? (
            <div className="flex flex-row justify-center flex-wrap mt-4">
              <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                <p className="mt-3 text-center">
                  No cameras <br />
                  yet.
                </p>
              </div>
            </div>
          ) : (
            cameras.outdoor.map((camera, index) => {
              return (
                <Camera
                  camera={camera}
                  index={index}
                  indoorOrOutdoor="outdoor"
                  submitCameraName={submitCameraName}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Indoor Cameras */}
      <div className={"flex flex-row items-center "}>
        <div className="flex flex-col w-2/12 items-center">
          <span className="text-xl text-gray-700">Indoors:</span>
          <div className="flex flex-row justify-center mt-4 w-full">
            {/* Remove Camera button */}
            <button
              className="flex flex-row justify-center mr-3 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
              onClick={decrementIndoorCount}
            >
              <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                <span className="text-lg">
                  <AiOutlineMinus />
                </span>
              </div>
            </button>

            {/* Add camera button */}
            <button
              className="flex flex-row justify-center focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
              onClick={incrementIndoorCount}
            >
              <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                <span className="text-lg">
                  <GrAdd />
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center w-10/12 border border-gray-300 rounded">
          {/* List Cameras */}
          {cameras.indoor.length == 0 ? (
            <div className="flex flex-row justify-center flex-wrap mt-4">
              <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                <p className="mt-3 text-center">
                  No cameras <br />
                  yet.
                </p>
              </div>
            </div>
          ) : (
            cameras.indoor.map((camera, index) => {
              return (
                <Camera
                  camera={camera}
                  index={index}
                  indoorOrOutdoor="indoor"
                  submitCameraName={submitCameraName}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
