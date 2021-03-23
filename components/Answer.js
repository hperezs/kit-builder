import HomeOrBusiness from './steps/homeOrBusiness'
import ChooseCameras from './steps/ChooseCameras.js'
import ChooseVideoRecorder from './steps/ChooseVideoRecorder'
import HowToChooseCameras from './steps/howToChooseCameras'

export default function Answer({
    currentStep,
    enableStep,
    cameras,
    homeOrBusiness,
    setHomeOrBusiness, 
    allProducts,
    videoRecorders,
    selectNewCamera,
    deleteCamera,
    selectedNVR,
    selectNVR
    }) {

    switch(currentStep) {
        case 1:
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
                <ChooseCameras 
                    allProducts={allProducts} 
                    selectNewCamera={selectNewCamera} 
                    cameras={cameras} 
                    deleteCamera={deleteCamera} 
                />
            )
        case 4: 
            enableStep(currentStep);
            return(
                <ChooseVideoRecorder 
                    cameras={cameras} 
                    videoRecorders={videoRecorders} 
                    selectedNVR={selectedNVR} 
                    selectNVR={selectNVR}
                />
            )
    }    
}