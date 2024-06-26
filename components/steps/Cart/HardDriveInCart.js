import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { backstreet_domain } from "../../../lib/backstreet_domain";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { RiHardDriveLine } from "react-icons/ri";
import DeleteModal from "./DeleteModal";

export default function HardDriveInCart({
  hardDrive,
  cablesType,
  goToStep,
  index,
  deleteHardDrive,
  isReviewStep,
}) {
  const [displayEditButton, setDisplayEditButton] = useState(false);

  if (!hardDrive)
    return (
      <div
        onMouseEnter={(e) => setDisplayEditButton(true)}
        onMouseLeave={(e) => setDisplayEditButton(false)}
        className={
          "relative flex flex-col items-center justify-center border rounded py-7 ml-3 sm:mr-3 lg:mr-0 sm:mt-3 lg:mt-0 lg:w-3/12 bg-white border-gray-300 shadow w-3/12"
        }
      >
        <div style={{ height: "46px", width: "80px" }}>
          <div
            style={{ position: "relative", maxWidth: "100%", height: "100%" }}
          >
            <Image
              src={"/images/hardDrive.png"}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="font-light mt-5">No hard drive added yet</div>
        {displayEditButton && isReviewStep && (
          <span
            transition-style="fade:in:faster"
            onClick={(e) => goToStep("hard drives")}
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
        "relative flex flex-row py-7 px-5 justify-evenly items-center border rounded bg-white border-gray-300 shadow sm:mr-3 lg:mr-0 sm:mt-3 lg:mt-0 " +
        (index == 0
          ? "lg:w-3/12 ml-3"
          : isReviewStep
            ? "w-full mb-3"
            : "lg:w-6/12 mr-3 mb-3")
      }
    >
      <div style={{ height: "66px", width: "80px" }}>
        <div style={{ position: "relative", maxWidth: "100%", height: "100%" }}>
          <Image
            src={"/images/hard_drive_hero.jpg"}
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>
      <div className="mx-1 flex flex-col justify-center items-center">
        <p className="mb-1 text-center">{hardDrive.name}</p>
        <p className="mb-1 font-light text-gray-600">{hardDrive.sku}</p>
        <p className="font-normal text-green-600">
          ${hardDrive.price.toFixed(2)}
        </p>
      </div>
      {displayEditButton && (
        <span
          transition-style="fade:in:faster"
          onClick={(e) => goToStep("hard drives")}
          className={"absolute top-0 right-0 cursor-pointer m-2 "}
        >
          <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400" />
        </span>
      )}
      {displayEditButton && (
        <DeleteModal
          confirmDelete={() => {
            deleteHardDrive(index);
          }}
        />
      )}
    </div>
  );
}
