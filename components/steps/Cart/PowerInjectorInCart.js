import Image from "next/image";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { backstreet_domain } from "../../../lib/backstreet_domain";
import DeleteModal from "./DeleteModal";

export default function PowerInjectorInCart({
  product,
  cablesType,
  goToStep,
  deletePowerInjector,
  index,
  isReviewStep,
}) {
  const [displayEditButton, setDisplayEditButton] = useState(false);

  return (
    <div
      style={{ minHeight: "148px" }}
      onMouseEnter={(e) => setDisplayEditButton(true)}
      onMouseLeave={(e) => setDisplayEditButton(false)}
      className={
        "relative flex flex-row justify-start items-center mb-3 rounded sm:p-2 lg:p-5 sm:mx-3 lg:mx-0 border bg-white border-gray-300 shadow " +
        (isReviewStep ? "" : "lg:w-7/12")
      }
    >
      <div className="xl:m-2 xl:p-3 flex flex-col justify-center items-center rounded border-gray-300 ">
        <div
          style={{
            height: "66px",
            width: window?.screen > 800 ? "100px" : "70px",
          }}
        >
          <div
            style={{ position: "relative", maxWidth: "100%", height: "100%" }}
          >
            <Image
              src={
                backstreet_domain +
                "/pub/media/catalog/product" +
                product.media_gallery_entries[0].file
              }
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </div>
      <div
        style={{ width: "114px" }}
        className="flex flex-col items-center xl:mx-7"
      >
        <p className="text-center">{product.name}</p>
        <p className="font-normal text-green-600">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center sm:text-sm sm:mx-2 lg:mx-7">
        <p>Quantity:</p>
        <span>{product.quantity}</span>
      </div>
      <div className="flex flex-col justify-center items-center sm:mx-2 lg:mx-7">
        <p>Subtotal:</p>
        <span className="text-green-600">
          ${(product.quantity * product.price).toFixed(2)}
        </span>
      </div>
      {displayEditButton && (
        <span
          transition-style="fade:in:faster"
          onClick={() => goToStep("addons")}
          className={"absolute top-0 right-0 cursor-pointer m-2 "}
        >
          <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400" />
        </span>
      )}
      {displayEditButton && (
        <DeleteModal
          confirmDelete={() => {
            deletePowerInjector(index);
          }}
        />
      )}
    </div>
  );
}
