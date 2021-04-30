import Image from 'next/image'
import { useEffect, useState } from 'react'
import {FaCheckCircle} from 'react-icons/fa'

export default function RecommendedHardDrive({hardDrive, additionalHD, recommendedHDMultiplier, addToCart, setIsEditing, selectedHardDrives}) {

    const [ isHDAdded, setIsHDAdded ] = useState(false);
    const [ isAdditionalHDAdded, setIsAdditionalHDAdded ] = useState(false);

    useEffect(() => {
        console.log('running useEffect');
        let wasHDFound = false;
        let wasAdditionalHDFound = false;
        let wasHDFoundMultiplier = 0;

        selectedHardDrives.forEach(item => {
            if (recommendedHDMultiplier > 0) {
                if (item.sku == hardDrive.sku) {
                    wasHDFoundMultiplier++;
                    if(wasHDFoundMultiplier == recommendedHDMultiplier) wasHDFound = true;
                }
            } else {
                console.log('useEffect ran');
                if (item.sku == hardDrive.sku) wasHDFound = true;
                console.log(item.sku == hardDrive.sku);
            }

            if (item.sku == additionalHD.sku) wasAdditionalHDFound = true;
        })

        setIsHDAdded(wasHDFound);
        setIsAdditionalHDAdded(wasAdditionalHDFound);
    }, [selectedHardDrives, hardDrive, additionalHD])

    const selectButton_styles = "py-1 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    // If there is just one recommended HD
    if(additionalHD == '--') return(
        <div className="flex flex-col items-center border rounded shadow bg-gray-100">
            <div className="text-2xl font-light w-full p-5 text-center bg-white border">Recommended Hard Drive{recommendedHDMultiplier != 0 ? 's' : ''}</div>

            <div className="flex flex-col items-center justify-center">
                <div className={"relative mx-10 sm:mb-7 lg:mb-0 mt-7 px-6 py-10 flex flex-col justify-center items-center border rounded border-gray-300 bg-white shadow-lg " + (isHDAdded ? 'border-green-400' : '')}>
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
                        {!isHDAdded && 
                            <button onClick={e => {addToCart(hardDrive); setIsEditing(false); setIsHDAdded(true)}} className={selectButton_styles + 'px-5'}>Add to cart</button>
                        }
                    </div>
                    <span 
                        transition-style="fade:in"
                        className={"absolute top-0 right-0 p-2 " + (isHDAdded ? '' : 'hidden')}
                    >
                        <FaCheckCircle className="fill-current text-green-600 text-2xl"/>
                    </span>
                </div>
            </div>
        </div>
    )

    return(
        <div className="flex flex-col items-center border rounded shadow bg-gray-100">
            <span className="text-2xl font-light w-full p-5 text-center bg-white border">Recommended Hard Drives</span>

            <div className="flex flex-row justify-center mt-20">
                <div className="flex flex-col items-center justify-center">
                    <div 
                        style={{width: '178px', height: '240px'}} 
                        className={"relative p-6 ml-7 flex flex-col justify-center items-center border rounded border-gray-300 bg-white shadow-lg " + (isHDAdded ? 'border-green-400' : '')}
                    >
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
                            {!isHDAdded &&
                                <button onClick={e => {addToCart(hardDrive); setIsEditing(false)}} className={selectButton_styles + ' px-2'}>Add to cart</button>
                            }
                        </div>
                        <span 
                            transition-style="fade:in"
                            className={"absolute top-0 right-0 p-2 " + (isHDAdded ? '' : 'hidden')}
                        >
                            <FaCheckCircle className="fill-current text-green-600 text-2xl"/>
                        </span>
                    </div>
                </div>

                <span className="flex flex-col justify-center text-4xl mx-4 ">+</span>

                <div className="flex flex-col items-center justify-center flex-shrink-0">
                    <div 
                        style={{width: '178px', height: '240px'}} 
                        className={"relative p-6 mr-7 flex flex-col justify-center items-center border rounded border-gray-300 bg-white shadow-lg " + (isAdditionalHDAdded ? 'border-green-400' : '')}
                    >
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
                            {!isAdditionalHDAdded &&
                                <button onClick={e => {addToCart(additionalHD); setIsEditing(false)}} className={selectButton_styles + ' px-2'}>Add to cart</button>
                            }
                        </div>
                        <span 
                            transition-style="fade:in"
                            className={"absolute top-0 right-0 p-2 " + (isAdditionalHDAdded ? '' : 'hidden')}
                        >
                            <FaCheckCircle className="fill-current text-green-600 text-2xl"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}