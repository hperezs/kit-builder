import Image from "next/image";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { backstreet_domain } from "../../../lib/backstreet_domain";
import { FaTrashAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function PowerInjectors({
  powerInjectors,
  selectedPowerInjectors,
  addPowerInjector,
  deletePowerInjector,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [displayDetails, setDisplayDetails] = useState(false);

  useEffect(() => {
    document.getElementById("selectedPOE")?.scrollIntoView();
  }, [selectedPowerInjectors]);

  const card_styles =
    "relative flex flex-col justify-start items-center my-10 mx-3 rounded p-3 bg-white border shadow-xl hover:border-green-300 ";
  const selectButton_styles =
    "px-5 py-1 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

  return (
    <section
      id="power-injectors"
      className="sm:pt-10 lg:pt-0 flex flex-col items-center"
    >
      {!displayDetails && (
        <a
          transition-style="fade:in:faster"
          onClick={(e) => setDisplayDetails(true)}
          className="block text-green-600 text-center cursor-pointer text-lg hover:text-green-500"
        >
          What are Power Injectors used for?
        </a>
      )}

      {displayDetails && (
        <div
          transition-style="fade:in:faster"
          style={{ maxWidth: "450px" }}
          className="relative p-10 border shadow-lg sm:mx-4 lg:mx-0"
        >
          <p>
            <span className="text-green-600 font-semibold">
              Power injectors
            </span>{" "}
            are used to transmit power to the cameras when they will not be
            connected to the video recorder. A common use is to connect the
            cameras to the network via a power injector.
          </p>
          <span
            className="absolute top-0 right-0 text-gray-500 mt-4 mr-4 cursor-pointer"
            onClick={(e) => setDisplayDetails(false)}
          >
            <GrClose />
          </span>
        </div>
      )}

      <div
        transition-style="in:wipe:right"
        className="mt-10 border rounded p-10 bg-gray-100 sm:mx-7 lg:mx-0"
      >
        <div className="flex flex-row justify-center flex-wrap">
          {powerInjectors.length != 0 &&
            powerInjectors.map((product, index) => {
              return (
                <div
                  transition-style="fade:in"
                  className={card_styles}
                  key={index}
                >
                  <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                    <div
                      className={
                        "flex flex-row justify-center items-center " +
                        (!isLoading ? "hidden" : "")
                      }
                      style={{ height: "86px", width: "120px" }}
                    >
                      <ReactLoading type="spin" color="#a6e3b6" />
                    </div>
                    <div
                      style={
                        isLoading
                          ? { height: "0px", width: "0px" }
                          : { height: "86px", width: "120px" }
                      }
                    >
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
                          quality={20}
                          onLoad={(e) =>
                            setTimeout(
                              () => {
                                setIsLoading(false);
                              },
                              Math.floor(Math.random() * 2000),
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p>{product.name}</p>
                    <p className="font-light">{product.sku} </p>
                    <p className="font-normal text-green-600">
                      ${product.price.toFixed(2)}
                    </p>
                    <button
                      className={selectButton_styles}
                      onClick={(e) => addPowerInjector(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {selectedPowerInjectors.length != 0 && (
        <div
          id="selectedPOE"
          transition-style="in:square:center"
          className="flex flex-col items-center max-w-max mt-10 border border-gray-300 rounded p-10 shadow sm:mx-7 lg:mx-0"
        >
          <h4 className="font-light text-xl text-center">Your selection:</h4>
          <div className="flex flex-row justify-center max-w-max flex-wrap">
            {selectedPowerInjectors.length != 0 &&
              selectedPowerInjectors.map((product, index) => {
                return (
                  <div
                    transition-style="fade:in"
                    className={card_styles}
                    key={index}
                  >
                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                      <div
                        className={
                          "flex flex-row justify-center items-center " +
                          (!isLoading ? "hidden" : "")
                        }
                        style={{ height: "86px", width: "120px" }}
                      >
                        <ReactLoading type="spin" color="#a6e3b6" />
                      </div>
                      <div
                        style={
                          isLoading
                            ? { height: "0px", width: "0px" }
                            : { height: "86px", width: "120px" }
                        }
                      >
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
                            quality={20}
                            onLoad={(e) =>
                              setTimeout(
                                () => {
                                  setIsLoading(false);
                                },
                                Math.floor(Math.random() * 2000),
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>{product.name}</p>
                      <p className="font-light">{product.sku} </p>
                      <p className="font-normal text-green-600">
                        ${product.price.toFixed(2)}
                      </p>
                      <p>Qty: {product?.quantity}</p>
                    </div>
                    <span
                      onClick={(e) => deletePowerInjector(index)}
                      className={
                        "absolute bottom-0 right-0 cursor-pointer p-2 "
                      }
                    >
                      <FaTrashAlt className="fill-current text-red-600 text-xl hover:text-red-400" />
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
}
