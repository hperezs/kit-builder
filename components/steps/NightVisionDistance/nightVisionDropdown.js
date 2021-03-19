import { useState, useEffect } from "react";

export default function NightVisionDropdown({ camera, selectNightVision, indoorOrOutdoor, index }) {
    const [ selectedValue, setSelectedValue ] = useState(camera.nightVisionDist)

    // Set defaults
    useEffect(() => {
        switch(camera.viewingArea) {
            case 'Under 50 ft':
                selectNightVision(indoorOrOutdoor, '60ft', index);
                break;
            case '50-180 ft':
                if(camera.housing == 'dome'){
                    selectNightVision(indoorOrOutdoor, '60ft+', index);
                } else if (camera.housing == 'bullet' && camera.viewingArea == '50-180 ft') {
                    selectNightVision(indoorOrOutdoor, '120ft+', index);
                } else {
                    selectNightVision(indoorOrOutdoor, '70ft', index);
                }
                break;
            case '200-1000 ft':
                selectNightVision(indoorOrOutdoor, '300ft', index);
                break;
        }
    }, [])

    const handleChange = (event) => {
        let value = event.target.value;
        setSelectedValue(value);
        console.log('args: ' + indoorOrOutdoor + value + index);
        selectNightVision(indoorOrOutdoor, value, index);
    }

    const classNames = "inline w-28 h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    if (camera.housing == 'dome' && camera.viewingArea == "50-180 ft"){
        return(
            <select disabled className={classNames + 'bg-gray-50 cursor-not-allowed'}>
                <option>60ft+</option>
            </select>
        )
    }

    if (camera.housing == 'bullet' && camera.viewingArea == '50-180 ft'){
        return(
            <select disabled className={classNames + 'bg-gray-50 cursor-not-allowed'}>
                <option>120ft+</option>
            </select>
        )
    }

    if (camera.housing == 'ptz') {
        return (
            <select
                value={selectedValue}
                onChange={handleChange}
                className={classNames + 'border-green-400 cursor-pointer'}
                >
                <option value="150ft">150 ft</option>
                <option value="300ft">300 ft</option>
                <option value="360ft">360 ft</option>
                <option value="400ft">400 ft</option>
                <option value="450ft">450 ft</option>
            </select>
        )
    }

    return (
        <select
            disabled={(camera.viewingArea == 'Under 50 ft' || camera.viewingArea == '200-1000 ft' ? true : false)}
            value={selectedValue}
            onChange={handleChange}
            className={classNames + (camera.viewingArea == '50-180 ft' ? 'border-green-400 cursor-pointer' : 'bg-gray-50 cursor-not-allowed')}
            >
            <option value="60ft" disabled={(camera.viewingArea != 'Under 50 ft' ? true : false)}>60 ft</option>
            <option value="70ft" disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>70 ft</option>
            <option value="90ft" disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>90 ft</option>
            <option value="120ft" disabled={(camera.housing != 'bullet' ? true : false)}>120 ft</option>
            <option value="180ft" disabled={(camera.housing != 'bullet' ? true : false)}>180 ft</option>
            <option value="240ft" disabled={(camera.housing != 'bullet' ? true : false)}>240 ft</option>
            <option value="300ft" disabled={(camera.viewingArea != '200-1000 ft' ? true : false)}>300 ft</option>
        </select>
    )
}