import { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Answer from "../components/Answer";
import Cart from "../components/Cart";
import Question from "../components/Question";
import { default_steps } from "../lib/steps";

export default function Guide() {
    const [ steps, setSteps ] = useState(default_steps)
    const [ currentStep, setStep ] = useState(1);
    const [ cameras, setCameras ] = useState([]);
    const [ selectedNVR, setSelectedNVR ] = useState('');
    const [ homeOrBusiness, setHomeOrBusiness ] = useState('');
    const [ allProducts, setAllProducts ] = useState([]);
    const [ indoorCables, setIndoorCables ] = useState([]);
    const [ outdoorCables, setOutdoorCablse ] = useState([]);
    const [ videoRecorders, setAllVideoRecorders ] = useState([]);
    const [ hasSeenInstructions, setHasSeenInstructions ] = useState(false);
    const [ cableType, setCableType ] = useState('');

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

        // Get Cables from Magento API
        const getIndoorCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://staging3.entretek.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=cat6-%25'
        fetch(getIndoorCables_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer 13y20n0rg075ebk2pn27n8pos2qloh6y'
            }
        }).then(response => {
            response.json().then(data => {
                console.log(data.items);
                setIndoorCables(data.items)
            })
        })

        const getOutdoorCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://staging3.entretek.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=db-cat6-%25'
        fetch(getOutdoorCables_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer 13y20n0rg075ebk2pn27n8pos2qloh6y'
            }
        }).then(response => {
            response.json().then(data => {
                console.log(data.items);
                setOutdoorCablse(data.items);
            })
        })
    }, [])


    const default_camera = {
        cameraName: '',
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

    const selectCable = (cable, camera) => {
        let index = cameras.find(element => camera.cameraName == element.cameraName);
        let cameras_copy = cameras;
        let modified_camera = camera;
        modified_camera.cable = cable;
        console.log(modified_camera);
        cameras_copy[index] = modified_camera;
        setCameras(cameras_copy);
    }
    
    return(
        <main className="flex flex-row justify-center items-start mt-14 z-10">
            <div className="relative flex flex-col justify-center 2xl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12">
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
                        indoorCables={indoorCables}
                        outdoorCables={outdoorCables}
                        videoRecorders={videoRecorders}
                        selectNewCamera={selectNewCamera}
                        deleteCamera={deleteCamera}
                        selectedNVR={selectedNVR}
                        selectNVR={selectNVR}
                        hasSeenInstructions={hasSeenInstructions}
                        setHasSeenInstructions={setHasSeenInstructions}
                        cableType={cableType}
                        setCableType={setCableType}
                        selectCable={selectCable}
                    />
                </div>
                <div className="fixed bottom-0 pb-10 left-10 w-screen flex flex-col items-center mt-10 bg-white">
                    <div className="flex flex-col justify-center 2xl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12">
                        <Actions nextStep={nextStep} prevStep={prevStep} currentStep={currentStep} />
                        {/* <NavMenu currentStep={currentStep} setStep={setStep} steps={steps}/> */}
                    </div>
                </div>
                <Cart cameras={cameras} selectedNVR={selectedNVR}/>
            </div>
        </main>
    )
}