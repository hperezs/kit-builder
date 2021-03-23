import { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Answer from "../components/Answer";
import NavMenu from "../components/NavMenu";
import Question from "../components/Question";
import { default_steps } from "../lib/steps";

export default function Guide() {
    const [ steps, setSteps ] = useState(default_steps)
    const [ currentStep, setStep ] = useState(1);
    const [ cameras, setCameras ] = useState([]);
    const [ selectedNVR, setSelectedNVR ] = useState('');
    const [ homeOrBusiness, setHomeOrBusiness ] = useState('');
    const [ allProducts, setAllProducts ] = useState([]);
    const [ videoRecorders, setAllVideoRecorders ] = useState([]);
    const [ hasSeenInstructions, setHasSeenInstructions ] = useState(false);

    useEffect(() => {
        fetch('/api/getAllProducts')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    setAllProducts(data);
                })
            })
        fetch('/api/getVideoRecorders')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    setAllVideoRecorders(data);
                })
            })
    }, [])

    const default_camera = {
        name: '',
        housing: '',
        viewingArea: '',
        cameraLens: '',
        nightVisionDist: '',
        resolution: ''
    }

    const nextStep = () => {
        setStep(currentStep + 1);
        window.scrollTo(0, 0);
    }

    const prevStep = () => {
        setStep(currentStep - 1);
        window.scrollTo(0, 0);
    }

    const enableStep = (step) => {
        let temp_steps = steps;
        temp_steps[step - 1].isDisabled = false;
        setSteps(temp_steps);
    }

    const selectNewCamera = (camera) => {
        let cameras_copy = cameras;
        cameras_copy.push(camera);
        setCameras(cameras_copy)
    }

    const deleteCamera = index => {
        let new_cameras = cameras;
        new_cameras.splice(index, 1);
        setCameras(new_cameras);
        
    }

    const selectNVR = nvr => {
        setSelectedNVR(nvr);
    }
    
    return(
        <main className="flex flex-row justify-center items-start mt-14">
            <div className="flex flex-col justify-center 2xl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12">
                <Question currentStep={currentStep} />
                <hr className="mt-5"/>
                <div className="pb-44">
                    <Answer 
                        currentStep={currentStep}
                        enableStep={enableStep}
                        cameras={cameras} 
                        homeOrBusiness={homeOrBusiness} 
                        setHomeOrBusiness={setHomeOrBusiness}
                        allProducts={allProducts}
                        videoRecorders={videoRecorders}
                        selectNewCamera={selectNewCamera}
                        deleteCamera={deleteCamera}
                        selectedNVR={selectedNVR}
                        selectNVR={selectNVR}
                        hasSeenInstructions={hasSeenInstructions}
                        setHasSeenInstructions={setHasSeenInstructions}
                    />
                </div>
                <div className="fixed bottom-0 pb-10 left-10 w-screen flex flex-col items-center mt-10 bg-white">
                    <div className="flex flex-col justify-center 2xl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12">
                        <Actions nextStep={nextStep} prevStep={prevStep} currentStep={currentStep} />
                        {/* <NavMenu currentStep={currentStep} setStep={setStep} steps={steps}/> */}
                    </div>
                </div>
                
            </div>
        </main>
    )
}