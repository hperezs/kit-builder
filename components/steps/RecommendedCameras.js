import { useEffect, useState } from "react"
import RecommendedCamera from './recommendedCamera'

export default function RecommendedCameras({allProducts, cameraHousing, cameraLens, nightVisionDist, handleSelect}) {
    const [recommendedCameras, setRecommendedCameras] = useState([]);

    useEffect(() => {
        let allProductsCopy = allProducts;
        let filteredProducts = allProductsCopy.filter(product => { 
                                    if(cameraHousing == 'bullet' && cameraLens == '2.8-12mm manual') return(
                                        cameraHousing == product.housingStyle &&
                                        product.cameraLens == '2.8-12mm manual'
                                    )                                            

                                    if(cameraHousing == 'bullet' && cameraLens == '2.8-12mm motorized') return(
                                        cameraHousing == product.housingStyle &&
                                        product.cameraLens.includes('motorized')
                                    )
            
                                    if(cameraHousing == 'dome' && cameraLens == '2.8-12mm motorized') return (
                                        cameraHousing == product.housingStyle &&
                                        (cameraLens == product.cameraLens || product.cameraLens?.includes('motorized'))
                                    )

                                    if(cameraHousing == 'dome' && cameraLens == '2.8-12mm manual')return(
                                        cameraHousing == product.housingStyle &&
                                        cameraLens == product.cameraLens
                                    )

                                    if(cameraHousing == 'dome' && cameraLens == '3.6mm fixed') return(
                                        cameraHousing == product.housingStyle &&
                                        cameraLens == product.cameraLens && 
                                        product.nightVision == '60ft' || product.nightVision == '70ft'
                                    )
                                    
                                    if(cameraHousing == 'ptz') return (
                                        cameraHousing == product.housingStyle && 
                                        nightVisionDist == product.nightVision
                                    )

                                    return(
                                        (cameraHousing == product.housingStyle) &&
                                        ((cameraLens == product.cameraLens) &&
                                        (nightVisionDist == product.nightVision) )
                                    )
                                })
        setRecommendedCameras(filteredProducts);
    }, [cameraHousing, cameraLens, nightVisionDist])

    return(
        <section className="flex flex-row items-center">
            {recommendedCameras.length != 0 &&
                recommendedCameras.map((camera, index) => {
                    return(
                        <RecommendedCamera camera={camera} handleSelect={handleSelect} key={index} />
                    )
                })
            }
        </section>
    )
}