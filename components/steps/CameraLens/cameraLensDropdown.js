import { useState, useEffect } from 'react'

export default function CameraLensDropdown({ indoorOrOutdoor, camera, index, selectCameraLens }) {
    const [ selectedValue, setSelectedValue ] = useState(camera.cameraLens);

    //Select defaults
    useEffect(() => {
        if(camera.cameraLens == '') {
            switch(camera.viewingArea) {
                case 'Under 50 ft':
                    selectCameraLens(indoorOrOutdoor, '3.6mm fixed', index);
                    break;
                case '50-180 ft':
                    selectCameraLens(indoorOrOutdoor, '2.8-12mm manual', index);
                    break;
                case '200-1000 ft':
                    selectCameraLens(indoorOrOutdoor, '4-84+mm motorized', index);
                    break;
            }
        }
    }, [])

    const classNames = "block h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    const handleChange = (event) => {
        let viewingArea = event.target.value;
        setSelectedValue(viewingArea);
        selectCameraLens(indoorOrOutdoor, event.target.value, index);
    }

    if(camera.viewingArea == 'Under 50 ft' || camera.viewingArea == '200-1000 ft') {
        return (
            <div>
                <select
                    disabled
                    value={selectedValue}
                    onChange={handleChange}
                    className={classNames + 'w-60 ' + (camera.viewingArea == '50-180 ft' ? 'border-green-400 cursor-pointer' : 'bg-gray-50 cursor-not-allowed')}
                    >
                    <option>3.6mm fixed</option>
                    <option>4-84+ mm motorized</option>
                </select>
            </div>
        )
    }

    return(
        <div className="flex flex-row items-center">
            <span className="mr-3">2.8-12mm</span>
            <select
                value={selectedValue}
                onChange={handleChange}
                className={classNames}
                >
                <option value={'2.8-12mm manual'} disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>manual zoom</option>
                <option value={'2.8-12mm motorized'} disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>motorized zoom</option>
            </select>
        </div>
        
    )

    
}