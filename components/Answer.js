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
    videoRecorders,
    hardDrives,
    selectNewCamera,
    deleteCamera,
    updateCameraName,
    selectedNVR,
    selectNVR,
    hasSeenInstructions,
    setHasSeenInstructions,
    cableType,
    setCableType,
    selectCable,
    addHardDrive
    }) {

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
                    hasSeenInstructions={hasSeenInstructions}
                    setHasSeenInstructions={setHasSeenInstructions}
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
                <ChooseHardDrive hardDrives={hardDrives} cameras={cameras} addHardDrive={addHardDrive}/>
            )
        case 6:
            return(
                <SelectCableType cableType={cableType} setCableType={setCableType}/>
            )
        case 7: 
            return(
                <ChooseCables 
                    cableType={cableType} 
                    cameras={cameras} 
                    indoorCables={indoorCables}
                    outdoorCables={outdoorCables}  
                    selectCable={selectCable}
                />
            )
        case 8:
            return(
                <div>Going to the next page will result in a crash.</div>
            )
    }    
}