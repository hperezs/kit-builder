import { useState } from "react";
import { BiEditAlt, BiCheck } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import ViewingAreaDropdown from "./dropdowns/viewingAreaDropdown";
import CameraLensDropdown from "./dropdowns/cameraLensDropdown";
import RecommendedCameras from "./RecommendedCameras";
import SelectHousing from "./SelectHousing";
import ResolutionRadio from "./dropdowns/resolutionRadio";
import CyberSecureToggle from "./dropdowns/cyberSecureToggle";

export default function AddNewCamera({
  allProducts,
  selectNewCamera,
  isAddingNewCamera,
  setIsAddingNewCamera,
  lastIndex,
}) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [cameraHousing, setCameraHousing] = useState("");
  const [cameraName, setCameraName] = useState("Camera Name");
  const [viewingArea, setViewingArea] = useState("");
  const [cameraLens, setCameraLens] = useState("");
  const [nightVisionDist, setNightVisionDist] = useState("");
  const [resolution, setResolution] = useState("");
  const [cyberSecure, setCyberSecure] = useState(false);

  const handleNameChanges = (event) => {
    setCameraName(event.target.value);
  };

  const cancelChanges = () => {
    setIsEditingName(false);
  };

  const saveChanges = (event) => {
    setIsEditingName(false);
  };

  const selectInputValue = (event) => {
    event.target.select();
  };

  const listenForEnterKey = (event) => {
    if (event.keyCode === 13) {
      saveChanges();
    }
  };

  const handleSelect = (camera) => {
    let new_camera = camera;
    new_camera.cameraName =
      cameraName != "Camera Name" ? cameraName : "Camera " + lastIndex;
    setIsAddingNewCamera(false);
    selectNewCamera(new_camera);

    // Clear to default
    setCameraName("Camera Name");
    setCameraHousing("");
    setViewingArea("");
    setCameraLens("");
    setNightVisionDist("");
  };

  if (isAddingNewCamera)
    return (
      <section className="border rounded lg:p-10 my-10 flex flex-row sm:justify-center lg:justify-start shadow items-center ease-linear transition-all duration-150 flex-wrap bg-gray-100 ">
        <div
          className="flex flex-col justify-center items-center sm:p-2 lg:p-5 border border-gray-300 lg:mr-3 my-10 rounded flex-shrink-0 min-w-min shadox-xl bg-white"
        >
          <SelectHousing
            cameraHousing={cameraHousing}
            setCameraHousing={setCameraHousing}
          />
          {isEditingName ? (
            <div className="flex flex-row justify-center mb-4">
              <div>
                <input
                  type="text"
                  value={cameraName}
                  onChange={handleNameChanges}
                  className="text-xs border border-gray-400 rounded mt-3 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  placeholder="Name your camera"
                  autoFocus
                  onFocus={selectInputValue}
                  onKeyDown={listenForEnterKey}
                />
                <div className="flex flex-row justify-center mt-2">
                  <button
                    onClick={cancelChanges}
                    className="mx-2 p-1 bg-red-500 rounded text-white focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                  >
                    <IoMdClose />
                  </button>
                  <button
                    onClick={saveChanges}
                    className="mx-2 p-1 bg-green-600 rounded text-white focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                  >
                    <BiCheck />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="mb-4 text-center">
              {cameraName}{" "}
              <BiEditAlt
                onClick={(e) => setIsEditingName(true)}
                className="inline cursor-pointer text-lg mb-1 ml-2"
              />
            </p>
          )}
          {/* Inputs */}
          <div className="w-max flex flex-col justify-center p-4 border rounded">
            <div className="mb-5 flex flex-row justify-between items-center">
              <span>Viewing Area: </span>
              <ViewingAreaDropdown
                viewingArea={viewingArea}
                setViewingArea={setViewingArea}
                cameraHousing={cameraHousing}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <span>Camera Lens:</span>
              <CameraLensDropdown
                cameraLens={cameraLens}
                setCameraLens={setCameraLens}
                viewingArea={viewingArea}
                cameraHousing={cameraHousing}
                cyberSecure={cyberSecure}
              />
            </div>
            {cameraLens == "Fixed Lens" && (
              <div className="mt-5 flex flex-row justify-between items-center">
                <span>Resolution:</span>
                <ResolutionRadio 
                  setResolution={setResolution}
                  cameraHousing={cameraHousing}
                  cyberSecure={cyberSecure}
                  viewingArea={viewingArea} 
                />
              </div>
            )}
            <div className="mt-5 flex flex-row justify-between items-center">
                <span>Cybersecure:</span>
                <CyberSecureToggle 
                  cyberSecure={cyberSecure} 
                  setCybersecure={setCyberSecure}
                  cameraLens={cameraLens} 
                  cameraHousing={cameraHousing}
                  resolution={resolution}
                />
              </div>
          </div>
          {window?.innerWidth < 800 && cameraHousing && (
            <p className="mt-6 italic">See camera options below</p>
          )}
        </div>

        {/* Recommended Cameras */}
        <div>
          <RecommendedCameras
            allProducts={allProducts}
            cameraHousing={cameraHousing}
            cameraLens={cameraLens}
            nightVisionDist={nightVisionDist}
            handleSelect={handleSelect}
            resolution={resolution}
            viewingArea={viewingArea}
            cyberSecure={cyberSecure}
          />
        </div>
      </section>
    );
  else return <></>;
}
