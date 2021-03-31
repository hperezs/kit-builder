import HomeOrBusiness from './steps/homeOrBusiness'
import ChooseCameras from './steps/ChooseCameras.js'
import ChooseVideoRecorder from './steps/ChooseVideoRecorder'
import HowToChooseCameras from './steps/howToChooseCameras'
import SelectCableType from './steps/SelectCableType'
import ChooseCables from './steps/ChooseCables'
import ChooseHardDrive from './steps/ChooseHardDrive'

export default function Answer({
    currentStep,
    enableStep,
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
    selectedHardDrives,
    addHardDrive,
    deleteHardDrive,
    cablesType,
    selectCablesType,
    selectCable,
    selectSMProducts,
    selectedSMProducts
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
                    <div>Going to the next page will result in a crash.</div>
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
                    indoorCables={indoorCables}
                    outdoorCables={outdoorCables}  
                    selfMadeProducts={selfMadeProducts}
                    selectCable={selectCable}
                    selectSMProducts={selectSMProducts}
                    selectedSMProducts={selectedSMProducts}
                />
            )
        case 8:
            return(
                <div>Going to the next page will result in a crash.</div>
            )
    }    
}