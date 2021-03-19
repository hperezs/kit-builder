import HomeOrBusiness from './steps/homeOrBusiness'
import CameraHousings from './HowToChooseCameras/CameraHousing/cameraHousings'
import SetCameraCount from './steps/setCameraCount'
import SelectHousing from './steps/selectHousing'
import SelectViewingArea from './steps/selectViewingArea'
import SelectCameraLens from './steps/selectCameraLens'
import SelectNightVision from './steps/selectNightVision'
import ChooseCameras from './steps/chooseCameras'
import ChooseVideoRecorder from './steps/chooseVideoRecorder'
import HowToChooseCameras from './steps/howToChooseCameras'

export default function Answer({
    currentStep,
    enableStep,
    cameras,
    homeOrBusiness,
    setHomeOrBusiness, 
    indoorSelected, 
    outdoorSelected, 
    incrementOutdoorCount,
    incrementIndoorCount,
    decrementOutdoorCount,
    decrementIndoorCount,
    submitCameraName,
    selectHousing,
    selectViewingArea,
    selectCameraLens,
    selectNightVision,
    allProducts
    }) {

    

    switch(currentStep) {
        case 1:
            enableStep(currentStep);
            return(
                <HomeOrBusiness homeOrBusiness={homeOrBusiness} setHomeOrBusiness={setHomeOrBusiness}/>
            )
        case 2:
            enableStep(currentStep);
            return(
                <SetCameraCount 
                    cameras={cameras}
                    incrementOutdoorCount={incrementOutdoorCount}
                    incrementIndoorCount={incrementIndoorCount}
                    decrementOutdoorCount={decrementOutdoorCount}
                    decrementIndoorCount={decrementIndoorCount}
                    submitCameraName={submitCameraName}
                />
            )
        case 3:
            enableStep(currentStep);
            return(
                <HowToChooseCameras />
            )
        case 4:
            enableStep(currentStep);
            return(
                <SelectHousing
                    cameras={cameras}
                    selectHousing={selectHousing}
                    indoorSelected={indoorSelected}
                    outdoorSelected={outdoorSelected}
                />
            )
        case 5:
            enableStep(currentStep);
            return(
                <SelectViewingArea cameras={cameras} selectViewingArea={selectViewingArea} />
            )
        case 6:
            enableStep(currentStep);
            return(
                <SelectCameraLens cameras={cameras} selectCameraLens={selectCameraLens}/>
            )
        case 7:
            enableStep(currentStep);
            return(
                <SelectNightVision cameras={cameras} selectNightVision={selectNightVision} />
            )
        case 8: 
            enableStep(currentStep);
            return(
                <ChooseCameras cameras={cameras} allProducts={allProducts} />
            )
        case 9: 
            enableStep(currentStep);
            return(
                <ChooseVideoRecorder />
            )
    }    
}