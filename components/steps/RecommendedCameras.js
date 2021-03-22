import { useEffect, useState } from "react"
import Image from 'next/image'
import { backstreet_domain } from '../../lib/backstreet_domain'

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

    const addToCart_styles = "px-3 py-1 border rounded bg-green-600 text-white text-sm mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <section className="flex flex-row items-center">
            {recommendedCameras.length != 0 &&
                recommendedCameras.map((camera, index) => {
                    return(
                        <div 
                            className="flex flex-col justify-start items-center flex-wrap my-10 mx-3 border rounded p-3 cursor-pointer hover:shadow-lg hover:border-green-300 ">
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                <div style={{height: '86px', width: '120px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <Image
                                            src={backstreet_domain + camera.imageLink}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="">{camera.sku} </p>
                                <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                                <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                                <p className="font-light mb-1">Resolution: {camera.resolution}</p>
                                <p className={"font-light mb-1 " + (camera.hasAudio ? 'text-blue-600' : '')}>{camera.hasAudio ? 'Built-in Microphone' : ' No Audio'}</p>
                                <p className="font-normal text-green-600">${camera.price?.$numberDecimal}</p>
                                <button className={addToCart_styles} onClick={e => handleSelect(camera)}>Select Camera</button>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}