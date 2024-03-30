import Image from "next/image";
import CameraLensDropdown from "./CameraLens/cameraLensDropdown";

export default function SelectCameraLens({ cameras, selectCameraLens }) {
  return (
    <section className="my-10">
      <div className="flex flex-row justify-start">
        <div className="flex flex-row justify-evenly">
          <p className="text-lg p-5 mx-5 border rounded">
            Now that we know the viewing area for each camera, it's easy to
            choose a lens.
          </p>

          <div className="text-lg p-5 mx-5 border rounded">
            <p>
              Based on the viewing distance you entered, some of your camera
              lenses may have already been selected for you.
            </p>
            <a className="block text-base text-right mt-5 text-green-600 cursor-pointer hover:text-green-500">
              How are my camera lenses automatically chosen?
            </a>
          </div>

          <div className="text-lg p-5 mx-5 border rounded">
            <p>
              For your cameras with a viewing area of 50-180 ft, we need you to
              choose between a manual or motorized zoom lens.
            </p>
            <a className="block text-base text-right mt-5 text-green-600 cursor-pointer hover:text-green-500">
              What's the difference?
            </a>
          </div>
        </div>
      </div>

      <p className="text-2xl font-light mt-14 mb-7 ">
        <span className="text-green-700">&#8594;</span> Select{" "}
        <span className="text-green-600 font-normal">manual</span> or{" "}
        <span className="text-green-600 font-normal">motorized</span> zoom lens
        for the remaining cameras.
      </p>

      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-around items-start mt-10 2xl:w-9/12">
          {cameras.outdoor.length != 0 && (
            <div className="border rounded p-5">
              {/* Outdoor */}
              <h3 className="border-b text-lg pb-3 text-center">
                Outdoor Cameras
              </h3>
              {cameras.outdoor.map((camera, index) => {
                return (
                  <div>
                    <div className="flex flex-col justify-start items-center flex-wrap mt-4">
                      <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                        <Image
                          src={`/images/${camera.housing}-style.png`}
                          width={80}
                          height={57}
                        />
                        <p className="mt-3">{camera.name} </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="font-light mb-3">
                          Viewing Area: {camera.viewingArea}
                        </p>
                        <CameraLensDropdown
                          indoorOrOutdoor={"outdoor"}
                          camera={camera}
                          index={index}
                          selectCameraLens={selectCameraLens}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {cameras.indoor.length != 0 && (
            <div className="border rounded p-5">
              {/* Indoor */}
              <h3 className="border-b text-lg pb-3 text-center">
                Indoor Cameras
              </h3>
              {cameras.indoor.map((camera, index) => {
                return (
                  <div className="flex flex-col justify-start items-center flex-wrap mt-4">
                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                      <Image
                        src={`/images/${camera.housing}-style.png`}
                        width={80}
                        height={57}
                      />
                      <p className="mt-3">{camera.name} </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-light mb-3">
                        Viewing Area: {camera.viewingArea}
                      </p>
                      <CameraLensDropdown
                        indoorOrOutdoor={"indoor"}
                        camera={camera}
                        index={index}
                        selectCameraLens={selectCameraLens}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
