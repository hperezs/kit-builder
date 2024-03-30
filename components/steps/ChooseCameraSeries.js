import { useState } from "react";
import { BiCameraHome } from "react-icons/bi";
import ConfirmSeriesModal from "./ConfirmSeriesModal";
import CyberSecureModal from "./CyberSecureModal";
import ProVueModal from "./ProVueModal";

const selected = "bg-green-200 border-green-200 shadow-lg";

export default function ChooseCameraSeries({
  cyberSecure,
  setCyberSecure,
  isCartNotEmpty,
  clearCart,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newChoice, setNewChoice] = useState(cyberSecure);

  const selectNewChoice = (choice) => {
    if (isCartNotEmpty) {
      setNewChoice(choice);
      setIsModalOpen(true);
    } else {
      setCyberSecure(choice);
    }
  };

  const confirmChoice = () => {
    setIsModalOpen(false);
    clearCart();
    setCyberSecure(newChoice);
  };

  const cancelChoice = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-row justify-center">
        <section className="lg:h-80 my-10 flex flex-col lg:flex-row justify-around items-center 2xl:w-7/12 xl:w-9/12 md:w-10/12 ">
          <div>
            <span
              className={
                "home-business-option flex flex-col items-center text-center cursor-pointer sm:mx-3 lg:mx-0 sm:px-10 sm:py-8 lg:px-16 lg:py-8 border rounded border-gray-300 transition-colors transition-shadow " +
                (!cyberSecure
                  ? selected
                  : "hover:shadow-lg hover:border-green-200 hover:bg-green-50")
              }
              onClick={(e) => selectNewChoice(false)}
            >
              <div className="flex items-center" style={{ height: 67 }}>
                <img src="/images/ProVue_Transparent.png" width={200} />
              </div>
              <h5 className="text-xl mt-4 font-light">ProVue</h5>
            </span>
            <ProVueModal />
          </div>

          <div className="mt-10 lg:mt-0">
            <span
              className={
                "home-business-option flex flex-col items-center text-center cursor-pointer sm:mx-3 lg:mx-0 sm:px-10 sm:py-8 lg:px-16 lg:py-8 border rounded border-gray-300 transition-colors transition-shadow " +
                (cyberSecure
                  ? selected
                  : "hover:shadow-lg hover:border-green-200 hover:bg-green-50")
              }
              onClick={(e) => selectNewChoice(true)}
            >
              <img src="/images/CyberSecure_Transparent.png" width={200} />
              <h5 className="text-xl mt-4 font-light">Cyber Secure</h5>
            </span>
            <CyberSecureModal />
          </div>
        </section>
      </div>
      <ConfirmSeriesModal
        isOpen={isModalOpen}
        confirm={confirmChoice}
        cancel={cancelChoice}
      />
    </>
  );
}
