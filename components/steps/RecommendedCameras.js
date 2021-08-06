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
}) {
  const [recommendedCameras, setRecommendedCameras] = useState([]);

  useEffect(() => {
    console.log(cameraLens, cameraHousing, viewingArea);
    let allProductsCopy = allProducts;
    let filteredProducts = allProductsCopy.filter((product) => {
      if (cameraHousing == "dome" && cameraLens == "2.8-12mm motorized")
        return (
          cameraHousing == product.housingStyle &&
          (cameraLens == product.cameraLens ||
            product.cameraLens?.includes("motorized"))
        );

      if (cameraHousing == "dome" && cameraLens == "2.8-12mm manual")
        return (
          cameraHousing == product.housingStyle &&
          cameraLens == product.cameraLens
        );

      if (cameraHousing == "dome" && cameraLens == "3.6mm fixed")
        return (
          cameraHousing == product.housingStyle &&
          cameraLens == product.cameraLens &&
          resolution == product.resolution
        );
      if (cameraHousing == "bullet" && cameraLens == "2.8-12mm manual")
        return (
          cameraHousing == product.housingStyle &&
          product.cameraLens == "2.8-12mm manual"
        );

      if (
        cameraHousing == "bullet" &&
        cameraLens == "2.8-12mm motorized" &&
        viewingArea == "Under 60 ft"
      )
        return (
          cameraHousing == product.housingStyle &&
          cameraLens == product.cameraLens
        );

      if (
        cameraHousing == "bullet" &&
        cameraLens == "2.8-12mm motorized" &&
        viewingArea == "Up to 180 ft"
      )
        return (
          cameraHousing == product.housingStyle &&
          product.cameraLens.includes("motorized")
        );

      if (cameraHousing == "bullet" && cameraLens == "3.6mm fixed")
        return (
          cameraHousing == product.housingStyle &&
          cameraLens == product.cameraLens &&
          resolution == product.resolution
        );

      if (cameraHousing == "ptz") return cameraHousing == product.housingStyle;

      return (
        cameraHousing == product.housingStyle &&
        cameraLens == product.cameraLens &&
        nightVisionDist == product.nightVision
      );
    });
    setRecommendedCameras(filteredProducts);
    console.log(filteredProducts);
  }, [cameraHousing, cameraLens, nightVisionDist, resolution, viewingArea]);

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
