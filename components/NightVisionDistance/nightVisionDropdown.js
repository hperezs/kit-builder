import { useState } from "react";

export default function NightVisionDropdown({ camera, selectNightVision, indoorOrOutdoor, index }) {
    const [ selectedValue, setSelectedValue ] = useState(camera.nightVisionDist)

    const handleChange = (event) => {
        let value = event.target.value;
        setSelectedValue(value);
        console.log('args: ' + indoorOrOutdoor + value + index);
        selectNightVision(indoorOrOutdoor, value, index);
    }

    const classNames = "inline w-24 h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    return (
        <select
            disabled={(camera.viewingArea == 'Under 50 ft' || camera.viewingArea == '200-1000 ft' ? true : false)}
            value={selectedValue}
            onChange={handleChange}
            className={classNames + (camera.viewingArea == '50-180 ft' ? 'border-green-400 cursor-pointer' : 'bg-gray-50 cursor-not-allowed')}
            >
            <option disabled={(camera.viewingArea != 'Under 50 ft' ? true : false)}>60 ft</option>
            <option disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>70 ft</option>
            <option disabled={(camera.viewingArea != '50-180 ft' ? true : false)}>90 ft</option>
            <option disabled={(camera.housing != 'bullet' ? true : false)}>120 ft</option>
            <option disabled={(camera.housing != 'bullet' ? true : false)}>180 ft</option>
            <option disabled={(camera.housing != 'bullet' ? true : false)}>240 ft</option>
            <option disabled={(camera.viewingArea != '200-1000 ft' ? true : false)}>300 ft</option>
        </select>
    )
}