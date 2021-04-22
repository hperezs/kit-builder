import CameraInCart from './Cart/CameraInCart'
import InstallationInCart from './Cart/InstallationInCart'
import VideoRecorderInCart from './Cart/VideoRecorderInCart'
import CableInCart from './Cart/CableInCart'
import HardDriveInCart from './Cart/HardDriveInCart'
import MonitorInCart from './Cart/MonitorInCart'
import HDMIinCart from './Cart/HDMIinCart'
import MountInCart from './Cart/MountInCart'
import SelfMadeProductInCart from './Cart/SelfMadeProductInCart'
import PowerInjectorInCart from './Cart/PowerInjectorInCart'
import {FaEdit} from 'react-icons/fa'
import DiscountsModal from './Cart/DiscountsModal'
import FreeItems from './Cart/FreeItems'

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
    goToStep,
    deleteCamera,
    deleteNVR,
    deleteCable,
    deleteHardDrive,
    deleteMonitor,
    deleteHDMI,
    deleteMount,
    deletePowerInjector,
    deleteSMProduct,
    deleteInstallation,
    freeProducts
}) {
    
    return(
        <section className="relative mt-10">
            <div className="flex justify-between">
                <p className="font-light text-xl rounded p-3 bg-green-50 max-w-max">
                    <span className="text-green-700 text-2xl mr-2">&#8594;</span> 
                    You can change your selections by hovering the mouse over an item and clicking the <FaEdit className="fill-current text-yellow-600 inline mb-2 mx-1 text-2xl"/> button. 
                    This will take you back to the related step.
                </p>

                <DiscountsModal />
            </div>

            <div className={"relative p-6 flex flex-col overflow-y-auto lg:w-10/12 xl:w-9/12"}>
                <div className="flex flex-col">
                    {/* NVR and Cable */}
                    <div className="flex flex-row justify-start mb-3">
                        {/* NVR */}
                        {
                            <VideoRecorderInCart selectedNVR={selectedNVR} cablesType={cablesType} goToStep={goToStep} deleteNVR={deleteNVR} isReviewStep={true} />
                        }
                        {/* NVR's cable */}
                        {
                            <CableInCart cable={selectedNVR.cable} goToStep={goToStep} deleteCable={deleteCable} selectedNVR={selectedNVR} camera={null} isReviewStep={true} cablesType={cablesType}/>
                        }
                        {/* Hard Drive */}
                        {
                            <HardDriveInCart hardDrive={selectedHardDrives[0]} cablesType={cablesType} goToStep={goToStep} index={0} deleteHardDrive={deleteHardDrive} isReviewStep={true}/>
                        }
                    </div>
                    {/* Monitor(s) and HDMI(s) */}
                    {selectedMonitor != '' &&
                        <div className="flex flex-row justify-start mb-3">
                            <MonitorInCart selectedMonitor={selectedMonitor} cablesType={cablesType} goToStep={goToStep} deleteMonitor={deleteMonitor} isReviewStep={true}/>

                            {
                                <HDMIinCart selectedMonitor={selectedMonitor} cablesType={cablesType} goToStep={goToStep} deleteHDMI={deleteHDMI} isReviewStep={true}/>
                            }
                        </div>
                    }
                    {/* Cameras, Cables and Mount */}
                    {cameras?.map((camera, index) => {
                        return(
                            <div className="flex flex-row justify-start mb-3" key={index}>
                                <CameraInCart camera={camera} cablesType={cablesType} goToStep={goToStep} deleteCamera={deleteCamera} index={index} isReviewStep={true}/>
                                
                                {
                                    <CableInCart cable={camera.cable} goToStep={goToStep} deleteCable={deleteCable} deleteCable={deleteCable} selectedNVR={null} camera={camera} isReviewStep={true} cablesType={cablesType}/>
                                }

                                {
                                    <MountInCart camera={camera} cablesType={cablesType} goToStep={goToStep} deleteMount={deleteMount} index={index} isReviewStep={true}/>
                                }
                            </div>
                        )
                    })}
                    <div className="flex flex-row">
                        <div className="flex flex-col w-6/12">
                            {/* Installation */}
                            {isInstallationSelected && 
                                <InstallationInCart homeOrBusiness={homeOrBusiness} cablesType={cablesType} cameras={cameras} goToStep={goToStep} deleteInstallation={deleteInstallation} isReviewStep={true}/>
                            }
                            {/* Self-made cables */}
                            {cablesType == 'self-made' &&
                            <div className="flex flex-wrap justify-start">
                                {selectedSMProducts.map((product, index) => (
                                        <SelfMadeProductInCart product={product} cablesType={cablesType} goToStep={goToStep} index={index} deleteSMProduct={deleteSMProduct} isReviewStep={true}/>
                                    ))
                                }
                            </div>
                            }
                            {/* Power Injectors */}
                            {selectedPowerInjectors.length != 0 && 
                                selectedPowerInjectors.map((product, index) => {
                                    return(
                                        <PowerInjectorInCart product={product} cablesType={cablesType} goToStep={goToStep} key={index} deletePowerInjector={deletePowerInjector} index={index} isReviewStep={true}/>
                                    )
                                })
                            }
                            {/* Extra Hard Drives */}
                            {selectedHardDrives.length > 1 && 
                                <div className="flex mb-3 flex-wrap">
                                {selectedHardDrives.map((hardDrive, index) => {
                                    if(index != 0) return(
                                        <HardDriveInCart hardDrive={hardDrive} cablesType={cablesType} goToStep={goToStep} key={index} index={index} deleteHardDrive={deleteHardDrive} isReviewStep={true}/>
                                    )
                                })}
                                </div>
                            }
                        </div>
                        {/* Free Items */}
                        { freeProducts && 
                            <FreeItems freeProducts={freeProducts} cablesType={cablesType} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}