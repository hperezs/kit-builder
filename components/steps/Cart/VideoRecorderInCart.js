import Image from "next/image";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import DeleteModal from "./DeleteModal";

export default function VideoRecorderInCart({
  selectedNVR,
  cablesType,
  goToStep,
  deleteNVR,
  isReviewStep = false,
}) {
  const [displayEditButton, setDisplayEditButton] = useState(false);

  if (!selectedNVR)
    return (
      <div
        onMouseEnter={(e) => setDisplayEditButton(true)}
        onMouseLeave={(e) => setDisplayEditButton(false)}
        className={
          "relative flex flex-col items-center justify-center border rounded py-7 bg-white border-gray-300 shadow flex-shrink-0 lg:w-6/12 sm:mx-3 lg:mx-0"
        }
      >
        <div style={{ height: "50px", width: "100px" }}>
          <div
            style={{ position: "relative", maxWidth: "100%", height: "100%" }}
          >
            <Image
              src={"/images/nvr.png"}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="font-light mt-3">No NVR added yet</div>
        {displayEditButton && isReviewStep && (
          <span
            transition-style="fade:in:faster"
            onClick={(e) => goToStep("NVR")}
            className={"absolute top-0 right-0 cursor-pointer m-2 "}
          >
            <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400" />
          </span>
        )}
      </div>
    );

  return (
    <div
      onMouseEnter={(e) => setDisplayEditButton(true)}
      onMouseLeave={(e) => setDisplayEditButton(false)}
      className={
        "relative flex flex-row justify-start items-center py-4 px-5 border rounded flex-shrink-0  bg-white border-gray-300 shadow  lg:w-6/12 sm:mx-3 lg:mx-0"
      }
    >
      <div className="m-3" style={{ height: "86px", width: "120px" }}>
        <div style={{ position: "relative", maxWidth: "100%", height: "100%" }}>
          <Image
            src={
              selectedNVR?.isCyberSecure
                ? "/images/cs_nvr_hero.jpg"
                : "/images/nvr-hero.jpg"
            }
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>
      <div className="ml-3 flex flex-col justify-center">
        <p className="mb-1">{selectedNVR.sku} </p>
        <p className="font-light mb-1">
          Supports up to {selectedNVR.channelCount} cameras
        </p>
        <p className="font-normal text-green-600">
          ${selectedNVR.price.$numberDecimal}
        </p>
      </div>
      {displayEditButton && (
        <span
          transition-style="fade:in:faster"
          onClick={(e) => goToStep("NVR")}
          className={"absolute top-0 right-0 cursor-pointer m-2 "}
        >
          <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400" />
        </span>
      )}
      {displayEditButton && (
        <DeleteModal confirmDelete={() => deleteNVR(selectedNVR)} />
      )}
    </div>
  );
}
