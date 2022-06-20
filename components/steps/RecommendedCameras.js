import { useEffect, useState } from "react";
import RecommendedCamera from "./recommendedCamera";

export default function RecommendedCameras({
  allProducts,
  cameraHousing,
  cameraLens,
  nightVisionDist,
  handleSelect,
  resolution,
  viewingArea,
  cyberSecure,
}) {
  const [recommendedCameras, setRecommendedCameras] = useState([]);

  useEffect(() => {
    let allProductsCopy = allProducts;
    let filteredProducts = allProductsCopy.filter((product) => {
      if (cameraHousing == "dome" && cameraLens == "Motorized Zoom")
        return (
          cameraHousing == product.housingStyle &&
          (cameraLens == product.cameraLens ||
            product.cameraLens?.includes("motorized")) &&
          product.isCyberSecure === cyberSecure
        );

      if (cameraHousing == "dome" && cameraLens == "Manual Zoom")
        return (
          cameraHousing == product.housingStyle &&
          product.cameraLens === "2.8-12mm manual" &&
          product.isCyberSecure === cyberSecure
        );

      if (cameraHousing == "dome" && cameraLens == "Fixed Lens")
        return (
          cameraHousing == product.housingStyle &&
          (product.cameraLens == "3.6mm fixed" ||
            product.cameraLens == "2.8mm fixed" || product.cameraLens === "360° Panoramic") &&
          resolution == product.resolution &&
          product?.isCyberSecure == cyberSecure
        );
      if (cameraHousing == "bullet" && cameraLens == "Manual Zoom")
        return (
          cameraHousing == product.housingStyle &&
          product.cameraLens == "2.8-12mm manual" &&
          product.isCyberSecure === cyberSecure
        );

      if (
        cameraHousing == "bullet" &&
        cameraLens == "Motorized Zoom" &&
        viewingArea == "Under 60 ft" 
      )
        return (
          cameraHousing == product.housingStyle &&
          cameraLens == product.cameraLens &&
          product.isCyberSecure === cyberSecure
        );

      if (
        cameraHousing == "bullet" &&
        cameraLens == "Motorized Zoom" &&
        viewingArea == "Up to 180 ft" 
      )
        return (
          cameraHousing == product.housingStyle &&
          product.cameraLens.includes("motorized") &&
          product.isCyberSecure === cyberSecure
        );

      if (cameraHousing == "bullet" && cameraLens == "Fixed Lens")
        return (
          cameraHousing == product.housingStyle &&
          (product.cameraLens == "3.6mm fixed" ||
            product.cameraLens == "2.8mm fixed") &&
          resolution == product.resolution &&
          product.isCyberSecure === cyberSecure
        );

      if (cameraHousing == "ptz") return (
        cameraHousing == product.housingStyle &&
        product.isCyberSecure === cyberSecure);

      return (
        cameraHousing == product.housingStyle &&
        cameraLens == product.cameraLens &&
        nightVisionDist == product.nightVision &&
        product.isCyberSecure === cyberSecure
      );
    });

    setRecommendedCameras(filteredProducts);
  }, [cameraHousing, cameraLens, nightVisionDist, resolution, viewingArea, cyberSecure]);

  useEffect(() => {
    if (recommendedCameras?.length != 0) {
      if (screen.width > 800)
        document
          .getElementById("filtered-cameras")
          ?.scrollIntoView({ block: "center" });
    }
  }, [recommendedCameras]);

  return (
    <section
      id="filtered-cameras"
      className="flex flex-row sm:justify-center lg:justify-start items-center flex-wrap"
    >
      {recommendedCameras.length != 0 &&
        recommendedCameras.map((camera, index) => {
          return (
            <RecommendedCamera
              camera={camera}
              handleSelect={handleSelect}
              key={index}
            />
          );
        })}
    </section>
  );
}
