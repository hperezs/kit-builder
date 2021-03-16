import { useState, useEffect } from 'react'

export default function CameraLensDropdown({ indoorOrOutdoor, camera, index, selectCameraLens }) {
    const [ selectedValue, setSelectedValue ] = useState(camera.cameraLens);

    //Select defaults
    useEffect(() => {
        switch(camera.viewingArea) {
            case 'Under 50 ft':
                selectCameraLens(indoorOrOutdoor, '3.6mm fixed', index);
                break;
            case '50-180 ft':
                selectCameraLens(indoorOrOutdoor, '2.8mm-12mm manual', index);
                break;
            case '200-1000 ft':
                selectCameraLens(indoorOrOutdoor, '4.94mm motorized', index);
                break;
        }
    }, [])

    const classNames = "block w-60 h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    const handleChange = (event) => {
        let viewingArea = event.target.value;
        setSelectedValue(viewingArea);
        selectCameraLens(indoorOrOutdoor, event.target.value, index);
    }

    return(
        <div>
            <select
                disabled={(camera.viewingArea == 'Under 50 ft' || camera.viewingArea == '200-1000 ft' ? true : false)}
                value={selectedValue}
                onChange={handleChange}
                placeholder="Select"
                className={classNames + (camera.viewingArea == '50-180 ft' ? 'border-green-400 cursor-pointer' : 'bg-gray-50 cursor-not-allowed')}
                >
                <option disabled={(camera.viewingArea != 'Under 50 ft' ? true : false)}>3.6mm fixed</option>
                <option disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>2.8mm-12mm manual</option>
                <option disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>2.8mm-12mm motorized</option>
                <option disabled={(camera.viewingArea != '200-1000 ft' ? true : false)}>4.94mm motorized</option>
            </select>
        </div>
        
    )
}