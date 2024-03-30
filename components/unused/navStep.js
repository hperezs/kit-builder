import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { MdFormatListNumbered } from "react-icons/md";
import { BsInfo, BsShieldShaded } from "react-icons/bs";
import { BiRuler } from "react-icons/bi";
import { RiCameraLensFill } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import { BsDot } from "react-icons/bs";

export default function NavStep({ step, setStep, index, currentStep }) {
  const base_styles = "border rounded-full px-3 py-1 mx-2 ";
  const hover_styles =
    "cursor-pointer transform transition-transform duration-400 ease-out hover:shadow hover:scale-150 hover:bg-green-100";

  return (
    <Tippy
      content={<span className="text-xl p-2">{step.label}</span>}
      theme="light"
    >
      <div
        onClick={step.isDisabled ? null : (e) => setStep(index + 1)}
        className={
          base_styles +
          (currentStep == index + 1
            ? "bg-green-600 text-white cursor-pointer "
            : step.isDisabled
              ? "cursor-not-allowed bg-gray-100 text-gray-600 "
              : hover_styles)
        }
      >
        {step.label == "Camera Count and Naming" ? (
          <span className="text-xl align-bottom">
            <MdFormatListNumbered />
          </span>
        ) : step.label == "Choosing the Right Cameras" ? (
          <span className="text-xl align-bottom">
            <BsInfo />
          </span>
        ) : step.label == "Select Camera Housings" ? (
          <BsShieldShaded className="mt-1" />
        ) : step.label == "Select Viewing Area" ? (
          <span className="text-xl align-bottom">
            <BiRuler />
          </span>
        ) : step.label == "Select Camera Lens" ? (
          <span className="text-xl align-bottom">
            <RiCameraLensFill />
          </span>
        ) : step.label == "Select Night Vision" ? (
          <span className="text-xl align-bottom">
            <CgDarkMode />
          </span>
        ) : (
          <span className="text-xl align-bottom">
            <BsDot />
          </span>
        )}
      </div>
    </Tippy>
  );
}
