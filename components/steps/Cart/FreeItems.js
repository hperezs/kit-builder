import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { backstreet_domain } from "../../../lib/backstreet_domain";

export default function FreeItems({ freeProducts }) {
  const [displayItems, setDisplayItems] = useState(false);

  const container = useRef();

  const handleClick = (e) => {
    if (!container.current?.contains(e.target)) {
      setDisplayItems(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={container}
      style={{ height: displayItems ? "680px" : "148px" }}
      className={
        "relative flex flex-col justify-center items-center mb-3 rounded px-5 py-7 border bg-white border-gray-300 shadow overflow-hidden transition-all duration-500 ease ml-3 sm:mr-3 lg:mr-0 flex-shrink lg:w-6/12"
      }
    >
      <h5
        style={{ width: "300px" }}
        className="text-lg border-b text-center pb-3"
      >
        Free Items included
      </h5>
      {!displayItems && (
        <a
          onClick={(e) => setDisplayItems(true)}
          className="font-light text-green-600 mt-3 cursor-pointer hover:text-green-500"
        >
          See Items
        </a>
      )}
      {displayItems &&
        freeProducts.map((product, index) => {
          let splitName = product.name.split("-");
          return (
            <div
              style={{ width: window?.screen > 800 ? "350px" : "300px" }}
              className="flex justify-start items-center border-b py-5 "
              key={index}
            >
              <div style={{ width: "75px", height: "75px" }}>
                <div
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    height: "100%",
                  }}
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
              <p className="sm:ml-3 lg:ml-7">
                <span className="text-green-600 font-semibold">
                  {splitName[0]}
                </span>{" "}
                - {splitName[1]}
              </p>
            </div>
          );
        })}
    </div>
  );
}
