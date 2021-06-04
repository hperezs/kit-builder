import { useEffect, useState } from "react";
import Actions from "../components/Actions";
import Answer from "../components/Answer";
import Cart from "../components/Cart";
import Question from "../components/Question";
import { default_steps } from "../lib/steps";
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Image from 'next/image'
import ProgressBar from "../components/ProgressBar";
import Head from 'next/head'
import {CompileCameras} from '../lib/helpers'

import ReactGa from 'react-ga'

export default function Guide() {
    // Product data
    const [ allProducts, setAllProducts ] = useState([]); // These are cameras from Magento
    const [ videoRecorders, setAllVideoRecorders ] = useState([]);
    const [ hardDrives, setHardDrives ] = useState([])
    const [ indoorCables, setIndoorCables ] = useState([]);
    const [ outdoorCables, setOurdoorCables ] = useState([]);
    const [ selfMadeProducts, setSelfMadeProducts ] = useState([]);
    const [ monitorProducts, setMonitorProducts ] = useState([]);
    const [ mountProducts, setMountProducts ] = useState([]);
    const [ powerInjectors, setPowerInjectors ] = useState([]);
    const [ freeProducts, setFreeProducts ] = useState([]);

    // App state
    const [ isLoading, setIsLoading ] = useState(true);
    const [ currentStep, setCurrentStep ] = useState(1);
    const [ homeOrBusiness, setHomeOrBusiness ] = useState('');
    const [ cameras, setCameras ] = useState([]);
    const [ selectedNVR, setSelectedNVR ] = useState('');
    const [ selectedHardDrives, setSelectedHardDrives ] = useState([]);
    const [ cablesType, setCablesType ] = useState('');
    const [ selectedSMProducts, setSelectedSMProducts ] = useState([]);
    const [ selectedMonitor, setSelectedMonitor ] = useState('');
    const [ selectedPowerInjectors, setSelectedPowerInjectors ] = useState([]);
    const [ isInstallationSelected, setIsInstallationSelected ] = useState(null);
    const [ subtotal, setSubtotal ] = useState(0.00);
    const [ canClickNext, setCanClickNext ] = useState(false);
    const [ displayBackToReview, setDisplayBackToReview ] = useState(false);
    const [ hasReviewBeenVisited, setHasReviewBeenVisited ] = useState(false);

    const bearerToken = process.env.BEARER_TOKEN;

    //  Google Analytics
    useEffect(() => {
        ReactGa.initialize("UA-195816848-1");
        ReactGa.pageview(window.location.pathname + window.location.search);
   }, [])

   const logStepProgress = () => {
        ReactGa.event({
            category: 'Bounce',
            action: 'User bounced at step #' + currentStep,
        })
   }

   useEffect(() => {
        window.addEventListener("beforeunload", logStepProgress)

        return () => {
            window.removeEventListener("beforeunload", logStepProgress)
        }
   }, [currentStep])


    // Fetch all necessary products
    useEffect(() => {
        const getAllCameras_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=housing_style&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][value]=5521&searchCriteria[filterGroups][0][filters][1][field]=housing_style&searchCriteria[filterGroups][0][filters][1][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][value]=5522&searchCriteria[filterGroups][0][filters][2][field]=housing_style&searchCriteria[filterGroups][0][filters][2][conditionType]=eq&searchCriteria[filterGroups][0][filters][2][value]=5523';
        fetch(getAllCameras_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log('****Magento Cameras****');
                let camera_products = CompileCameras(data.items);
                camera_products.sort((a, b) => a.price.$numberDecimal - b.price.$numberDecimal);
                console.log(camera_products);
                setAllProducts(camera_products)
            })
        }).catch(error => {
            console.log(error);
        })

        const getVideoRecorders_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][value]=%25NVR&searchCriteria[filterGroups][0][filters][0][conditionType]=like';
        fetch(getVideoRecorders_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log('******VIDEO RECORDERS *****');
                // Compile object scheme to match the rest of the app
                let compiled = data.items.map(product => ({
                    id: product.id,
                    sku: product.sku,
                    price: {$numberDecimal: parseFloat(product.price).toFixed(2)},
                    oldPrice: product.custom_attributes.find(attribute => attribute.attribute_code == 'compare_price').value,
                    channelCount: product.sku.split('PRO')[1].split('NVR')[0],
                    productLink: '/' + product.custom_attributes.find(attribute => attribute.attribute_code == 'url_key').value + '.html',
                }));
                // Sort by price
                let sorted = compiled.sort((a, b) => a.price.$numberDecimal - b.price.$numberDecimal);
                setAllVideoRecorders(sorted);
                console.log(sorted);
            })
        }).catch(error => {
            console.log(error);
        })

        // Get Cables from Magento API
        const getIndoorCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=cat6-%25'
        fetch(getIndoorCables_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log('****INDOOR CABLES****');
                console.log(data.items);
                setIndoorCables(data.items)
            })
        }).catch(error => {
            console.log(error);
        })

        const getOutdoorCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=db-cat6-%25'
        fetch(getOutdoorCables_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log('****OUTDOOR CABLES****');
                console.log(data.items);
                setOurdoorCables(data.items);
            })
        }).catch(error => {
            console.log(error);
        })

        const getSelfMadeCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25CAT6-500&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=like&searchCriteria[filterGroups][0][filters][1][value]=%25CAT6-1000&searchCriteria[filterGroups][0][filters][2][field]=sku&searchCriteria[filterGroups][0][filters][2][value]=C208&searchCriteria[filterGroups][0][filters][3][field]=sku&searchCriteria[filterGroups][0][filters][3][value]=VDV226-011-SEN';
        fetch(getSelfMadeCables_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                console.log('****SELFMADE****');
                console.log(data.items);
                setSelfMadeProducts(data.items);
            })
        }).catch(error => {
            console.log(error);
        })

        // Get Hard Drives from Magento API
        const getHardDrives_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25T-HD'
        fetch(getHardDrives_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                data.items.sort((a, b) => (a.price - b.price));
                setHardDrives(data.items);
                console.log('****HDDS****');
                console.log(data.items);
            })
        }).catch(error => {
            console.log(error);
        })

        // Get Monitor products
        const getMonitors_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=MON%25&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=equals&searchCriteria[filterGroups][0][filters][1][value]=HDMI-Cable'
        fetch(getMonitors_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                data.items.sort((a, b) => (a.price - b.price));
                setMonitorProducts(data.items);
                console.log('****MONITORS****');
                console.log(data.items);
            })
        }).catch(error => {
            console.log(error);
        })

        // Get Mounts
        const getMounts_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=category_bullet_points&searchCriteria[filterGroups][0][filters][0][value]=%25Mounting %25for:%25&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][1][field]=name&searchCriteria[filterGroups][0][filters][1][value]=M5%25 Universal Mount&searchCriteria[filterGroups][0][filters][1][conditionType]=like'
        fetch(getMounts_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                setMountProducts(data.items);
                console.log('****MOUNTS****');
                console.log(data.items);
            })
        }).catch(error => {
            console.log(error);
        })

        // Get POE products
        const getPOEs_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25POE-1%25'
        fetch(getPOEs_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                data.items.sort((a, b) => (a.price - b.price));
                console.log('****POWER INJECTORS****');
                setPowerInjectors(data.items);
                console.log(data.items);
            })
        }).catch(error => {
            console.log(error);
        })

        // Get Free products
        const getFreeProducts_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=name&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25FREE - %25&searchCriteria[filterGroups][2][filters][0][field]=sku&searchCriteria[filterGroups][2][filters][0][conditionType]=neq&searchCriteria[filterGroups][2][filters][0][value]=FREE COAX STRIPPER&searchCriteria[filterGroups][3][filters][0][field]=sku&searchCriteria[filterGroups][3][filters][0][conditionType]=neq&searchCriteria[filterGroups][3][filters][0][value]=5-year -extended-warranty';
        fetch(getFreeProducts_url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(response => {
            response.json().then(data => {
                setFreeProducts(data.items);
                console.log('****FREE PRODUCTS****');
                console.log(data.items);
            })
        }).catch(error => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        if(allProducts && 
            videoRecorders && 
            hardDrives && 
            indoorCables && 
            outdoorCables && 
            selfMadeProducts && 
            monitorProducts && 
            mountProducts && 
            powerInjectors && 
            freeProducts ) {
                setIsLoading(false);
            }
        
    }, [allProducts,
        videoRecorders,
        hardDrives,
        indoorCables,
        outdoorCables,
        selfMadeProducts,
        monitorProducts,
        mountProducts,
        powerInjectors,
        freeProducts,])

    // Get localStorage
    useEffect(() => {
        if(localStorage.getItem('homeOrBusiness')) setHomeOrBusiness(localStorage.getItem('homeOrBusiness'));
        if(localStorage.getItem('cameras')) setCameras(JSON.parse(localStorage.getItem('cameras')));
        if(localStorage.getItem('selectedNVR')) setSelectedNVR(JSON.parse(localStorage.getItem('selectedNVR')));
        if(localStorage.getItem('selectedHardDrives')) setSelectedHardDrives(JSON.parse(localStorage.getItem('selectedHardDrives')));
        if(localStorage.getItem('cablesType')) setCablesType(localStorage.getItem('cablesType'));
        if(localStorage.getItem('selectedSMProducts')) setSelectedSMProducts(JSON.parse(localStorage.getItem('selectedSMProducts')));
        if(localStorage.getItem('selectedMonitor')) setSelectedMonitor(JSON.parse(localStorage.getItem('selectedMonitor')));
        if(localStorage.getItem('selectedPowerInjectors')) setSelectedPowerInjectors(JSON.parse(localStorage.getItem('selectedPowerInjectors')));
        if(localStorage.getItem('isInstallationSelected')) setIsInstallationSelected((localStorage.getItem('isInstallationSelected') == 'true'));

        if(JSON.parse(localStorage.getItem('cameras'))?.length != 0) submitNotification('welcomeBack');
    }, [])

    // Update subtotal when product selections change and update LocalStorage
    useEffect(() => {
        updateSubtotal();
        updateLocalStorage();
    }, [cameras, selectedNVR, selectedHardDrives, cablesType, selectedSMProducts, selectedPowerInjectors, selectedMonitor, isInstallationSelected])

    // Allow user to click next when selections are made
    useEffect(() => {
        switch(currentStep) {
            case 1:
                setCanClickNext(homeOrBusiness);
                break;
            case 2:
                setCanClickNext(true);
                break;
            case 3:
                setCanClickNext(cameras.length != 0);
                break;
            case 4: 
                setCanClickNext(selectedNVR);
                break;
            case 5:
                setCanClickNext(selectedHardDrives.length != 0);
                break;
            case 6:
                setCanClickNext(cablesType);
                break;
            case 7: 
                if(cablesType == 'self-made') {
                    setCanClickNext(selectedSMProducts.length != 0);
                }
                if(cablesType == 'pre-made') {
                    let cables = 0;
                    cameras.forEach(camera => {if(camera?.cable) cables++});
                    setCanClickNext(cables + 1 == cameras.length + 1)
                }
                if(cablesType == 'none') {
                    setCanClickNext(true);
                }
                break;
            case 8:
                if(cablesType != 'none') {
                    setCanClickNext(true);
                } else {
                    setCanClickNext(isInstallationSelected != null)
                }
                break;
            case 9:
                if(cablesType != 'none') setCanClickNext(isInstallationSelected != null);

        }
    }, [currentStep, homeOrBusiness, cameras, selectedNVR, selectedHardDrives, cablesType, selectedSMProducts, selectedPowerInjectors, selectedMonitor, isInstallationSelected])

    // Hide backToReview button if current step is review
    useEffect(() => {
        if(cablesType == 'pre-made' && currentStep == 10) setDisplayBackToReview(false);
        if(cablesType != 'pre-made' && currentStep == 9) setDisplayBackToReview(false);
    }, [currentStep, cablesType]);

    useEffect(() => {
        if(isInstallationSelected) submitNotification('installationUpdated');
    }, [homeOrBusiness])

    const updateSubtotal = () => {
        let price_subtotal = 0.00;
        // Add cameras, cables and mounts cost
        cameras?.forEach(camera => {
            price_subtotal = price_subtotal + parseFloat(camera.price.$numberDecimal)
            if(cablesType == 'pre-made') price_subtotal = price_subtotal + parseFloat((camera.cable?.price ? camera.cable.price : 0));
            price_subtotal = price_subtotal + parseFloat((camera.mount?.price ? camera.mount.price : 0));
        })

        // Add NVR cost
        if(selectedNVR != '') price_subtotal = price_subtotal + parseFloat(selectedNVR?.price.$numberDecimal);
        if(selectedNVR?.cable && cablesType == 'pre-made') price_subtotal = price_subtotal + parseFloat(selectedNVR.cable.price);

        selectedHardDrives?.forEach(hardDrive => {
            price_subtotal = price_subtotal + parseFloat((hardDrive?.price ? hardDrive.price : 0));
        })

        // Add self-made products costs
        if(cablesType == 'self-made') {
            selectedSMProducts?.forEach(product => {
                price_subtotal = price_subtotal + (product.price * product.quantity);
            })
        }

        // Add Monitor Costs
        if(selectedMonitor) {
            price_subtotal = price_subtotal + selectedMonitor.price;
            if(selectedMonitor?.cable) {
                price_subtotal = price_subtotal + selectedMonitor.cable.price;
            }
        }

        // Add POE costs
        if(selectedPowerInjectors?.length != 0) {
            selectedPowerInjectors?.forEach(product => {
                console.log(product);
                price_subtotal = price_subtotal + parseFloat(product.price * product.quantity);
            })
        }

        // Add Installation Costs
        if(isInstallationSelected){
            price_subtotal = price_subtotal + parseFloat((homeOrBusiness == 'home' ? 299 : 349) + (cameras.length * 212.00))
        }

        setSubtotal(price_subtotal);
    }

    useEffect(() => {
        if((cablesType != 'none' && currentStep == 10) || (cablesType == 'none' && currentStep == 9)) setHasReviewBeenVisited(true);
    }, [currentStep, cablesType])

    const updateLocalStorage = () => {
        localStorage.setItem('homeOrBusiness', homeOrBusiness);
        localStorage.setItem('cameras', JSON.stringify(cameras));
        localStorage.setItem('selectedNVR', JSON.stringify(selectedNVR));
        localStorage.setItem('selectedHardDrives', JSON.stringify(selectedHardDrives));
        localStorage.setItem('cablesType', cablesType);
        localStorage.setItem('selectedSMProducts', JSON.stringify(selectedSMProducts));
        localStorage.setItem('selectedMonitor', JSON.stringify(selectedMonitor));
        localStorage.setItem('selectedPowerInjectors', JSON.stringify(selectedPowerInjectors));
        localStorage.setItem('isInstallationSelected', (isInstallationSelected ? 'true' : 'false'));
    }

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
        window.scrollTo(0, 0);
    }

    const selectNewCamera = (camera) => {
        let cameras_copy = cameras.slice();
        cameras_copy.push(JSON.parse(JSON.stringify(camera))); //Making a clean copy to avoid memory issues
        setCameras(cameras_copy);
        submitNotification('addedToCart', camera.sku);
        if(isInstallationSelected) submitNotification('installationUpdated');
    }

    const deleteCamera = index => {
        let removedCamera = cameras[index];
        let new_cameras = cameras.slice();
        new_cameras.splice(index, 1);
        setCameras(new_cameras);
        submitNotification('deletedFromCart', removedCamera?.sku);
        if(isInstallationSelected) submitNotification('installationUpdated');
    }

    const updateCameraName = (index, cameraName) => {
        let new_cameras = cameras.slice();
        new_cameras[index].cameraName = cameraName;
        setCameras(new_cameras);
    }

    const duplicateCamera = (camera, count, lastIndex) => {
        let cameras_copy = cameras.slice();

        for(let i = 0; i != count; i++) {
            lastIndex++;
            let new_camera = JSON.parse(JSON.stringify(camera));
            new_camera.cameraName = 'Camera ' + lastIndex;
            cameras_copy.push(new_camera);
        }

        // Google Analytics
        ReactGa.event({
            category: 'Camera duplicated',
            action: camera.sku + ' duplicated.',
        })

        setCameras(cameras_copy);
    }

    const selectNVR = nvr => {
        setSelectedNVR(nvr);
        submitNotification('addedToCart', nvr.sku);
    }

    const deleteNVR = nvr => {
        setSelectedNVR('');
        submitNotification('deletedFromCart', nvr.sku);
    }

    const selectCable = (cable, camera, nvr) => {
        if(camera){
            let index = cameras.find(product => camera.cameraName == product.cameraName);
            let cameras_copy = cameras.slice();
            let modified_camera = camera;
            modified_camera.cable = cable;
            cameras_copy[index] = modified_camera;
            setCameras(cameras_copy);
            submitNotification('addedToCart', cable.sku);
        }

        if(nvr) {
            nvr.cable = cable;
           setSelectedNVR(nvr); 
           updateSubtotal();
           submitNotification('addedToCart', cable.sku);
        }
    }

    const deleteCable = (camera, nvr) => {
        if(camera) {
            let index = cameras.find(product => camera.cameraName == product.cameraName);
            let cameras_copy = cameras.slice();
            let modified_camera = camera;
            let deletedCable = modified_camera.cable;

            modified_camera.cable = null;
            cameras_copy[index] = modified_camera;
            setCameras(cameras_copy);

            submitNotification('deletedFromCart', deletedCable.sku);
        }

        if(nvr) {
            let deletedCable = nvr.cable;
            nvr.cable = null;
            setSelectedNVR(nvr);
            updateSubtotal();

            submitNotification('deletedFromCart', deletedCable.sku);
        }
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

        if(selectedSMProducts.length != 0 || cameras[0]?.cable) {
            submitNotification('cartUpdated');
        }
        
    }

    const selectSMProducts = product => { 
        // I can't figure out why refetching base products fixes the problem    
        const getSelfMadeCables_url = 'https://morning-anchorage-80357.herokuapp.com/https://backstreet-surveillance.com/rest/default/V1/products?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25CAT6-500&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=like&searchCriteria[filterGroups][0][filters][1][value]=%25CAT6-1000&searchCriteria[filterGroups][0][filters][2][field]=sku&searchCriteria[filterGroups][0][filters][2][value]=C208&searchCriteria[filterGroups][0][filters][3][field]=sku&searchCriteria[filterGroups][0][filters][3][value]=VDV226-011-SEN';
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
            new_SMProducts[index].quantity = new_SMProducts[index].quantity + parseInt(product.quantity);
            setSelectedSMProducts(new_SMProducts);
        } else {
            let new_SMProducts = selectedSMProducts.slice();
            new_SMProducts.push(product);
            setSelectedSMProducts(new_SMProducts);
        }

        if(product.quantity > 1) submitNotification('addedToCartMultiple', parseInt(product.quantity) + 'x ' + product.sku);
        if(product.quantity == 1) submitNotification('addedToCart', product.sku);
    }
    
    const deleteSMProduct = index => {
        let removedSMProduct = selectedSMProducts[index];
        let new_SMProducts = selectedSMProducts.slice();
        new_SMProducts.splice(index, 1);
        setSelectedSMProducts(new_SMProducts);
        submitNotification('deletedFromCart', removedSMProduct?.sku);
    }

    const updateSMProductQuantity = (index, quantity) => {
        let new_SMProducts = selectedSMProducts.slice();
        new_SMProducts[index].quantity = quantity;
        setSelectedSMProducts(new_SMProducts);
        submitNotification('cartUpdated');
    }

    const addMount = (index, mount) => {
        let new_cameras = cameras.slice();
        new_cameras[index].mount = mount;
        setCameras(new_cameras);
        submitNotification('addedToCart', mount.sku);
    }

    const deleteMount = (index) => {
        let removedMount = cameras[index].mount;
        let new_cameras = cameras.slice();
        new_cameras[index].mount = null;
        setCameras(new_cameras);
        submitNotification('deletedFromCart', removedMount.sku);
    }

    const addMonitor = product => {
        // if there is a monitor with a cable, keep the cable
        if(selectedMonitor?.cable){
            product.cable = selectedMonitor.cable;
        }

        setSelectedMonitor(product);
        submitNotification('addedToCart', product.sku);
    }

    const addHDMI = product => {
        let new_monitor = JSON.parse(JSON.stringify(selectedMonitor));
        new_monitor.cable = product;
        setSelectedMonitor(new_monitor)
        submitNotification('addedToCart', product.sku);
    }

    const deleteMonitor = () => {
        let removed_monitor = selectedMonitor;
        setSelectedMonitor('');
        submitNotification('deletedFromCart', removed_monitor.sku);
    }

    const deleteHDMI = () => {
        let removed_cable = selectedMonitor.cable;
        let new_monitor = JSON.parse(JSON.stringify(selectedMonitor));
        new_monitor.cable = null;
        setSelectedMonitor(new_monitor);
        submitNotification('deletedFromCart', removed_cable.sku);
    }

    const addPowerInjector = (product) => {
        let new_POEs = selectedPowerInjectors.slice();

        let index = new_POEs.findIndex(poe => poe.sku == product.sku)
        console.log(index);

        if(index == -1){
            product.quantity = 1;
            new_POEs.push(product);
            setSelectedPowerInjectors(new_POEs);
        } else {
            new_POEs[index].quantity = new_POEs[index].quantity + 1;
            setSelectedPowerInjectors(new_POEs);
        }

        submitNotification('addedToCart', product.sku);
    }

    const deletePowerInjector = index => {
        let deletedPOE = selectedPowerInjectors[index];
        let new_POEs = selectedPowerInjectors.slice();
        new_POEs.splice(index, 1);
        setSelectedPowerInjectors(new_POEs);
        submitNotification('deletedFromCart', deletedPOE.sku);
    }

    const addInstallation = (installation) => {
        if(!installation && isInstallationSelected) submitNotification('deletedFromCart', 'Installation');
        if(installation && !isInstallationSelected) submitNotification('addedToCart', `Installation`);

        setIsInstallationSelected(installation);
    }

    const deleteInstallation = () => {
        setIsInstallationSelected(false);
        submitNotification('deletedFromCart', 'Installation');
    }

    const submitNotification = (type, payload) => {
        switch(type) {
            case 'addedToCart':
                store.addNotification({
                    title: 'Item added',
                    message: payload + " has been added to cart",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["fade-in"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 4000,
                      onScreen: false
                    }
                  });
                // Google Analytics
                ReactGa.event({
                    category: 'Add to cart',
                    action: payload + ' added to cart',
                })
                break;
            case 'addedToCartMultiple':
                store.addNotification({
                    title: 'Items added',
                    message: payload + " were added to cart",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["fade-in"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: false
                    }
                    });

                // Google Analytics
                ReactGa.event({
                    category: 'Add to cart',
                    action: payload + ' added to cart',
                })
                break;
            case 'deletedFromCart':
                store.addNotification({
                    title: 'Item deleted',
                    message: payload + " has been removed from cart",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["fade-in"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 4000,
                      onScreen: false
                    }
                  });
                // Google Analytics
                ReactGa.event({
                    category: 'Add to cart',
                    action: payload + ' added to cart',
                })
                break;
            case 'cartUpdated':
                store.addNotification({
                    title: 'Cart updated',
                    message: "Your cart has been updated",
                    type: "info",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["fade-in"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 4000,
                      onScreen: false
                    }
                  });
                break;
            case 'installationUpdated':
                store.addNotification({
                    title: 'Cart Updated',
                    message: 'Your installation fees have been updated',
                    type: 'info',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['fade-in'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 4000,
                        onScreen: false
                    }
                });
                break;
            case 'welcomeBack':
                store.addNotification({
                    title: 'Welcome back!',
                    message: "We have saved your previous selections for your convenience.",
                    type: "info",
                    insert: "top",
                    container: "top-left",
                    animationIn: ["fade-in"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: false
                    }
                    });
                // Google Analytics
                ReactGa.event({
                    category: 'Returning user',
                    action: 'User returned to application',
                })
                break;
            case 'goToCheckout':
                store.addNotification({
                    title: 'Discounts',
                    message: "Click 'proceed to checkout' to see discounts based on your selections",
                    type: "info",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["fade-in"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 8000,
                    }
                    });
            case 'applicationRestarted':
                store.addNotification({
                    title: 'Application Restarted',
                    message: 'Your selections were cleared successfully. You can begin building a new system.',
                    type: "info",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["fade-in"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                    }
                    });
        }
    }

    const goToStep = (step) => {
        switch(step){
            case 'cameras':
                setCurrentStep(3);
                break;
            case 'NVR':
                setCurrentStep(4);
                break;
            case 'hard drives':
                setCurrentStep(5);
                break;
            case 'cables':
                if(cablesType != 'none') setCurrentStep(7);
                if(cablesType == 'none') setCurrentStep(6);
                break;
            case 'addons':
                if(cablesType != 'none') setCurrentStep(8);
                if(cablesType == 'none') setCurrentStep(7);
                break;
            case 'installation':
                if(cablesType != 'none') setCurrentStep(9);
                if(cablesType == 'none') setCurrentStep(8);
                break;
            case 'review':
                if(cablesType != 'none') setCurrentStep(10);
                if(cablesType == 'none') setCurrentStep(9);
                setDisplayBackToReview(false);
                break;
        }

        if(step != 'review' && hasReviewBeenVisited) setDisplayBackToReview(true);
    }

    const isLastStep = () => {
        if(cablesType == 'none'){
            return (currentStep == 9)
        } else {
            return (currentStep == 10)
        }
    }

    const restartApp = () => {
        setHasReviewBeenVisited(false);
        setDisplayBackToReview(false);
        setCanClickNext(false);
        setSubtotal(0.00);
        setIsInstallationSelected(null);
        setSelectedPowerInjectors([]);
        setSelectedMonitor('');
        setSelectedSMProducts([]);
        setCablesType('');
        setSelectedHardDrives([]);
        setSelectedNVR('');
        setCameras([]);
        setHomeOrBusiness('');
        setCurrentStep(1);

        submitNotification('applicationRestarted');
    }

    const proceedToPurchase = () => {
        ReactGa.event({
            category: 'Button',
            action: 'Customer proceeded to purchase / quote!!',
        })

        let products = '';

        cameras.forEach(camera => {
            products = products + camera.id + ',' + camera?.mount?.id + ',';;
            if(cablesType == 'pre-made') products = products + camera?.cable?.id + ',';
        })

        products = products + selectedNVR?.id + ',' 
        if(cablesType == 'pre-made') products = products + selectedNVR?.cable?.id + ',';

        selectedHardDrives.forEach(hardDrive => {
            products = products + hardDrive?.id + ',';
        })

        selectedPowerInjectors.forEach(powerInjector => {
            let i = 0;
            while(i != powerInjector.quantity){
                products = products + powerInjector?.id + ',';
                i++;
            }
        })

        if (cablesType == 'self-made') {
            selectedSMProducts.forEach(item => {
                let i = 0;
                while(i != item?.quantity) {
                    products = products + item?.id + ',';
                    i++;
                }
            })
        }
        
        products = products + selectedMonitor?.id + ',' + selectedMonitor?.cable?.id + ',';
        
        if(isInstallationSelected) {
            if(homeOrBusiness == 'home') {
                products = products + '641,'; 
            } else if (homeOrBusiness == 'business') {
                products = products + '642,'; 
            }
            
            let i = 0;
            while(i != cameras.length) {
                products = products + '644,';
                i++;
            }
            
        }
        
        freeProducts.forEach(item => {
            products = products + item?.id + ',';
        })

        // Built with Kit Builder product for analytics
        products = products + '645';
        
        console.log(products);

        window.open('https://www.backstreet-surveillance.com/customcart/add/add/pro_ids/' + products);
    }

    return(
        <div className="relative">
            <Head>
                <title>Surveillance System Kit Builder</title>
                <meta property="og:title" content="CCTV Kit Builder" key="title" />
                <meta description="Build your own complete surveillance system in seconds."/>
                <link rel="icon" href="/KitBuilderFavicon.png"/>
            </Head>

            {/* Animation layover */}
            <div className="fixed top-0 h-screen w-screen z-50 in-wipe-right-green" style={{backgroundColor: '#438241'}}>
                <div style={{top: '50%', right: '50%', transform: 'translate(50%, -50%)'}} className="absolute" >
                    <Image src="/images/BS_Logo_White.png" width={375} height={100} priority={true}/>
                </div>
            </div>
            <ReactNotification className="lg:mt-20"/>
            {isLoading && 
            <div id="slider" class="slider w-full">
                <div class="line bg-green-600"></div>
                <div class="subline bg-green-600 inc"></div>
                <div class="subline bg-green-600 dec"></div>
            </div>}
            <ProgressBar progress={(cablesType != 'none' ? currentStep / 10 : currentStep / 9)} />
            <main className="flex flex-row justify-center items-start lg:mt-14 z-20">
                <div className="relative flex flex-col justify-center 2xl:w-8/12 xl:w-10/12 lg:w-11/12 md:w-11/12">
                    <Question currentStep={currentStep} cablesType={cablesType} />
                    <hr className="mt-5"/>
                    <div className="pb-44">
                        <Answer 
                            currentStep={currentStep}
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
                            duplicateCamera={duplicateCamera}
                            selectedNVR={selectedNVR}
                            selectNVR={selectNVR}
                            deleteNVR={deleteNVR}
                            selectedHardDrives={selectedHardDrives}
                            addHardDrive={addHardDrive}
                            deleteHardDrive={deleteHardDrive}
                            cablesType={cablesType}
                            selectCablesType={selectCablesType}
                            selectCable={selectCable}
                            deleteCable={deleteCable}
                            selectSMProducts={selectSMProducts}
                            selectedSMProducts={selectedSMProducts}
                            deleteSMProduct={deleteSMProduct}
                            updateSMProductQuantity={updateSMProductQuantity}
                            monitorProducts={monitorProducts}
                            mountProducts={mountProducts}
                            powerInjectors={powerInjectors}
                            addMonitor={addMonitor}
                            addHDMI={addHDMI}
                            addMount={addMount}
                            deleteMount={deleteMount}
                            selectedMonitor={selectedMonitor}
                            deleteHDMI={deleteHDMI}
                            deleteMonitor={deleteMonitor}
                            selectedPowerInjectors={selectedPowerInjectors}
                            addPowerInjector={addPowerInjector}
                            deletePowerInjector={deletePowerInjector}
                            isInstallationSelected={isInstallationSelected}
                            addInstallation={addInstallation}
                            deleteInstallation={deleteInstallation}
                            subtotal={subtotal}
                            goToStep={goToStep}
                            freeProducts={freeProducts}
                            proceedToPurchase={proceedToPurchase}
                        />
                    </div>

                    <div className="fixed bottom-0 lg:pb-10 left-0 w-screen flex flex-col items-center mt-10 bg-white z-20">
                        <div className="flex relative flex-col justify-center 2xl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12">
                            <Actions 
                                nextStep={nextStep} 
                                prevStep={prevStep} 
                                currentStep={currentStep} 
                                canClickNext={canClickNext} 
                                setCanClickNext={setCanClickNext} 
                                isLastStep={isLastStep}
                                displayBackToReview={displayBackToReview}
                                goToStep={goToStep}
                                subtotal={subtotal}
                                proceedToPurchase={proceedToPurchase}
                            />
                        </div>
                    </div>
                    <Cart 
                        cameras={cameras} 
                        selectedNVR={selectedNVR} 
                        selectedHardDrives={selectedHardDrives} 
                        subtotal={subtotal}
                        selectedSMProducts={selectedSMProducts}
                        cablesType={cablesType}
                        selectedMonitor={selectedMonitor}
                        selectedPowerInjectors={selectedPowerInjectors}
                        isInstallationSelected={isInstallationSelected}
                        homeOrBusiness={homeOrBusiness}
                        goToStep={goToStep}
                        deleteCamera={deleteCamera}
                        deleteNVR={deleteNVR}
                        deleteHardDrive={deleteHardDrive}
                        deleteCable={deleteCable}
                        deleteSMProduct={deleteSMProduct}
                        deleteMount={deleteMount}
                        deleteHDMI={deleteHDMI}
                        deleteMonitor={deleteMonitor}
                        deletePowerInjector={deletePowerInjector}
                        deleteInstallation={deleteInstallation}
                        restartApp={restartApp}
                    />
                </div>
            </main>
        </div>
        
    )
}