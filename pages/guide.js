import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Answer from "../components/Answer";
import Question from "../components/Question";

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
        housing: '',
        lens: '',
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
        setOutdoorCount(outdoorCount + 1);
        let temp_cameras = cameras;
        temp_cameras.outdoor.push(default_camera);
        setCameras(temp_cameras);
    }

    const decrementOutdoorCount = () => {
        setOutdoorCount(outdoorCount - 1);
        let temp_cameras = cameras;
        temp_cameras.outdoor.pop();
        setCameras(temp_cameras);
    }

    const incrementIndoorCount = () => {
        setIndoorCount(indoorCount + 1);
        let temp_cameras = cameras;
        temp_cameras.indoor.push(default_camera);
        console.log(temp_cameras);
        setCameras(temp_cameras);
    }

    const decrementIndoorCount = () => {
        setIndoorCount(indoorCount - 1);
        let temp_cameras = cameras;
        temp_cameras.indoor.pop();
        setCameras(temp_cameras);
    }

    const selectHousing = (indoorOrOutdoor, index, housingSelected) => {
        console.log('running selectHousing...');
        console.log('Arguments: ');
        console.log(indoorOrOutdoor, index, housingSelected);
        let temp_cameras = cameras;
        temp_cameras[indoorOrOutdoor][index].housing = housingSelected;
        setCameras(temp_cameras);
    }
    
    return(
        <main className="flex flex-col mt-14 px-20">
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
                cviOrIp={cviOrIp}
                setCviOrIp={setCviOrIp}
                selectHousing={selectHousing}
            />
            <Actions nextStep={nextStep} prevStep={prevStep} step={step} />
        </main>
    )
}