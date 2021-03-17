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
    step,
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
    cviOrIp,
    setCviOrIp,
    selectHousing,
    selectViewingArea,
    selectCameraLens,
    selectNightVision
    }) {

    

    switch(step) {
        case 1:
            return(
                <HomeOrBusiness homeOrBusiness={homeOrBusiness} setHomeOrBusiness={setHomeOrBusiness}/>
            )
        case 2:
            return(
                <SetSystemType cviOrIp={cviOrIp} setCviOrIp={setCviOrIp} />
                
            )
        case 3:
            return(
                <SetCameraLocation 
                    indoorSelected={indoorSelected}
                    outdoorSelected={outdoorSelected}
                    setIndoorSelected={setIndoorSelected}
                    setOutdoorSelected={setOutdoorSelected}
                />
                
            )
        case 4:
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
        case 5:
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
        case 6:
            return(
                <CameraHousings />
            )
        case 7:
            return(
                <SelectHousing
                    cameras={cameras}
                    selectHousing={selectHousing}
                    indoorSelected={indoorSelected}
                    outdoorSelected={outdoorSelected}
                />
            )
        case 8:
            return(
                <SelectViewingArea cameras={cameras} selectViewingArea={selectViewingArea} />
            )
        case 9:
            return(
                <SelectCameraLens cameras={cameras} selectCameraLens={selectCameraLens}/>
            )
        case 10:
            return(
                <SelectNightVision cameras={cameras} selectNightVision={selectNightVision} />
            )
        case 11: 
            return(
                <ChooseCameras cameras={cameras} />
            )
        case 12: 
            return(
                <ChooseVideoRecorder />
            )
    }    
}