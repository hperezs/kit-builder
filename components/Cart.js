import { useRef, useEffect, useState } from "react";
import {GrCart} from 'react-icons/gr'
import Image from 'next/image'
import { backstreet_domain } from '../lib/backstreet_domain'

export default function Cart({
    cameras, 
    selectedNVR, 
    selectedHardDrives, 
    subtotal, selectedSMProducts, 
    cablesType, 
    goToCameras, 
    selectedMonitor, 
    selectedPowerInjectors, 
    isInstallationSelected,
    homeOrBusiness,
    goToInstallation
}) {
    const [showCart, setShowCart] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let new_count = 0;
        cameras.forEach(camera => {
            new_count++;
            if(cablesType == 'pre-made'){
                if(camera?.cable) new_count++
            }
            if(camera?.mount) new_count++;
        })

        if(selectedNVR != '') new_count++;

        if(selectedNVR?.cable) new_count++;

        selectedHardDrives.forEach(hardDrive => {
            new_count++;
        })

        if(cablesType == 'self-made') {
            selectedSMProducts.forEach(product => {
                new_count = new_count + parseInt(product.quantity)
            })
        }

        if(selectedMonitor != ''){
            new_count++
            if(selectedMonitor?.cable) new_count++;
        }

        selectedPowerInjectors.forEach(product => {
            new_count = new_count + parseInt(product.quantity);
        })

        if(isInstallationSelected) new_count++;

        setCount(new_count);
    }, [cameras, selectedNVR, selectedHardDrives, selectedSMProducts, cablesType, selectedMonitor, selectedPowerInjectors, isInstallationSelected])

    const cart = useRef();

    const handleClick = e => {
      if(!cart.current?.contains(e.target)){
        setShowCart(false);
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [])

    const seeMoreDetails = () => {
        setShowCart(false);
        goToCameras();
    }

    const cardCount_style = {paddingTop: '1px', top: '-12px', right: '-6px', height: '24px', width: (count < 10 ? '24px' : '28px')};

    return (
        <>
            <button
                className="absolute top-7 right-0 text-3xl outline-none focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowCart(true)}
            >
                <GrCart />
                {count != 0 && <div style={cardCount_style} className="absolute rounded-full shadow font-semibold bg-green-500 text-white text-sm">{count}</div>}
            </button>
            

            <div 
                ref={cart} 
                className={"fixed top-0 right-0 z-50 transition-width ease-in-out duration-500 " + 
                (showCart ? (cablesType == 'pre-made' ? '2xl:w-5/12 xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12' : '2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-8/12 sm:w-10/12') : 'w-0')}
            >
                {/*content*/}
                <div className={"h-screen shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none " + (showCart ? '' : '')}>
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl ml-3 font-semibold">
                            Cart
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowCart(false)}
                        >
                            <span className="bg-transparent text-black h-6 w-6 text-4xl font-light block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className={"relative p-6 flex-auto overflow-y-auto" }>
                        <div className="flex flex-col">
                            {/* NVR and Cable */}
                            <div className="flex flex-row justify-start mb-3">
                                {/* NVR */}
                                {selectedNVR != '' &&
                                <div 
                                    className={"flex flex-row justify-start items-center py-4 px-5 border rounded flex-shrink-0 bg-white border-gray-300 shadow  " + 
                                    (showCart ? '' : 'hidden') + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')}
                                >
                                    <div className="m-3" style={{height: '86px', width: '120px'}}> 
                                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                            <Image
                                                src={'/images/nvr-hero.jpg'}
                                                layout="fill"
                                                objectFit="contain"
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-3 flex flex-col justify-center">
                                        <p className="mb-1">{selectedNVR.sku} </p>
                                        <p className="font-light mb-1">Supports up to {selectedNVR.channelCount} cameras</p>
                                        <p className="font-normal text-green-600">${selectedNVR.price.$numberDecimal}</p>
                                    </div>
                                </div>}
                                {/* NVR's cable */}
                                {selectedNVR?.cable && cablesType == 'pre-made' && 
                                    <div className={"flex flex-col items-center justify-center border rounded p-3 ml-3 w-3/12 bg-white border-gray-300 shadow"}>
                                        <div className="my-2 max-w-max flex flex-col justify-center items-center bg-white">
                                            <div style={{height: '56px', width: '56px'}}> 
                                                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                    <Image
                                                        src={backstreet_domain + selectedNVR.cable.imageLink}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p>{selectedNVR.cable.name}</p>
                                            <p className="font-light">{selectedNVR.cable.sku} </p>
                                            <p className="font-normal text-green-600">${selectedNVR.cable.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                }
                                {/* Hard Drive */}
                                {selectedHardDrives.length != 0 &&
                                    selectedHardDrives.map((hardDrive, index) => (
                                            <div className={"flex flex-row py-7 px-5 ml-3 items-center border rounded bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-3/12' : 'w-4/12')}>
                                                <div style={{height: '66px', width: '80px'}}> 
                                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                        <Image
                                                            src={'/images/hard_drive_hero.jpg'}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            quality={100}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mx-1 flex flex-col justify-center items-center">
                                                    <p className="mb-1 text-center">{hardDrive.name}</p>
                                                    <p className="mb-1 font-light text-gray-600">{hardDrive.sku}</p>
                                                    <p className="font-normal text-green-600">${hardDrive.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                    ))
                                }
                            </div>
                            {/* Monitor(s) and HDMI(s) */}
                            {selectedMonitor != '' &&
                                <div className="flex flex-row justify-start mb-3">
                                    <div 
                                        className={"flex flex-row justify-start items-center py-4 px-5 border rounded flex-shrink-0 bg-white border-gray-300 shadow  " + 
                                        (showCart ? '' : 'hidden') + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')}
                                    >
                                        <div className="m-3" style={{height: '86px', width: '120px'}}> 
                                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                <Image
                                                    src={backstreet_domain + '/pub/media/catalog/product' + selectedMonitor?.media_gallery_entries[0].file}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    quality={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-3 flex flex-col justify-center">
                                            <p className="mb-1">{selectedMonitor.name} </p>
                                            <p className="font-light mb-1">{selectedMonitor.sku}</p>
                                            <p className="font-normal text-green-600">${selectedMonitor.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    {selectedMonitor?.cable && 
                                    <div className={"flex flex-col items-center justify-center border rounded p-3 ml-3 bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-4/12')}>
                                        <div className="my-2 max-w-max flex flex-col justify-center items-center bg-white">
                                            <div style={{height: '56px', width: '56px'}}> 
                                                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                    <Image
                                                        src={backstreet_domain + '/pub/media/catalog/product' + selectedMonitor.cable.media_gallery_entries[0].file}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p>{selectedMonitor.cable.name}</p>
                                            <p className="font-light">{selectedMonitor.cable.sku} </p>
                                            <p className="font-normal text-green-600">${selectedMonitor.cable.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    }
                                </div>
                            }
                            {/* Cameras, Cables and Mount */}
                            {cameras?.map((camera, index) => {
                                return(
                                    <div className="flex flex-row justify-start items-center mb-3">
                                        {/* Camera */}
                                        <div className={"flex flex-row px-5 py-4 items-center border rounded flex-shrink-0 bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')}>
                                            <div className="m-2 p-5 flex flex-col justify-center items-center  border-gray-300 ">
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
                                                <p className="text-lg mb-3 border-b border-gray-500 px-3 italic">{camera.cameraName}</p>
                                                <p className="mb-1">{camera.sku} </p>
                                                <a onClick={seeMoreDetails} className="text-green-600 font-light cursor-pointer hover:text-green-500">See more details</a>
                                            </div>
                                            <div className="flex flex-col items-center px-3 py-7 ml-5 rounded">
                                                <p>Price:</p>
                                                <span className="text-lg text-green-600">${camera.price?.$numberDecimal}</span>
                                            </div>
                                        </div>
                                        {/* Cable */}
                                        {camera?.cable && cablesType == 'pre-made' &&
                                            <div className="flex flex-col items-center border rounded p-4 ml-3 w-3/12 bg-white border-gray-300 shadow">
                                                <div className="my-2 max-w-max flex flex-col justify-center items-center bg-white ">
                                                    <div style={{height: '56px', width: '56px'}}> 
                                                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                            <Image
                                                                src={backstreet_domain + camera.cable.imageLink}
                                                                layout="fill"
                                                                objectFit="contain"
                                                                quality={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <p>{camera.cable.name}</p>
                                                    <p className="font-light">{camera.cable.sku} </p>
                                                    <p className="font-normal text-green-600">${camera.cable.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        }
                                        {/* Mount */}
                                        {camera?.mount && 
                                            <div className={"flex flex-col items-center border rounded p-4 ml-3 bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-3/12' : 'w-4/12')}>
                                                <div className="my-2 max-w-max flex flex-col justify-center items-center bg-white ">
                                                    <div style={{height: '56px', width: '56px'}}> 
                                                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                            <Image
                                                                src={backstreet_domain + '/pub/media/catalog/product' + camera.mount.media_gallery_entries[0].file}
                                                                layout="fill"
                                                                objectFit="contain"
                                                                quality={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <p>{camera.mount.name}</p>
                                                    <p className="font-light">{camera.mount.sku} </p>
                                                    <p className="font-normal text-green-600">${camera.mount.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                            {/* Self-made cables */}
                            {cablesType == 'self-made' &&
                            <div className="flex flex-wrap justify-start">
                                {selectedSMProducts.map((product, index) => {
                                    return(
                                        <div 
                                            className={"flex flex-row justify-start items-center mb-3 rounded p-5 border bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')} 
                                            key={index}
                                        >
                                            <div className="m-2 p-3 flex flex-col justify-center items-center rounded border-gray-300 ">
                                                <div style={{height: '66px', width: '100px'}}> 
                                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                        <Image
                                                            src={backstreet_domain + '/pub/media/catalog/product' + product.media_gallery_entries[0].file}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            quality={100}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: '114px'}} className="flex flex-col items-center ml-2">
                                                <p className="text-center">{product.name}</p>
                                                <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ml-7">
                                                <p>Quantity:</p>
                                                <span>{product.quantity}</span>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ml-7">
                                                <p>Subtotal:</p>
                                                <span className="text-green-600">${(product.quantity * product.price).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    )})}
                            </div>
                            }
                            {/* Power Injectors */}
                            {selectedPowerInjectors.length != 0 && 
                                selectedPowerInjectors.map((product, index) => {
                                    return(
                                        <div 
                                            className={"flex flex-row justify-start items-center mb-3 rounded p-5 border bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')} 
                                            key={index}
                                        >
                                            <div className="m-2 p-3 flex flex-col justify-center items-center rounded border-gray-300 ">
                                                <div style={{height: '66px', width: '100px'}}> 
                                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                        <Image
                                                            src={backstreet_domain + '/pub/media/catalog/product' + product.media_gallery_entries[0].file}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            quality={100}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{width: '114px'}} className="flex flex-col items-center ml-2">
                                                <p className="text-center">{product.name}</p>
                                                <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ml-7">
                                                <p>Quantity:</p>
                                                <span>{product.quantity}</span>
                                            </div>
                                            <div className="flex flex-col justify-center items-center ml-7">
                                                <p>Subtotal:</p>
                                                <span className="text-green-600">${(product.quantity * product.price).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* Installation */}
                            {isInstallationSelected && 
                                <div className={"flex flex-row justify-start items-center mb-3 rounded p-5 border bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')}>
                                    <div className="m-2 p-3 flex flex-col justify-center items-center rounded border-gray-300 ">
                                        <div className="bg-blue-100 rounded" style={{height: '66px', width: '100px'}}> 
                                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center ml-2">
                                        <p className="text-center text-lg">{(homeOrBusiness == 'home' ? 'Home' : 'Business') + ' Installation'}</p>
                                        <a onClick={e => {goToInstallation(); setShowCart(false)}} className="font-light text-green-700 cursor-pointer hover:text-green-500">See details</a>
                                    </div>
                                    <div style={{width: '114px'}} className="flex flex-col items-center ml-2">
                                        <p className="font-normal ml-5 text-green-600">{((homeOrBusiness == 'home' ? 299 : 349) + (cameras.length * 212.50)).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
                                    </div>
                                </div>
                            }
                        </div>  
                    </div>
                    {/*footer*/}
                    <div className={"flex items-center justify-center p-6 border-t " + (showCart ? '' : 'hidden')}>
                        <div className="text-2xl font-medium px-6 py-2">
                            Subtotal: {subtotal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"opacity-25 fixed inset-0 bg-black " + (showCart ? 'z-40' : 'hidden')}></div>
        </>
    );
}