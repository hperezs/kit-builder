import { useState, useEffect } from "react";

export default function ResolutionRadio({
  setResolution,
  cameraHousing,
  cyberSecure,
  viewingArea,
}) {
  const [selectedValue, setSelectedValue] = useState("4K");

  const is3KDisabled =
    cyberSecure && cameraHousing === "bullet" && viewingArea === "Under 60 ft";

  useEffect(() => {
    if (cyberSecure && cameraHousing === "bullet") {
      setSelectedValue("4K");
      setResolution("4K");
    } else {
      setResolution(selectedValue);
    }
  }, [selectedValue, cyberSecure, cameraHousing]);

  const button_style =
    "px-4 py-2 mx-3 rounded border focus:outline-none focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 transition-colors duration-400 ease ";

  return (
    <div className="ml-5 flex">
      <button
        onClick={(e) => setSelectedValue("3K")}
        className={
          button_style +
          (selectedValue == "3K"
            ? "bg-green-100 text-green-700 border-green-400 font-semibold tracking-wider"
            : "") +
          (is3KDisabled ? " bg-gray-200 cursor-not-allowed" : "")
        }
        disabled={is3KDisabled}
      >
        3K
      </button>
      <button
        onClick={(e) => setSelectedValue("4K")}
        className={
          button_style +
          (selectedValue == "4K"
            ? "bg-green-100 text-green-700 border-green-400 font-semibold tracking-wider"
            : "")
        }
      >
        4K
      </button>
    </div>
  );
}
