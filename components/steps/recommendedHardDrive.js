import Image from 'next/image'
import { useEffect } from 'react'

export default function RecommendedHardDrive({hardDrive, additionalHD, recommendedHDMultiplier}) {


    // If there is just one recommended HD
    if(additionalHD == '--') return(
        <div className="flex flex-col items-center border rounded p-7 shadow">
            <span className="text-2xl font-light mb-5">Recommended Hard Drive</span>

            <div className="flex flex-col items-center justify-center">
                <div className="m-4 p-6 flex flex-col justify-center items-center border rounded border-gray-300 ">
                    <div style={{height: '186px', width: '220px'}}> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <Image
                                src={'/images/hard_drive_hero.jpg'}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-5">
                            {
                                recommendedHDMultiplier == 0 ? 
                                    <p>{hardDrive.name}</p>
                                :
                                    <p>{hardDrive.name}<span className="text-green-600 text-lg">{' x' + recommendedHDMultiplier}</span></p>
                            
                            }
                        <p className="font-light">{hardDrive.sku}</p>
                        <p className="text-green-600">${hardDrive.price?.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <div className="flex flex-col items-center border rounded p-7 shadow">
            <span className="text-2xl font-light mb-5">Recommended Hard Drives</span>

            <div className="flex flex-row items-center justify-center mt-4">
                <div className="flex flex-col items-center justify-center">
                    <div className="p-6 flex flex-col justify-center items-center border rounded border-gray-300 ">
                        <div style={{height: '94px', width: '110px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/hard_drive_hero.jpg'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-5">
                            {
                                recommendedHDMultiplier == 0 ? 
                                    <p>{hardDrive.name}</p>
                                :
                                    <p>{hardDrive.name}<span className="text-green-600 text-lg">{' x' + recommendedHDMultiplier}</span></p>
                            
                            }
                            <p className="font-light">{hardDrive.sku}</p>
                            <p className="text-green-600">${hardDrive.price?.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                <span className="text-4xl mx-4 ">+</span>

                <div className="flex flex-col items-center justify-center">
                    <div className="p-6 flex flex-col justify-center items-center border rounded border-gray-300 ">
                        <div style={{height: '94px', width: '110px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/hard_drive_hero.jpg'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-5">
                            <p>{additionalHD.name}</p>
                            <p className="font-light">{additionalHD.sku}</p>
                            <p className="text-green-600">${additionalHD.price?.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}