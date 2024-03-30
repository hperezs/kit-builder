import { useState, useEffect } from "react";

export default function NightvisionRadio({ setNightVisionDist }) {
  const [selectedValue, setSelectedValue] = useState("70ft");

  useEffect(() => {
    setNightVisionDist(selectedValue);
  }, [selectedValue]);

  const radio_style =
    "mr-1 mb-1 border-gray-300 text-green-600 shadow-sm cursor-pointer focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50";

  return (
    <div className="ml-5">
      <input
        name="nightVision"
        type="radio"
        className={radio_style}
        value="60ft"
        checked={selectedValue == "60ft"}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <label
        className="mr-4 cursor-pointer"
        onClick={(e) => setSelectedValue("60ft")}
      >
        60 ft
      </label>

      <input
        name="nightVision"
        type="radio"
        className={radio_style}
        value="70ft"
        checked={selectedValue == "70ft"}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <label
        className="mr-4 cursor-pointer"
        onClick={(e) => setSelectedValue("70ft")}
      >
        70 ft
      </label>

      <input
        name="nightVision"
        type="radio"
        className={radio_style}
        value="90ft"
        checked={selectedValue == "90ft"}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <label
        className="mr-4 cursor-pointer"
        onClick={(e) => setSelectedValue("90ft")}
      >
        90 ft
      </label>
    </div>
  );
}
