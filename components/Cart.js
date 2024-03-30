import { useRef, useEffect, useState } from "react";
import { GrCart } from "react-icons/gr";
import CameraInCart from "./steps/Cart/CameraInCart";
import InstallationInCart from "./steps/Cart/InstallationInCart";
import VideoRecorderInCart from "./steps/Cart/VideoRecorderInCart";
import CableInCart from "./steps/Cart/CableInCart";
import HardDriveInCart from "./steps/Cart/HardDriveInCart";
import MonitorInCart from "./steps/Cart/MonitorInCart";
import HDMIinCart from "./steps/Cart/HDMIinCart";
import MountInCart from "./steps/Cart/MountInCart";
import SelfMadeProductInCart from "./steps/Cart/SelfMadeProductInCart";
import PowerInjectorInCart from "./steps/Cart/PowerInjectorInCart";
import ClearCart from "./steps/Cart/ClearCart";

export default function Cart({
  cameras,
  selectedNVR,
  selectedHardDrives,
  subtotal,
  selectedSMProducts,
  cablesType,
  selectedMonitor,
  selectedPowerInjectors,
  isInstallationSelected,
  homeOrBusiness,
  goToStep,
  deleteCamera,
  deleteNVR,
  deleteCable,
  deleteHardDrive,
  deleteMonitor,
  deleteHDMI,
  deleteMount,
  deletePowerInjector,
  deleteSMProduct,
  deleteInstallation,
  restartApp,
}) {
  const [showCart, setShowCart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let new_count = 0;
    cameras?.forEach((camera) => {
      new_count++;
      if (cablesType == "pre-made") {
        if (camera?.cable) new_count++;
      }
      if (camera?.mount) new_count++;
    });

    if (selectedNVR != "") new_count++;

    if (selectedNVR?.cable) new_count++;

    selectedHardDrives?.forEach((hardDrive) => {
      new_count++;
    });

    if (cablesType == "self-made") {
      selectedSMProducts?.forEach((product) => {
        new_count = new_count + parseInt(product.quantity);
      });
    }

    if (selectedMonitor != "") {
      new_count++;
      if (selectedMonitor?.cable) new_count++;
    }

    selectedPowerInjectors?.forEach((product) => {
      new_count = new_count + parseInt(product.quantity);
    });

    if (isInstallationSelected) new_count++;

    setCount(new_count);
  }, [
    cameras,
    selectedNVR,
    selectedHardDrives,
    selectedSMProducts,
    cablesType,
    selectedMonitor,
    selectedPowerInjectors,
    isInstallationSelected,
  ]);

  const cart = useRef();

  const handleClick = (e) => {
    if (!cart.current?.contains(e.target)) {
      setShowCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const cardCount_style = {
    paddingTop: "1px",
    top: "-12px",
    right: "-6px",
    height: "24px",
    width: count < 10 ? "24px" : "28px",
  };

  return (
    <>
      <button
        className="absolute top-7 right-0 text-3xl sm:mr-4 lg:mr-0 outline-none focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowCart(true)}
      >
        <GrCart />
        {count != 0 && (
          <div
            style={cardCount_style}
            className="absolute rounded-full shadow font-semibold bg-green-500 text-white text-sm"
          >
            {count}
          </div>
        )}
      </button>

      <div
        ref={cart}
        className={
          "fixed top-0 right-0 z-50 transition-width ease-in-out duration-500 " +
          (showCart
            ? "2xl:w-5/12 xl:w-7/12 lg:w-8/12 md:w-10/12 sm:w-12/12"
            : "w-0")
        }
      >
        {/*content*/}
        <div
          className={
            "h-screen shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none " +
            (showCart ? "" : "")
          }
        >
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl ml-3 font-semibold">Cart</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowCart(false)}
            >
              <span className="bg-transparent text-black h-6 w-6 text-4xl font-light block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className={"relative lg:p-6 flex-auto overflow-y-auto"}>
            <div className="flex flex-col">
              {/* NVR and Cable */}
              <div className="flex sm:flex-col lg:flex-row justify-start sm:mb-6 lg:mb-3 sm:bg-gray-200 lg:bg-white sm:py-5 lg:py-0">
                {/* NVR */}
                {
                  <VideoRecorderInCart
                    selectedNVR={selectedNVR}
                    cablesType={cablesType}
                    goToStep={() => {
                      setShowCart(false);
                      goToStep("NVR");
                    }}
                    deleteNVR={deleteNVR}
                  />
                }
                {/* NVR's cable */}
                {
                  <CableInCart
                    cable={selectedNVR.cable}
                    goToStep={() => {
                      setShowCart(false);
                      goToStep("cables");
                    }}
                    deleteCable={deleteCable}
                    selectedNVR={selectedNVR}
                    camera={null}
                    cablesType={cablesType}
                  />
                }
                {/* Hard Drive */}
                {
                  <HardDriveInCart
                    hardDrive={
                      selectedHardDrives?.length ? selectedHardDrives[0] : null
                    }
                    cablesType={cablesType}
                    goToStep={() => {
                      setShowCart(false);
                      goToStep("hard drives");
                    }}
                    index={0}
                    deleteHardDrive={deleteHardDrive}
                  />
                }
              </div>
              {/* Monitor(s) and HDMI(s) */}
              {selectedMonitor && (
                <div className="flex sm:flex-col lg:flex-row justify-start sm:mb-6 lg:mb-3 sm:bg-gray-200 lg:bg-white sm:py-5 lg:py-0">
                  <MonitorInCart
                    selectedMonitor={selectedMonitor}
                    cablesType={cablesType}
                    goToStep={() => {
                      setShowCart(false);
                      goToStep("addons");
                    }}
                    deleteMonitor={deleteMonitor}
                  />

                  {
                    <HDMIinCart
                      selectedMonitor={selectedMonitor}
                      cablesType={cablesType}
                      goToStep={() => {
                        setShowCart(false);
                        goToStep("addons");
                      }}
                      deleteHDMI={deleteHDMI}
                    />
                  }
                </div>
              )}
              {/* Cameras, Cables and Mount */}
              {cameras?.map((camera, index) => {
                return (
                  <div
                    className="flex sm:flex-col lg:flex-row justify-start sm:mb-6 lg:mb-3 sm:bg-gray-200 lg:bg-white sm:py-5 lg:py-0"
                    key={index}
                  >
                    <CameraInCart
                      camera={camera}
                      index={index}
                      cablesType={cablesType}
                      goToStep={() => {
                        setShowCart(false);
                        goToStep("cameras");
                      }}
                      deleteCamera={deleteCamera}
                    />

                    {
                      <CableInCart
                        cable={camera?.cable}
                        cablesType={cablesType}
                        goToStep={() => {
                          setShowCart(false);
                          goToStep("cables");
                        }}
                        deleteCable={deleteCable}
                        selectedNVR={null}
                        camera={camera}
                        cablesType={cablesType}
                      />
                    }

                    {
                      <MountInCart
                        camera={camera}
                        cablesType={cablesType}
                        goToStep={() => {
                          setShowCart(false);
                          goToStep("addons");
                        }}
                        deleteMount={deleteMount}
                        index={index}
                      />
                    }
                  </div>
                );
              })}
              {/* Installation */}
              {isInstallationSelected && (
                <InstallationInCart
                  homeOrBusiness={homeOrBusiness}
                  cablesType={cablesType}
                  cameras={cameras}
                  goToStep={() => {
                    setShowCart(false);
                    goToStep("installation");
                  }}
                  deleteInstallation={deleteInstallation}
                />
              )}
              {/* Self-made cables */}
              {cablesType == "self-made" && (
                <div className="flex flex-wrap justify-start">
                  {selectedSMProducts.map((product, index) => {
                    return (
                      <SelfMadeProductInCart
                        product={product}
                        cablesType={cablesType}
                        goToStep={() => {
                          setShowCart(false);
                          goToStep("cables");
                        }}
                        key={index}
                        deleteSMProduct={deleteSMProduct}
                      />
                    );
                  })}
                </div>
              )}
              {/* Power Injectors */}
              {selectedPowerInjectors?.length != 0 &&
                selectedPowerInjectors?.map((product, index) => {
                  return (
                    <PowerInjectorInCart
                      product={product}
                      cablesType={cablesType}
                      goToStep={() => {
                        setShowCart(false);
                        goToStep("addons");
                      }}
                      key={index}
                      deletePowerInjector={deletePowerInjector}
                      index={index}
                    />
                  );
                })}
              {/* Extra Hard Drives */}
              {selectedHardDrives?.length > 1 && (
                <div className="flex mb-3 flex-wrap">
                  {selectedHardDrives.map((hardDrive, index) => {
                    if (index != 0)
                      return (
                        <HardDriveInCart
                          hardDrive={hardDrive}
                          cablesType={cablesType}
                          goToStep={() => {
                            setShowCart(false);
                            goToStep("hard drives");
                          }}
                          key={index}
                          index={index}
                          deleteHardDrive={deleteHardDrive}
                        />
                      );
                  })}
                </div>
              )}
            </div>
          </div>
          {/*footer*/}
          <div
            className={
              "relative flex items-center lg:justify-center p-6 border-t " +
              (showCart ? "" : "hidden")
            }
          >
            <div className="sm:text-xl lg:text-2xl font-medium px-6 py-2">
              Subtotal:{" "}
              {subtotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
            <ClearCart restartApp={restartApp} setShowCart={setShowCart} />
          </div>
        </div>
      </div>
      <div
        className={
          "opacity-25 fixed inset-0 bg-black animate-gray " +
          (showCart ? "z-40" : "hidden")
        }
      ></div>
    </>
  );
}
