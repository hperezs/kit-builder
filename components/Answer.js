import HomeOrBusiness from './steps/homeOrBusiness'
import ChooseCameras from './steps/ChooseCameras.js'
import ChooseVideoRecorder from './steps/ChooseVideoRecorder'
import HowToChooseCameras from './steps/howToChooseCameras'
import SelectCableType from './steps/SelectCableType'
import ChooseCables from './steps/ChooseCables'

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
    selectNewCamera,
    deleteCamera,
    selectedNVR,
    selectNVR,
    hasSeenInstructions,
    setHasSeenInstructions,
    cableType,
    setCableType,
    selectCable
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
                <SelectCableType cableType={cableType} setCableType={setCableType}/>
            )
        case 6: 
            return(
                <ChooseCables 
                    cableType={cableType} 
                    cameras={cameras} 
                    indoorCables={indoorCables}
                    outdoorCables={outdoorCables}  
                    selectCable={selectCable}
                />
            )
        case 7:
            return(
                <div>Going to the next page will result in a crash.</div>
            )
    }    
}