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
            <p className="font-light text-lg rounded p-3 bg-green-50 max-w-max">
                <span className="text-green-700">&#8594;</span> 
                You can change your selections by hovering the mouse over an item and clicking the <FaEdit className="fill-current text-yellow-600 inline mb-2 mx-1 text-2xl"/> button. 
                This will take you back to the related step.
            </p>
            <div className={"relative p-6 flex flex-col overflow-y-auto " + (cablesType == 'pre-made' ? 'lg:w-10/12 xl:w-9/12' : 'lg:w-9/12 xl:w-7/12') }>
                <div className="flex flex-col">
                    {/* NVR and Cable */}
                    <div className="flex flex-row justify-start mb-3">
                        {/* NVR */}
                        {selectedNVR &&
                            <VideoRecorderInCart selectedNVR={selectedNVR} cablesType={cablesType} goToStep={goToStep} />
                        }
                        {/* NVR's cable */}
                        {selectedNVR?.cable && cablesType == 'pre-made' && 
                            <CableInCart cable={selectedNVR.cable} goToStep={goToStep}/>
                        }
                        {/* Hard Drive */}
                        {selectedHardDrives.length != 0 &&
                            <HardDriveInCart hardDrive={selectedHardDrives[0]} cablesType={cablesType} goToStep={goToStep} index={0}/>
                        }
                    </div>
                    {/* Monitor(s) and HDMI(s) */}
                    {selectedMonitor != '' &&
                        <div className="flex flex-row justify-start mb-3">
                            <MonitorInCart selectedMonitor={selectedMonitor} cablesType={cablesType} goToStep={goToStep}/>

                            {selectedMonitor?.cable && 
                                <HDMIinCart selectedMonitor={selectedMonitor} cablesType={cablesType} goToStep={goToStep}/>
                            }
                        </div>
                    }
                    {/* Cameras, Cables and Mount */}
                    {cameras?.map((camera, index) => {
                        return(
                            <div className="flex flex-row justify-start mb-3" key={index}>
                                <CameraInCart camera={camera} cablesType={cablesType} goToStep={goToStep}/>
                                
                                {camera?.cable && cablesType == 'pre-made' &&
                                    <CableInCart cable={camera.cable} />
                                }

                                {camera?.mount && 
                                    <MountInCart camera={camera} cablesType={cablesType} goToStep={goToStep} />
                                }
                            </div>
                        )
                    })}
                    {/* Installation */}
                    {isInstallationSelected && 
                        <InstallationInCart homeOrBusiness={homeOrBusiness} cablesType={cablesType} cameras={cameras} goToStep={goToStep}/>
                    }
                    {/* Self-made cables */}
                    {cablesType == 'self-made' &&
                    <div className="flex flex-wrap justify-start">
                        {selectedSMProducts.map((product, index) => (
                                <SelfMadeProductInCart product={product} cablesType={cablesType} goToStep={goToStep} key={index}/>
                            ))
                        }
                    </div>
                    }
                    {/* Power Injectors */}
                    {selectedPowerInjectors.length != 0 && 
                        selectedPowerInjectors.map((product, index) => {
                            return(
                                <PowerInjectorInCart product={product} cablesType={cablesType} goToStep={goToStep} key={index}/>
                            )
                        })
                    }
                    {/* Extra Hard Drives */}
                    {selectedHardDrives != 0 && 
                        <div className="flex mb-3 flex-wrap">
                        {selectedHardDrives.map((hardDrive, index) => {
                            if(index != 0) return(
                                <HardDriveInCart hardDrive={hardDrive} cablesType={cablesType} goToStep={goToStep} key={index} index={index}/>
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