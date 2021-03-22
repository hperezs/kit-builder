import HomeOrBusiness from './steps/homeOrBusiness'
import ChooseCameras from './steps/ChooseCameras.js'
import ChooseVideoRecorder from './steps/chooseVideoRecorder'
import HowToChooseCameras from './steps/howToChooseCameras'

export default function Answer({
    currentStep,
    enableStep,
    cameras,
    homeOrBusiness,
    setHomeOrBusiness, 
    allProducts,
    selectNewCamera
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
                <HowToChooseCameras />
            )
        case 3:
            enableStep(currentStep);
            return(
                <ChooseCameras allProducts={allProducts} selectNewCamera={selectNewCamera} cameras={cameras}/>
            )
        case 4: 
            enableStep(currentStep);
            return(
                <ChooseVideoRecorder />
            )
    }    
}