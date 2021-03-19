import Image from 'next/image'
import HomeOrBusiness from './steps/homeOrBusiness'
import CameraHousings from './steps/camera_housings'
import SetCameraCount from './steps/setCameraCount'
import SelectHousing from './steps/selectHousing'
import SetCameraLocation from './steps/setCameraLocation'
import SetSystemType from './steps/setSystemType'
import SelectViewingArea from './steps/selectViewingArea'
import SelectCameraLens from './steps/selectCameraLens'
import SelectNightVision from './steps/selectNightVision'
import ChooseCameras from './steps/chooseCameras'
import ChooseVideoRecorder from './steps/chooseVideoRecorder'

export default function Answer({
    currentStep,
    enableStep,
    cameras,
    homeOrBusiness,
    setHomeOrBusiness, 
    indoorSelected, 
    outdoorSelected, 
    setIndoorSelected, 
    setOutdoorSelected, 
    indoorCount,
    outdoorCount,
    incrementOutdoorCount,
    incrementIndoorCount,
    decrementOutdoorCount,
    decrementIndoorCount,
    submitCameraName,
    selectHousing,
    selectViewingArea,
    selectCameraLens,
    selectNightVision
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
                <SetCameraLocation 
                    indoorSelected={indoorSelected}
                    outdoorSelected={outdoorSelected}
                    setIndoorSelected={setIndoorSelected}
                    setOutdoorSelected={setOutdoorSelected}
                />
                
            )
        case 3:
            enableStep(currentStep);
            return(
                <SetCameraCount 
                    cameras={cameras}
                    indoorSelected={indoorSelected} 
                    outdoorSelected={outdoorSelected} 
                    incrementOutdoorCount={incrementOutdoorCount}
                    incrementIndoorCount={incrementIndoorCount}
                    decrementOutdoorCount={decrementOutdoorCount}
                    decrementIndoorCount={decrementIndoorCount}
                    submitCameraName={submitCameraName}
                />
            )
        case 4:
            enableStep(currentStep);
            return(
                <section className="h-96 my-10">
                    <div className="text-xl">
                        <p>Before you choose your cameras, you should know your options. You'll need to consider the following core features when choosing each camera:</p>
                        <ul className="mt-5 font-light">
                            <li>- Camera Housing</li>
                            <li>- Camera Lens</li>
                            <li>- Camera Resolution</li>
                            <li>- Night Vision distance</li>
                        </ul>
                    </div>
                </section>
            )
        case 5:
            enableStep(currentStep);
            return(
                <CameraHousings />
            )
        case 6:
            enableStep(currentStep);
            return(
                <SelectHousing
                    cameras={cameras}
                    selectHousing={selectHousing}
                    indoorSelected={indoorSelected}
                    outdoorSelected={outdoorSelected}
                />
            )
        case 7:
            enableStep(currentStep);
            return(
                <SelectViewingArea cameras={cameras} selectViewingArea={selectViewingArea} />
            )
        case 8:
            enableStep(currentStep);
            return(
                <SelectCameraLens cameras={cameras} selectCameraLens={selectCameraLens}/>
            )
        case 9:
            enableStep(currentStep);
            return(
                <SelectNightVision cameras={cameras} selectNightVision={selectNightVision} />
            )
        case 10: 
            enableStep(currentStep);
            return(
                <ChooseCameras cameras={cameras} />
            )
        case 11: 
            enableStep(currentStep);
            return(
                <ChooseVideoRecorder />
            )
    }    
}