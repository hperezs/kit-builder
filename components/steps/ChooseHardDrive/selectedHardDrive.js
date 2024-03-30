import Image from "next/image";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function SelectedHardDrive({
  hardDrive,
  index,
  isEditing,
  handleDelete,
}) {
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  const deleteHD = () => {
    setIsBeingDeleted(true);

    // Wait for the animation to complete
    setTimeout(() => {
      handleDelete(index);
      setIsBeingDeleted(false);
    }, 400);
  };

  return (
    <div className="flex flex-col items-center justify-center " key={index}>
      <div
        transition-style={
          isBeingDeleted ? "out:square:bottom-right" : "fade:in"
        }
        className="m-4 p-6 relative flex flex-col justify-center bg-white shadow-lg items-center rounded border border-gray-300"
      >
        <div style={{ height: "86px", width: "120px" }}>
          <div
            style={{ position: "relative", maxWidth: "100%", height: "100%" }}
          >
            <Image
              src={"/images/hard_drive_hero.jpg"}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <p>{hardDrive.name}</p>
          <p className="font-light">{hardDrive.sku}</p>
          <p className="text-green-600">${hardDrive.price.toFixed(2)}</p>
        </div>
        <span
          onClick={(e) => deleteHD()}
          className={
            "absolute bottom-0 right-0 cursor-pointer p-2 " +
            (!isEditing ? "hidden" : "")
          }
        >
          <FaTrashAlt className="fill-current text-red-600 text-xl hover:text-red-400" />
        </span>
      </div>
    </div>
  );
}
