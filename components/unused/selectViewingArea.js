import Image from "next/image";
import ViewingAreaDropdown from "./CameraLens/viewingAreaDropdown";

export default function SelectViewingArea({ cameras, selectViewingArea }) {
  return (
    <section className="my-10">
      <p className="text-lg">
        To select a lens, first we need to know the length of the viewing area.
      </p>
      <p className="text-2xl font-light my-10">
        <span className="text-green-700">&#8594;</span> Select the{" "}
        <span className="text-green-600 font-normal">
          lenght of the viewing area
        </span>{" "}
        for each of your cameras.
      </p>

      <div className="flex flex-row justify-center mt-20">
        <div className="flex flex-row justify-center items-start sm:w-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 ">
          {/* Outdoor */}
          {cameras.outdoor.length != 0 && (
            <div className="border rounded p-5 mr-20">
              <h3 className="border-b text-lg pb-3 text-center">
                Outdoor Cameras
              </h3>
              {cameras.outdoor.map((camera, index) => {
                return (
                  <div className="flex flex-col justify-center items-center px-7 mt-4">
                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                      <Image
                        src={`/images/${camera.housing}-style.png`}
                        width={80}
                        height={57}
                      />
                      <p className="mt-3">{camera.name} </p>
                    </div>
                    <ViewingAreaDropdown
                      indoorOrOutdoor={"outdoor"}
                      camera={camera}
                      index={index}
                      selectViewingArea={selectViewingArea}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {/* Indoor */}
          {cameras.indoor.length != 0 && (
            <div className="border rounded p-5 ml-20">
              <h3 className="border-b text-lg pb-3 text-center">
                Indoor Cameras
              </h3>
              {cameras.indoor.map((camera, index) => {
                return (
                  <div className="flex flex-col justify-center items-center px-7 mt-4">
                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                      <Image
                        src={`/images/${camera.housing}-style.png`}
                        width={80}
                        height={57}
                      />
                      <p className="mt-3">{camera.name} </p>
                    </div>
                    <ViewingAreaDropdown
                      indoorOrOutdoor={"indoor"}
                      camera={camera}
                      index={index}
                      selectViewingArea={selectViewingArea}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mt-7 pb-7 text-right">
        <a className="mr-5 text-green-600 cursor-pointer hover:text-green-500">
          Why are some options disabled?
        </a>
      </div>
    </section>
  );
}
