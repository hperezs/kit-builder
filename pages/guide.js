import { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Answer from "../components/Answer";
import Question from "../components/Question";
import SelectCameraLens from "../components/steps/selectCameraLens";

export default function Guide() {
    const [ step, setStep ] = useState(0);
    const [ cameras, setCameras ] = useState({outdoor: [], indoor: []});
    const [ homeOrBusiness, setHomeOrBusiness ] = useState('');
    const [ indoorSelected, setIndoorSelected ] = useState(false);
    const [ outdoorSelected, setOutdoorSelected ] = useState(false);
    const [ indoorCount, setIndoorCount ] = useState(0);
    const [ outdoorCount, setOutdoorCount ] = useState(0);
    const [ cviOrIp, setCviOrIp ] = useState('');
    
    const default_camera = {
        name: '',
        housing: '',
        viewingArea: '',
        cameraLens: '',
        nightVisionDist: '',
        resolution: ''
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const incrementOutdoorCount = () => {
        let temp_cameras = cameras;
        let new_camera = default_camera;
        new_camera.name = 'Camera ' + (outdoorCount + 1);
        temp_cameras.outdoor.push(new_camera);
        setCameras(temp_cameras);
        setOutdoorCount(outdoorCount + 1);
    }

    const decrementOutdoorCount = () => {
        setOutdoorCount(outdoorCount - 1);
        let temp_cameras = cameras;
        temp_cameras.outdoor.pop();
        setCameras(temp_cameras);
    }

    const incrementIndoorCount = () => {
        let temp_cameras = cameras;
        let new_camera = default_camera; 
        new_camera.name = 'Camera ' + (indoorCount + 1);
        temp_cameras.indoor.push(default_camera);
        setCameras(temp_cameras);
        setIndoorCount(indoorCount + 1);
    }

    const decrementIndoorCount = () => {
        setIndoorCount(indoorCount - 1);
        let temp_cameras = cameras;
        temp_cameras.indoor.pop();
        setCameras(temp_cameras);
    }

    const submitCameraName = (indoorOrOutdoor, cameraName, index) => {
        let temp_cameras = cameras;
        temp_cameras[indoorOrOutdoor][index].name = cameraName;
        setCameras(temp_cameras);
        console.log(temp_cameras);
    }

    const selectHousing = (indoorOrOutdoor, housingSelected, index) => {
        console.log('running selectHousing...');
        let temp_cameras = cameras;
        temp_cameras[indoorOrOutdoor][index].housing = housingSelected;
        setCameras(temp_cameras);
    }

    const selectViewingArea = (indoorOrOutdoor, viewingArea, index) => {
        let temp_cameras = cameras;
        temp_cameras[indoorOrOutdoor][index].viewingArea = viewingArea;
        setCameras(temp_cameras);
    }

    const selectCameraLens = (indoorOrOutdoor, cameraLens, index) => {
        let temp_cameras = cameras;
        temp_cameras[indoorOrOutdoor][index].cameraLens = cameraLens;
        setCameras(temp_cameras);
    }

    const selectNightVision = (indoorOrOutdoor, nightVisionDist, index) => {
        let temp_cameras = cameras;
        console.log('selectNightVision args: ' + indoorOrOutdoor + nightVisionDist + index)
        temp_cameras[indoorOrOutdoor][index].nightVisionDist = nightVisionDist;
        setCameras(temp_cameras);
}
    
    return(
        <main className="flex flex-row justify-center mt-14 ">
            <div className="flex flex-col justify-center 2xl:w-6/12 xl:w-8/12 lg:w-10/12 md:w-11/12">
                <Question step={step} />
                <hr className="mt-5"/>
                <Answer 
                    step={step}
                    cameras={cameras} 
                    homeOrBusiness={homeOrBusiness} 
                    setHomeOrBusiness={setHomeOrBusiness} 
                    indoorSelected={indoorSelected}
                    outdoorSelected={outdoorSelected}
                    setIndoorSelected={setIndoorSelected}
                    setOutdoorSelected={setOutdoorSelected}
                    incrementOutdoorCount={incrementOutdoorCount}
                    incrementIndoorCount={incrementIndoorCount}
                    decrementOutdoorCount={decrementOutdoorCount}
                    decrementIndoorCount={decrementIndoorCount}
                    submitCameraName={submitCameraName}
                    cviOrIp={cviOrIp}
                    setCviOrIp={setCviOrIp}
                    selectHousing={selectHousing}
                    selectViewingArea={selectViewingArea}
                    selectCameraLens={selectCameraLens}
                    selectNightVision={selectNightVision}
                />
                <Actions nextStep={nextStep} prevStep={prevStep} step={step} />
            </div>
            
        </main>
    )
}