import { useState, useEffect } from "react";

export default function NightVisionDropdown({ viewingArea, cameraHousing, nightVisionDist, setNightVisionDist }) {
    const [ selectedValue, setSelectedValue ] = useState(nightVisionDist)

    // Set defaults
    useEffect(() => {
        switch(viewingArea) {
            case 'Under 50 ft':
                setSelectedValue('60ft');
                setNightVisionDist('60ft');
                break;
            case '50-180 ft':
                if(cameraHousing == 'dome'){
                    setSelectedValue('60ft+');
                    setNightVisionDist('60ft+');
                } else if (cameraHousing == 'bullet' && viewingArea == '50-180 ft') {
                    setSelectedValue('120ft+');
                    setNightVisionDist('120ft+');
                } else {
                    setSelectedValue('70ft');
                    setNightVisionDist('70ft');
                }
                break;
            case '200-1000 ft':
                setSelectedValue('300ft');
                setNightVisionDist('300ft');
                break;
        }
    }, [viewingArea, cameraHousing])

    const handleChange = (event) => {
        let value = event.target.value;
        setSelectedValue(value);
        setNightVisionDist(value);
    }

    const classNames = "inline w-28 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    if (cameraHousing == 'dome' && viewingArea == "50-180 ft"){
        return(
            <select disabled className={classNames + 'bg-gray-50 cursor-not-allowed'}>
                <option>60ft+</option>
            </select>
        )
    }

    if (cameraHousing == 'bullet' && viewingArea == '50-180 ft'){
        return(
            <select disabled className={classNames + 'bg-gray-50 cursor-not-allowed'}>
                <option>120ft+</option>
            </select>
        )
    }

    if (cameraHousing == 'ptz') {
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
            disabled={(viewingArea == 'Under 50 ft' || viewingArea == '200-1000 ft' ? true : false)}
            value={selectedValue}
            onChange={handleChange}
            className={classNames + (viewingArea == '50-180 ft' ? 'border-green-400 cursor-pointer' : 'bg-gray-50 cursor-not-allowed')}
            >
            <option value="60ft" disabled={(viewingArea != 'Under 50 ft' ? true : false)}>60 ft</option>
            <option value="70ft" disabled={(viewingArea != '50-180 ft' ? true : false)}>70 ft</option>
            <option value="90ft" disabled={(viewingArea != '50-180 ft' ? true : false)}>90 ft</option>
            <option value="120ft" disabled={(cameraHousing != 'bullet' ? true : false)}>120 ft</option>
            <option value="180ft" disabled={(cameraHousing != 'bullet' ? true : false)}>180 ft</option>
            <option value="240ft" disabled={(cameraHousing != 'bullet' ? true : false)}>240 ft</option>
            <option value="300ft" disabled={(viewingArea != '200-1000 ft' ? true : false)}>300 ft</option>
        </select>
    )
}