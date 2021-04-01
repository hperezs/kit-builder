import Image from 'next/image'
import { useEffect } from 'react'

export default function RecommendedHardDrive({hardDrive, additionalHD, recommendedHDMultiplier}) {


    // If there is just one recommended HD
    if(additionalHD == '--') return(
        <div className="flex flex-col items-center border rounded shadow bg-gray-100">
            <div className="text-2xl font-light w-full p-5 text-center bg-white border">Recommended Hard Drive{recommendedHDMultiplier != 0 ? 's' : ''}</div>

            <div className="flex flex-col items-center justify-center">
                <div className="mx-10 mt-12 px-6 py-10 flex flex-col justify-center items-center border rounded border-gray-300 bg-white shadow-lg ">
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
                                    <p className="text-lg">{hardDrive.name}</p>
                                :
                                    <p>{hardDrive.name}<span className="text-green-600 text-xl">{' x' + recommendedHDMultiplier}</span></p>
                            
                            }
                        <p className="font-light text-lg">{hardDrive.sku}</p>
                        <p className="text-green-600 text-lg">${hardDrive.price?.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <div className="flex flex-col items-center border rounded shadow bg-gray-100">
            <span className="text-2xl font-light w-full p-5 text-center bg-white border">Recommended Hard Drives</span>

            <div className="flex flex-row justify-center mt-20">
                <div className="flex flex-col items-center justify-center">
                    <div style={{width: '178px', height: '240px'}} className="p-6 ml-7 flex flex-col justify-center items-center border rounded border-gray-300 bg-white shadow-lg ">
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

                <span className="flex flex-col justify-center text-4xl mx-4 ">+</span>

                <div className="flex flex-col items-center justify-center flex-shrink-0">
                    <div style={{width: '178px', height: '240px'}} className="p-6 mr-7 flex flex-col justify-center items-center border rounded border-gray-300 bg-white shadow-lg">
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