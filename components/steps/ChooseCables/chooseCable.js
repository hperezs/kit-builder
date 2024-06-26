import { useEffect, useState } from "react";
import Image from "next/image";
import { backstreet_domain } from "../../../lib/backstreet_domain";
import CableProduct from "./cableProduct";
import CableLengthDropdown from "../dropdowns/cableLengthDropdown";
import CableLocationDropdown from "../dropdowns/cableLocationDropdown";
import CableColorDropdown from "../dropdowns/cableColorDropdown";
import Camera from "../Camera";

export default function ChooseCable({
  camera,
  selectedNVR,
  index,
  indoorCables,
  outdoorCables,
  selectCable,
  deleteCable,
  deleteCamera,
  updateCameraName,
  duplicateCamera,
  lastIndex,
}) {
  const [cableLength, setCableLength] = useState(25);
  const [indoorOrOutdoor, setIndoorOrOutdoor] = useState("indoor");
  const [cableColor, setCableColor] = useState("White");
  const [selectedCable, setSelectedCable] = useState(
    camera ? camera?.cable : selectedNVR?.cable,
  );
  const [isChoosing, setIsChoosing] = useState(
    !camera?.cable && !selectedNVR?.cable,
  );
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (cableLength == 1000) {
      setCableColor("Black");
    }
  }, [cableLength]);

  useEffect(() => {
    setScreenWidth(window?.innerWidth);
  }, []);

  const handleSelect = (cable) => {
    let selectedCable = {
      id: cable.id,
      sku: cable.sku,
      name: cable.name,
      price: cable.price,
      imageLink:
        "/pub/media/catalog/product" + cable.media_gallery_entries[0].file,
    };

    selectCable(selectedCable, camera, selectedNVR);
    setSelectedCable(selectedCable);
    setIsChoosing(false);
  };

  const selected_card_styles =
    "flex flex-col justify-start items-center bg-white mb-3 border-green-400 rounded p-3 border shadow-lg";

  return (
    <div
      style={
        screenWidth > 800
          ? { height: "515px", width: "744px" }
          : { height: "auto" }
      }
      className={
        "relative flex flex-row sm:flex-wrap lg:flex-nowrap justify-center sm:items-start lg:items-center sm:mx-4 lg:mx-0 mr-auto mb-10 bg-gray-100 p-4 " +
        (camera?.cable
          ? "border border-green-400"
          : selectedNVR
            ? ""
            : "border-yellow-500 border-2 border-opacity-60")
      }
    >
      {/* Optional note for NVR's */}
      {selectedNVR && isChoosing && (
        <div className="absolute bottom-10 font-light text-center">
          <span className="block text-center text-lg">*Optional</span>
          <span className="block text-center">
            If you would like to enable remote viewing, the NVR will need to be
            connected to the network.
          </span>
        </div>
      )}

      {camera && (
        <Camera
          camera={camera}
          key={index}
          index={index}
          deleteCamera={deleteCamera}
          updateCameraName={updateCameraName}
          duplicateCamera={duplicateCamera}
          lastIndex={lastIndex}
        />
      )}

      {selectedNVR && (
        <div
          className={
            "flex flex-col justify-start items-center mx-3 rounded px-3 py-7 border bg-white shadow-lg"
          }
        >
          <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
            <div style={{ height: "86px", width: "120px" }}>
              <div
                style={{
                  position: "relative",
                  maxWidth: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={"/images/nvr-hero.jpg"}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mb-3">
            <p className="">{selectedNVR.sku} </p>
            <p className="font-light mb-1">
              Supports up to {selectedNVR.channelCount} cameras
            </p>
            <p className="font-normal text-green-600">
              ${selectedNVR.price.$numberDecimal}
            </p>
          </div>
        </div>
      )}

      {isChoosing && (
        <div className="flex flex-row sm:flex-wrap lg:flex-nowrap justify-center sm:mt-7 lg:mt-0">
          <div className="flex flex-col justify-center items-center lg:mr-5 ">
            <label className="mb-3">Select cable location:</label>
            <CableLocationDropdown setCableLocation={setIndoorOrOutdoor} />

            <label className="mt-7 mb-3">Select cable length:</label>
            <CableLengthDropdown
              setCableLength={setCableLength}
              indoorOrOutdoor={indoorOrOutdoor}
              selectedNVR={selectedNVR}
            />

            {indoorOrOutdoor == "outdoor" && cableLength != 1000 && (
              <div className="flex flex-col items-center mt-7">
                <label className="mb-3">Select cable color:</label>
                <CableColorDropdown setCableColor={setCableColor} />
              </div>
            )}
          </div>

          {indoorCables.length != 0 && indoorOrOutdoor == "indoor" && (
            <div className={selectedNVR ? "sm:mb-24 lg:mb-0" : ""}>
              {indoorCables.map((cable, index) => {
                let length = cable.sku.split("-")[1];
                if (cableLength == length)
                  return (
                    <CableProduct
                      cable={cable}
                      handleSelect={handleSelect}
                      displayNote={selectedNVR}
                      key={index}
                    />
                  );
              })}
            </div>
          )}

          {outdoorCables.length != 0 && indoorOrOutdoor == "outdoor" && (
            <div className="flex flex-row justify-start">
              {outdoorCables.map((cable, index) => {
                // White cables have W at the end of the sku so the W has to be cut off first
                if (cableColor == "White") {
                  if (cable.sku.split("").splice(-1)[0] == "W") {
                    let sku_no_W = cable.sku.split("");
                    sku_no_W.pop();
                    let productLength = sku_no_W.join("").split("6-")[1];
                    if (cableLength == productLength)
                      return (
                        <CableProduct
                          cable={cable}
                          handleSelect={handleSelect}
                          key={index}
                        />
                      );
                  }
                } else {
                  // Black cables are fine with this logic
                  let productLength = cable.sku.split("6-")[1];
                  if (cableLength == productLength)
                    return (
                      <CableProduct
                        cable={cable}
                        handleSelect={handleSelect}
                        key={index}
                      />
                    );
                }
              })}
            </div>
          )}
        </div>
      )}

      {!isChoosing && (
        <div
          transition-style="in:square:center"
          style={screenWidth > 800 ? { width: "350px" } : { width: "275px" }}
          className="flex flex-col items-center justify-center p-5"
        >
          <p className="font-light text-center text-lg mb-3">Your selection:</p>
          <div className={selected_card_styles}>
            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 bg-white ">
              <div style={{ height: "86px", width: "120px" }}>
                <div
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={backstreet_domain + selectedCable.imageLink}
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p>{selectedCable.name}</p>
              <p className="font-light">{selectedCable.sku} </p>
              <p className="font-normal text-green-600">
                ${selectedCable.price.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={(e) => {
              setIsChoosing(true);
              deleteCable(camera, selectedNVR);
            }}
            className="uppercase text-sm tracking-wide font-semibold text-green-600 border border-green-600 my-2 px-3 py-2 rounded hover:text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500"
          >
            Change
          </button>
        </div>
      )}
    </div>
  );
}
