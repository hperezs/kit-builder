import { useState, useEffect } from "react";

export default function CameraLensDropdown({
  cameraLens,
  setCameraLens,
  viewingArea,
  cameraHousing,
  cyberSecure,
}) {
  const [selectedValue, setSelectedValue] = useState(cameraLens);

  //Select defaults
  useEffect(() => {
    switch (viewingArea) {
      case "Under 60 ft":
        setCameraLens("Fixed Lens");
        setSelectedValue("Fixed Lens");
        break;
      case "Up to 180 ft":
        setSelectedValue("Motorized Zoom");
        setCameraLens("Motorized Zoom");
        break;
      case "200-1000 ft":
        setCameraLens("Motorized Zoom");
        break;
    }
  }, [viewingArea]);

  const classNames =
    "inline ml-3 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

  const handleChange = (event) => {
    let viewingArea = event.target.value;
    setSelectedValue(viewingArea);
    setCameraLens(event.target.value);
  };

  if (viewingArea == "Under 60 ft") {
    return (
      <div>
        <select
          disabled={
            cameraHousing == "bullet" ||
            (cameraHousing === "dome" && cyberSecure)
          }
          value={selectedValue}
          style={{ textAlignLast: "center" }}
          onChange={handleChange}
          className={
            classNames + (cameraHousing == "" ? "cursor-not-allowed" : "")
          }
        >
          <option>Fixed Lens</option>
          <option disabled={cameraHousing == "bullet"}>Manual Zoom</option>
          <option disabled>Motorized Zoom</option>
        </select>
      </div>
    );
  }

  if (viewingArea == "Up to 180 ft") {
    return (
      <div>
        <select
          value={selectedValue}
          style={{ textAlignLast: "center" }}
          onChange={handleChange}
          className={classNames + ""}
          disabled={cameraHousing === "dome" && cyberSecure}
        >
          <option disabled={cameraHousing == "bullet"}>Manual Zoom</option>
          <option>Motorized Zoom</option>
        </select>
      </div>
    );
  }

  if (viewingArea == "200-1000 ft") {
    return (
      <div>
        <select
          disabled
          value="Motorized Zoom"
          className={classNames + "bg-gray-50 cursor-not-allowed"}
        >
          <option>Motorized Zoom</option>
        </select>
      </div>
    );
  }

  return (
    <div className="inline">
      <span className="ml-4">2.8-12mm</span>
      <select
        value={selectedValue}
        onChange={handleChange}
        className={classNames}
      >
        <option
          value={"Manual Zoom"}
          disabled={viewingArea != "50-180 ft" ? true : false}
        >
          manual zoom
        </option>
        <option
          value={"Motorized Zoom"}
          disabled={viewingArea != "50-180 ft" ? true : false}
        >
          motorized zoom
        </option>
      </select>
    </div>
  );
}
