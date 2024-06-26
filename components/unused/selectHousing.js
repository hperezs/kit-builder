import AddToCamera from "./CameraHousings/addToCamera";

export default function SelectHousing({ cameras, selectHousing }) {
  return (
    <section className="p-10">
      <p className="mt-3 mb-5 text-2xl font-light text-center">
        <span className="text-green-700">&#8594;</span> Click on each camera to
        make your selection
      </p>
      <div className="flex flex-row justify-center">
        <div className="relative my-6 border border-gray-300 rounded py-5 sm:w-full 2xl:w-8/12">
          {/* // Outdoor */}
          <div
            className={
              "text-center " + (cameras.outdoor.length == 0 ? "hidden" : "")
            }
          >
            <h3 className={"text-lg"}>Outdoor Cameras</h3>
            <div className="flex flex-row justify-center flex-wrap mt-4">
              {cameras.outdoor.map((camera, index) => {
                return (
                  <AddToCamera
                    camera={camera}
                    housing={camera.housing}
                    index={index}
                    indoorOrOutdoor={"outdoor"}
                    selectHousing={selectHousing}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          {/* Indoor */}
          <div
            className={
              "text-center mt-5 " + (cameras.indoor.length == 0 ? "hidden" : "")
            }
          >
            <h3 className="text-lg">Indoor Cameras</h3>
            <div className="flex flex-row justify-center flex-wrap mt-4">
              {cameras.indoor.map((camera, index) => {
                return (
                  <AddToCamera
                    camera={camera}
                    housing={camera.housing}
                    index={index}
                    indoorOrOutdoor={"indoor"}
                    selectHousing={selectHousing}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
