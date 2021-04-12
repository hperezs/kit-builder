import Image from 'next/image'
import { backstreet_domain } from '../../lib/backstreet_domain'
import CameraInCart from './Cart/CameraInCart'
import InstallationInCart from './Cart/InstallationInCart'
import {FaEdit} from 'react-icons/fa'

export default function ReviewSystem({
    cameras, 
    selectedNVR, 
    selectedHardDrives, 
    subtotal, 
    selectedSMProducts, 
    cablesType, 
    selectedMonitor, 
    selectedPowerInjectors, 
    isInstallationSelected,
    homeOrBusiness,
    goToStep
}) {

    return(
        <section className="mt-10">
            <div className={"relative p-6 flex flex-col overflow-y-auto " + (cablesType == 'pre-made' ? 'lg:w-10/12 xl:w-9/12' : 'lg:w-10/12 xl:w-8/12') }>
                <div className="flex flex-col">
                    {/* NVR and Cable */}
                    <div className="flex flex-row justify-start mb-3">
                        {/* NVR */}
                        {selectedNVR &&
                        <div 
                            className={"relative flex flex-row justify-start items-center py-4 px-5 border rounded flex-shrink-0 bg-white border-gray-300 shadow  " 
                            + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')}
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
                            <span 
                                onClick={e => goToStep('NVR')}
                                className={"absolute top-0 right-0 cursor-pointer m-2 "}
                            >
                                <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                            </span>
                        </div>}
                        {/* NVR's cable */}
                        {selectedNVR?.cable && cablesType == 'pre-made' && 
                            <div className={"relative flex flex-col items-center justify-center border rounded p-3 ml-3 w-3/12 bg-white border-gray-300 shadow"}>
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
                                <span 
                                    onClick={e => goToStep('cables')}
                                    className={"absolute top-0 right-0 cursor-pointer m-2 "}
                                >
                                    <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                                </span>
                            </div>
                        }
                        {/* Hard Drive */}
                        {selectedHardDrives.length != 0 &&
                            <div className={"relative flex flex-row py-7 px-5 ml-3 justify-center items-center border rounded bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-3/12' : 'w-4/12')}>
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
                                    <p className="mb-1 text-center">{selectedHardDrives[0].name}</p>
                                    <p className="mb-1 font-light text-gray-600">{selectedHardDrives[0].sku}</p>
                                    <p className="font-normal text-green-600">${selectedHardDrives[0].price.toFixed(2)}</p>
                                </div>
                                <span 
                                    onClick={e => goToStep('hard drives')}
                                    className={"absolute top-0 right-0 cursor-pointer m-2 "}
                                >
                                    <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                                </span>
                            </div>
                        }
                    </div>
                    {/* Monitor(s) and HDMI(s) */}
                    {selectedMonitor != '' &&
                        <div className="flex flex-row justify-start mb-3">
                            <div 
                                className={"relative flex flex-row justify-start items-center py-4 px-5 border rounded flex-shrink-0 bg-white border-gray-300 shadow  " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')}
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
                                <span 
                                    onClick={e => goToStep('addons')}
                                    className={"absolute top-0 right-0 cursor-pointer m-2 "}
                                >
                                    <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                                </span>
                            </div>
                            {selectedMonitor?.cable && 
                            <div className={"relative flex flex-col items-center justify-center border rounded p-3 ml-3 bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-4/12')}>
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
                                <span 
                                    onClick={e => goToStep('addons')}
                                    className={"absolute top-0 right-0 cursor-pointer p-2 "}
                                >
                                    <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                                </span>
                            </div>
                            }
                        </div>
                    }
                    {/* Cameras, Cables and Mount */}
                    {cameras?.map((camera, index) => {
                        return(
                            <div className="flex flex-row justify-start mb-3">
                                {/* Camera */}
                                <CameraInCart camera={camera} index={index} cablesType={cablesType} goToStep={goToStep}/>
                                {/* Cable */}
                                {camera?.cable && cablesType == 'pre-made' &&
                                    <div className="relative flex flex-col items-center justify-center border rounded p-4 ml-3 w-3/12 bg-white border-gray-300 shadow min-h-max">
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
                                        <span 
                                            onClick={e => goToStep('cables')}
                                            className={"absolute top-0 right-0 cursor-pointer p-2 "}
                                        >
                                            <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                                        </span>
                                    </div>
                                }
                                {/* Mount */}
                                {camera?.mount && 
                                    <div className={"relative flex flex-col items-center justify-center border rounded p-4 ml-3 bg-white border-gray-300 shadow min-h-max " + (cablesType == 'pre-made' ? 'w-3/12' : 'w-4/12')}>
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
                                        <span 
                                            onClick={e => goToStep('addons')}
                                            className={"absolute top-0 right-0 cursor-pointer m-2 "}
                                        >
                                            <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                                        </span>
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
                                    className={"relative flex flex-row justify-start items-center mb-3 rounded p-5 border bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')} 
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
                                    <span 
                                        onClick={e => goToStep('cables')}
                                        className={"absolute top-0 right-0 cursor-pointer m-2 "}
                                    >
                                        <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
                                    </span>
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
                                    <div style={{width: '114px'}} className="flex flex-col items-center mx-7">
                                        <p className="text-center">{product.name}</p>
                                        <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center mx-7">
                                        <p>Quantity:</p>
                                        <span>{product.quantity}</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center mx-7">
                                        <p>Subtotal:</p>
                                        <span className="text-green-600">${(product.quantity * product.price).toFixed(2)}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* Installation */}
                    {isInstallationSelected && 
                        <InstallationInCart homeOrBusiness={homeOrBusiness} cablesType={cablesType} cameras={cameras} goToStep={goToStep}/>
                    }
                    {/* Extra Hard Drives */}
                    {selectedHardDrives != 0 && 
                        <div className="flex mb-3 flex-wrap">
                        {selectedHardDrives.map((hardDrive, index) => {
                            if(index != 0) return(
                                <div className={"flex flex-row py-7 px-5 mr-3 items-center border rounded bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-3/12' : 'w-4/12')}>
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
                            )
                        })}
                        </div>
                    }
                </div>
            </div>
            <div className={"flex items-center justify-center mb-7 p-6 border-t "}>
                <div className="text-2xl font-medium px-6 py-2">
                    Subtotal: {subtotal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                </div>
            </div>  
        </section>
    )
}