import { useState, useEffect } from 'react'

export default function CameraLensDropdown({ cameraLens, setCameraLens, viewingArea }) {
    const [ selectedValue, setSelectedValue ] = useState(cameraLens);

    //Select defaults
    useEffect(() => {
        switch(viewingArea) {
            case 'Under 50 ft':
                setCameraLens('3.6mm fixed');
                break;
            case '50-180 ft':
                setSelectedValue('2.8-12mm manual')
                setCameraLens('2.8-12mm manual');
                break;
            case '200-1000 ft':
                setCameraLens('4-84+mm motorized');
                break;
        }
    }, [viewingArea])

    const classNames = "inline h-14 ml-2 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    const handleChange = (event) => {
        let viewingArea = event.target.value;
        setSelectedValue(viewingArea);
        setCameraLens(event.target.value);
    }

    if(viewingArea == 'Under 50 ft') {
        return (
            <div>
                <select
                    disabled
                    value='3.6mm fixed'
                    className={classNames + 'bg-gray-50 cursor-not-allowed'}
                    >
                    <option>3.6mm fixed</option>
                </select>
            </div>
        )
    }

    if(viewingArea == '200-1000 ft') {
        return (
            <div>
                <select
                    disabled
                    value='4-84+mm motorized'
                    className={classNames + 'bg-gray-50 cursor-not-allowed'}
                    >
                    <option>4-84+mm motorized</option>
                </select>
            </div>
        )
    }

    return(
        <div className="inline">
            <span className="ml-4">2.8-12mm</span>
            <select
                value={selectedValue}
                onChange={handleChange}
                className={classNames}
                >
                <option value={'2.8-12mm manual'} disabled={(viewingArea != '50-180 ft' ? true : false)}>manual zoom</option>
                <option value={'2.8-12mm motorized'} disabled={(viewingArea != '50-180 ft' ? true : false)}>motorized zoom</option>
            </select>
        </div>
        
    )

    
}