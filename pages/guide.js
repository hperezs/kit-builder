import { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Answer from "../components/Answer";
import Cart from "../components/Cart";
import Question from "../components/Question";
import { default_steps } from "../lib/steps";
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

export default function Guide() {
    const [ steps, setSteps ] = useState(default_steps)
    const [ currentStep, setCurrentStep ] = useState(1);
    const [ cameras, setCameras ] = useState([]);
    const [ selectedNVR, setSelectedNVR ] = useState('');
    const [ selectedHardDrives, setSelectedHardDrives ] = useState([]);
    const [ selectedSMProducts, setSelectedSMProducts ] = useState([]);
    const [ homeOrBusiness, setHomeOrBusiness ] = useState('');
    const [ cablesType, setCablesType ] = useState('');
    const [ allProducts, setAllProducts ] = useState([]);
    const [ indoorCables, setIndoorCables ] = useState([]);
    const [ outdoorCables, setOurdoorCables ] = useState([]);
    const [ selfMadeProducts, setSelfMadeProducts ] = useState([]);
    const [ hardDrives, setHardDrives ] = useState([])
    const [ videoRecorders, setAllVideoRecorders ] = useState([]);
    const [ hasSeenInstructions, setHasSeenInstructions ] = useState(false);
    const [ subtotal, setSubtotal ] = useState(0.00);
    

    const bearerToken = process.env.BEARER_TOKEN;

    // Fetch all necessary products
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
                'Authorization': 'Bearer ' + bearerToken
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
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log(data.items);
                setOurdoorCables(data.items);
            })
        })

        const getSelfMadeCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://staging3.entretek.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25CAT6-500&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=like&searchCriteria[filterGroups][0][filters][1][value]=%25CAT6-1000&searchCriteria[filterGroups][0][filters][2][field]=sku&searchCriteria[filterGroups][0][filters][2][value]=C208&searchCriteria[filterGroups][0][filters][3][field]=sku&searchCriteria[filterGroups][0][filters][3][value]=VDV226-011-SEN';
        fetch(getSelfMadeCables_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log(data.items);
                setSelfMadeProducts(data.items);
            })
        })

        // Get Hard Drives from Magento API
        const getHardDrives_url = 'https://morning-anchorage-80357.herokuapp.com/https://staging3.entretek.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25T-HD'
        fetch(getHardDrives_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                data.items.sort((a, b) => (a.price - b.price));
                setHardDrives(data.items);
                console.log(data.items);
            })
        })

    }, [])

    // Update subtotal when product selections change
    useEffect(() => {
        updateSubtotal();
    }, [cameras, selectedNVR, selectedHardDrives, cablesType, selectedSMProducts])


    const updateSubtotal = () => {
        let price_subtotal = 0.00;
        // Add cameras and cables cost
        cameras.forEach(camera => {
            price_subtotal = price_subtotal + parseFloat(camera.price.$numberDecimal)
            price_subtotal = price_subtotal + parseFloat((camera.cable?.price ? camera.cable.price : 0));
        })

        // Add NVR cost
        if(selectedNVR != '') price_subtotal = price_subtotal + parseFloat(selectedNVR?.price.$numberDecimal);

        selectedHardDrives.forEach(hardDrive => {
            price_subtotal = price_subtotal + parseFloat((hardDrive?.price ? hardDrive.price : 0));
        })

        // Add self-made products costs
        if(cablesType == 'self-made') {
            selectedSMProducts.forEach(product => {
                price_subtotal = price_subtotal + (product.price * product.quantity);
            })
        }

        setSubtotal(price_subtotal);
        console.log('subtotal useEffect ran. Subtotal: ' + price_subtotal);
    }


    const nextStep = () => {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
        window.scrollTo(0, 0);
    }

    const enableStep = (step) => {
        let temp_steps = steps;
        temp_steps[step - 1].isDisabled = false;
        setSteps(temp_steps);
    }

    const selectNewCamera = (camera) => {
        let cameras_copy = cameras.slice();
        cameras_copy.push(camera);
        setCameras(cameras_copy);
        submitNotification('addedToCart', camera.sku);
    }

    const deleteCamera = index => {
        let removedCamera = cameras[index];
        let new_cameras = cameras.slice();
        new_cameras.splice(index, 1);
        setCameras(new_cameras);
        submitNotification('deletedFromCart', removedCamera?.sku);
    }

    const updateCameraName = (index, camera) => {
        let new_cameras = cameras;
        new_cameras[index].cameraName = camera;
        setCameras(new_cameras);
    }

    const selectNVR = nvr => {
        setSelectedNVR(nvr);
        submitNotification('addedToCart', nvr.sku);
    }

    const selectCable = (cable, camera) => {
        let index = cameras.find(element => camera.cameraName == element.cameraName);
        let cameras_copy = cameras.slice();
        let modified_camera = camera;
        modified_camera.cable = cable;
        cameras_copy[index] = modified_camera;
        setCameras(cameras_copy);
    }

    const addHardDrive = hardDrive => {
        let new_selectedHardDrives = selectedHardDrives.slice();
        new_selectedHardDrives.push(hardDrive);
        setSelectedHardDrives(new_selectedHardDrives);
        submitNotification('addedToCart', hardDrive.sku);
    }

    const deleteHardDrive = index => {
        let removedHD = selectedHardDrives[index];
        let new_HardDrives = selectedHardDrives.slice();
        new_HardDrives.splice(index, 1);
        setSelectedHardDrives(new_HardDrives);
        submitNotification('deletedFromCart', removedHD?.sku);
    }

    const selectCablesType = type => {
        setCablesType(type);
    }

    const selectSMProducts = product => { 
        // I can't figure out why refetching base products fixes the problem    
        const getSelfMadeCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://staging3.entretek.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25CAT6-500&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=like&searchCriteria[filterGroups][0][filters][1][value]=%25CAT6-1000&searchCriteria[filterGroups][0][filters][2][field]=sku&searchCriteria[filterGroups][0][filters][2][value]=C208&searchCriteria[filterGroups][0][filters][3][field]=sku&searchCriteria[filterGroups][0][filters][3][value]=VDV226-011-SEN';
        fetch(getSelfMadeCables_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log(data.items);
                setSelfMadeProducts(data.items);
            })
        })
        
        // Check if product is already in cart to just increment qty
        let isProductInCart = false; 
        selectedSMProducts.forEach(item => {
            if(item.sku == product.sku) isProductInCart = true;
        })
        if(isProductInCart){
            let new_SMProducts = selectedSMProducts.slice();
            let index = new_SMProducts.findIndex(item => item.sku == product.sku);
            new_SMProducts[index].quantity = new_SMProducts[index].quantity + product.quantity;
            setSelectedSMProducts(new_SMProducts);
        } else {
            let new_SMProducts = selectedSMProducts.slice();
            new_SMProducts.push(product);
            setSelectedSMProducts(new_SMProducts);
        }
    }
    
    const submitNotification = (type, payload) => {
        switch(type) {
            case 'addedToCart':
                store.addNotification({
                    title: 'Item added',
                    message: payload + " has been added to cart",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 4000,
                      onScreen: false
                    }
                  });
                  break;
            case 'deletedFromCart':
                store.addNotification({
                    title: 'Item deleted',
                    message: payload + " has been removed from cart",
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 4000,
                      onScreen: false
                    }
                  });
                break;
        }
    }

    const goToCameras = () => {
        setCurrentStep(3)
    }

    return(
        <div>
            <ReactNotification />
            <main className="flex flex-row justify-center items-start mt-14 z-20">
                <div className="relative flex flex-col justify-center 2xl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12">
                    <Question currentStep={currentStep} cablesType={cablesType} />
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
                            selfMadeProducts={selfMadeProducts}
                            videoRecorders={videoRecorders}
                            hardDrives={hardDrives}
                            selectNewCamera={selectNewCamera}
                            deleteCamera={deleteCamera}
                            updateCameraName={updateCameraName}
                            selectedNVR={selectedNVR}
                            selectNVR={selectNVR}
                            selectedHardDrives={selectedHardDrives}
                            addHardDrive={addHardDrive}
                            deleteHardDrive={deleteHardDrive}
                            cablesType={cablesType}
                            selectCablesType={selectCablesType}
                            selectCable={selectCable}
                            selectSMProducts={selectSMProducts}
                            selectedSMProducts={selectedSMProducts}
                        />
                    </div>
                    <div className="fixed bottom-0 pb-10 left-10 w-screen flex flex-col items-center mt-10 bg-white">
                        <div className="flex flex-col justify-center 2xl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12">
                            <Actions nextStep={nextStep} prevStep={prevStep} currentStep={currentStep} />
                            {/* <NavMenu currentStep={currentStep} setStep={setStep} steps={steps}/> */}
                        </div>
                    </div>
                    <Cart 
                        cameras={cameras} 
                        selectedNVR={selectedNVR} 
                        selectedHardDrives={selectedHardDrives} 
                        subtotal={subtotal}
                        selectedSMProducts={selectedSMProducts}
                        cablesType={cablesType}
                        goToCameras={goToCameras}
                    />
                </div>
            </main>
        </div>
        
    )
}