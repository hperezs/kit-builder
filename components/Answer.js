import HomeOrBusiness from './steps/homeOrBusiness'
import ChooseCameras from './steps/ChooseCameras.js'
import ChooseVideoRecorder from './steps/ChooseVideoRecorder'
import HowToChooseCameras from './steps/howToChooseCameras'
import SelectCableType from './steps/SelectCableType'
import ChooseCables from './steps/ChooseCables'
import ChooseHardDrive from './steps/ChooseHardDrive'
import SelectAddons from './steps/SelectAddons'
import ChooseInstallation from './steps/ChooseInstallation'
import ReviewSystem from './steps/ReviewSystem'

export default function Answer({
    currentStep,
    cameras,
    homeOrBusiness,
    setHomeOrBusiness, 
    allProducts,
    indoorCables,
    outdoorCables,
    selfMadeProducts,
    videoRecorders,
    hardDrives,
    selectNewCamera,
    deleteCamera,
    updateCameraName,
    selectedNVR,
    selectNVR,
    deleteNVR,
    selectedHardDrives,
    addHardDrive,
    deleteHardDrive,
    cablesType,
    selectCablesType,
    selectCable,
    deleteCable,
    selectSMProducts,
    selectedSMProducts,
    deleteSMProduct,
    updateSMProductQuantity,
    monitorProducts,
    mountProducts,
    powerInjectors,
    addMonitor,
    addHDMI,
    addMount,
    deleteMount,
    selectedMonitor,
    deleteMonitor,
    deleteHDMI,
    selectedPowerInjectors,
    addPowerInjector,
    deletePowerInjector,
    isInstallationSelected,
    addInstallation,
    deleteInstallation,
    subtotal,
    goToStep
    }) {

    // Skip choose cables step if user selected "I have my own"
    if(cablesType == 'none'){
        switch(currentStep) {
            case 1:
                return(
                    <HomeOrBusiness homeOrBusiness={homeOrBusiness} setHomeOrBusiness={setHomeOrBusiness}/>
                )
            case 2:
                return(
                    <HowToChooseCameras />
                )
            case 3:
                return(
                    <ChooseCameras 
                        allProducts={allProducts} 
                        selectNewCamera={selectNewCamera} 
                        cameras={cameras} 
                        deleteCamera={deleteCamera} 
                        updateCameraName={updateCameraName}
                    />
                )
            case 4: 
                return(
                    <ChooseVideoRecorder 
                        cameras={cameras} 
                        videoRecorders={videoRecorders} 
                        selectedNVR={selectedNVR} 
                        selectNVR={selectNVR}
                    />
                )
            case 5: 
                return(
                    <ChooseHardDrive 
                        hardDrives={hardDrives} 
                        cameras={cameras} 
                        addHardDrive={addHardDrive} 
                        selectedHardDrives={selectedHardDrives}
                        deleteHardDrive={deleteHardDrive}
                    />
                )
            case 6:
                return(
                    <SelectCableType cablesType={cablesType} selectCablesType={selectCablesType}/>
                )
            case 7:
                return(
                    <SelectAddons 
                        monitorProducts={monitorProducts}
                        mountProducts={mountProducts}
                        powerInjectors={powerInjectors}
                        cameras={cameras}
                        addMonitor={addMonitor}
                        addHDMI={addHDMI}
                        addMount={addMount}
                        deleteMount={deleteMount}
                        selectedMonitor={selectedMonitor}
                        deleteMonitor={deleteMonitor}
                        deleteHDMI={deleteHDMI}
                        selectedPowerInjectors={selectedPowerInjectors}
                        addPowerInjector={addPowerInjector}
                        deletePowerInjector={deletePowerInjector}
                    />
                )
            case 8:
                return(
                    <ChooseInstallation homeOrBusiness={homeOrBusiness} cameras={cameras} isInstallationSelected={isInstallationSelected} addInstallation={addInstallation}/>
                )
            case 9:
                return(
                    <ReviewSystem 
                        cameras={cameras} 
                        selectedNVR={selectedNVR} 
                        selectedHardDrives={selectedHardDrives} 
                        subtotal={subtotal}
                        selectedSMProducts={selectedSMProducts}
                        cablesType={cablesType}
                        selectedMonitor={selectedMonitor}
                        selectedPowerInjectors={selectedPowerInjectors}
                        isInstallationSelected={isInstallationSelected}
                        homeOrBusiness={homeOrBusiness}
                        goToStep={goToStep}
                        deleteCamera={deleteCamera}
                        deleteNVR={deleteNVR}
                        deleteCable={deleteCable}
                        deleteHardDrive={deleteHardDrive}
                        deleteMonitor={deleteMonitor}
                        deleteHDMI={deleteHDMI}
                        deleteMount={deleteMount}
                        deletePowerInjector={deletePowerInjector}
                        deleteSMProduct={deleteSMProduct}
                        deleteInstallation={deleteInstallation}
                    />
                )
        }    
    }
    
    switch(currentStep) {
        case 1:
            return(
                <HomeOrBusiness homeOrBusiness={homeOrBusiness} setHomeOrBusiness={setHomeOrBusiness}/>
            )
        case 2:
            return(
                <HowToChooseCameras />
            )
        case 3:
            return(
                <ChooseCameras 
                    allProducts={allProducts} 
                    selectNewCamera={selectNewCamera} 
                    cameras={cameras} 
                    deleteCamera={deleteCamera} 
                    updateCameraName={updateCameraName}
                />
            )
        case 4: 
            return(
                <ChooseVideoRecorder 
                    cameras={cameras} 
                    videoRecorders={videoRecorders} 
                    selectedNVR={selectedNVR} 
                    selectNVR={selectNVR}
                />
            )
        case 5: 
            return(
                <ChooseHardDrive 
                    hardDrives={hardDrives} 
                    cameras={cameras} 
                    addHardDrive={addHardDrive} 
                    selectedHardDrives={selectedHardDrives}
                    deleteHardDrive={deleteHardDrive}
                />
            )
        case 6:
            return(
                <SelectCableType cablesType={cablesType} selectCablesType={selectCablesType}/>
            )
        case 7: 
            return(
                <ChooseCables 
                    cablesType={cablesType} 
                    cameras={cameras} 
                    selectedNVR={selectedNVR}
                    indoorCables={indoorCables}
                    outdoorCables={outdoorCables}  
                    selfMadeProducts={selfMadeProducts}
                    selectCable={selectCable}
                    deleteCable={deleteCable}
                    selectSMProducts={selectSMProducts}
                    selectedSMProducts={selectedSMProducts}
                    deleteCamera={deleteCamera} 
                    updateCameraName={updateCameraName}
                    deleteSMProduct={deleteSMProduct}
                    updateSMProductQuantity={updateSMProductQuantity}
                />
            )
        case 8:
            return(
                <SelectAddons 
                    monitorProducts={monitorProducts}
                    mountProducts={mountProducts}
                    powerInjectors={powerInjectors}
                    cameras={cameras}
                    addMonitor={addMonitor}
                    addHDMI={addHDMI}
                    addMount={addMount}
                    deleteMount={deleteMount}
                    selectedMonitor={selectedMonitor}
                    deleteMonitor={deleteMonitor}
                    deleteHDMI={deleteHDMI}
                    selectedPowerInjectors={selectedPowerInjectors}
                    addPowerInjector={addPowerInjector}
                    deletePowerInjector={deletePowerInjector}
                />
            )
        case 9:
            return(
                <ChooseInstallation homeOrBusiness={homeOrBusiness} cameras={cameras} isInstallationSelected={isInstallationSelected} addInstallation={addInstallation}/>
            )
        case 10:
            return(
                <ReviewSystem 
                    cameras={cameras} 
                    selectedNVR={selectedNVR} 
                    selectedHardDrives={selectedHardDrives} 
                    subtotal={subtotal}
                    selectedSMProducts={selectedSMProducts}
                    cablesType={cablesType}
                    selectedMonitor={selectedMonitor}
                    selectedPowerInjectors={selectedPowerInjectors}
                    isInstallationSelected={isInstallationSelected}
                    homeOrBusiness={homeOrBusiness}
                    goToStep={goToStep}
                    deleteCamera={deleteCamera}
                    deleteNVR={deleteNVR}
                    deleteCable={deleteCable}
                    deleteHardDrive={deleteHardDrive}
                    deleteMonitor={deleteMonitor}
                    deleteHDMI={deleteHDMI}
                    deleteMount={deleteMount}
                    deletePowerInjector={deletePowerInjector}
                    deleteSMProduct={deleteSMProduct}
                    deleteInstallation={deleteInstallation}
                />
            )
    }    
}