import { useRef, useEffect, useState } from "react";
import {GrCart} from 'react-icons/gr'
import Image from 'next/image'
import { backstreet_domain } from '../lib/backstreet_domain'

export default function Cart({cameras, selectedNVR, selectedHardDrives, subtotal, selectedSMProducts, cablesType, goToCameras}) {
    const [showCart, setShowCart] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count use effect ran');
        let new_count = 0;
        cameras.forEach(camera => {
            new_count++;
            if(cablesType == 'pre-made'){
                if(camera?.cable) new_count++
            }
        })

        if(selectedNVR != '') new_count++;

        selectedHardDrives.forEach(hardDrive => {
            new_count++;
        })

        if(cablesType == 'self-made') {
            selectedSMProducts.forEach(product => {
                new_count = new_count + parseInt(product.quantity)
            })
        }

        setCount(new_count);
    }, [cameras, selectedNVR, selectedHardDrives, selectedSMProducts, cablesType])

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
            

            <div ref={cart} className={"fixed top-0 right-0 z-50 transition-width ease-in-out duration-500 " + (showCart ? '2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-9/12' : 'w-0')}>
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
                    <div className={"relative p-6 flex-auto overflow-y-auto" + (showCart ? '' : 'hidden')}>
                        <div className="flex flex-col">
                            {/* NVR and Hard Drive */}
                            <div className="flex flex-row justify-start items-center mb-5">
                                {/* NVR */}
                                {selectedNVR != '' &&
                                <div className={"flex flex-row py-4 px-5 border rounded w-8/12 " + (showCart ? '' : 'hidden')}>
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
                                {/* Hard Drive(s) */}
                                {selectedHardDrives.length != 0 &&
                                    selectedHardDrives.map((hardDrive, index) => (
                                    <div className="flex flex-row py-7 px-5 ml-3 border rounded w-4/12">
                                        <div style={{height: '86px', width: '100px'}}> 
                                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                <Image
                                                    src={'/images/hard_drive_hero.jpg'}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    quality={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-3 flex flex-col justify-center items-center">
                                            <p className="mb-1">{hardDrive.sku}</p>
                                            <p className="font-normal text-green-600">${hardDrive.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                            {/* Cameras and Cables */}
                            {cameras?.map((camera, index) => {
                                return(
                                    <div className="flex flex-row items-center mb-5">
                                        {/* Camera */}
                                        <div className="flex flex-row px-5 py-4 items-center border rounded w-8/12 flex-shrink-0">
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
                                            <div className="flex flex-col items-center border rounded p-4 ml-3 w-4/12">
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
                                    </div>
                                )
                            })}
                            <div className="flex mt-10 flex-wrap">
                            {/* Self-made cables and possibly other tools */}
                            {cablesType == 'self-made' &&
                            selectedSMProducts.map((product, index) => {
                                return(
                                    <div className="flex flex-col justify-start items-center mx-5 mb-3 rounded p-3 border" key={index}>
                                        <div className="m-2 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                            <div style={{height: '86px', width: '120px'}}> 
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
                                        <div className="flex flex-col items-center">
                                            <p>{product.name}</p>
                                            <p className="font-light">{product.sku} </p>
                                            <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                                            <p>Qty: {product.quantity}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
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