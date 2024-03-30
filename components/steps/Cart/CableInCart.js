import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { backstreet_domain } from "../../../lib/backstreet_domain";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { VscDebugDisconnect } from "react-icons/vsc";
import DeleteModal from "./DeleteModal";

export default function CableInCart({
  cable,
  goToStep,
  deleteCable,
  selectedNVR,
  camera,
  isReviewStep,
  cablesType,
}) {
  const [displayEditButton, setDisplayEditButton] = useState(false);

  if (!cable || cablesType != "pre-made")
    return (
      <div
        onMouseEnter={(e) => setDisplayEditButton(true)}
        onMouseLeave={(e) => setDisplayEditButton(false)}
        className={
          "relative flex flex-col items-center justify-center border rounded p-3 ml-3 sm:mr-3 lg:mr-0 sm:mt-3 lg:mt-0 lg:w-3/12 bg-white border-gray-300 shadow"
        }
      >
        <div style={{ height: "46px", width: "80px" }}>
          <div
            style={{ position: "relative", maxWidth: "100%", height: "100%" }}
          >
            <Image
              src={"/images/ethernet.png"}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="font-light mt-7">
          {cablesType == "none"
            ? "I have my own"
            : cablesType == "self-made"
              ? "Self-made cable"
              : "No cable added yet"}
        </div>
        {displayEditButton && isReviewStep && (selectedNVR || camera) && (
          <span
            transition-style="fade:in:faster"
            onClick={(e) => goToStep("cables")}
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
        "relative flex flex-col items-center justify-center border rounded p-3 ml-3 sm:mr-3 lg:mr-0 sm:mt-3 lg:mt-0 lg:w-3/12 bg-white border-gray-300 shadow"
      }
    >
      <div className="my-2 max-w-max flex flex-col justify-center items-center bg-white">
        <div style={{ height: "56px", width: "56px" }}>
          <div
            style={{ position: "relative", maxWidth: "100%", height: "100%" }}
          >
            <Image
              src={backstreet_domain + cable.imageLink}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>{cable.name}</p>
        <p className="font-light">{cable.sku} </p>
        <p className="font-normal text-green-600">${cable.price.toFixed(2)}</p>
      </div>
      {displayEditButton && (
        <span
          transition-style="fade:in:faster"
          onClick={(e) => goToStep("cables")}
          className={"absolute top-0 right-0 cursor-pointer m-2 "}
        >
          <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400" />
        </span>
      )}
      {displayEditButton && (
        <DeleteModal confirmDelete={() => deleteCable(camera, selectedNVR)} />
      )}
    </div>
  );
}
