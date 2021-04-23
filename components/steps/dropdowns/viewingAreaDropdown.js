import { useEffect, useState } from "react"

export default function ViewingAreaDropdown({ viewingArea, setViewingArea, cameraHousing }) {
    const [ selectedValue, setSelectedValue ] = useState(viewingArea);

    const isDisabled = (cameraHousing == 'ptz' || cameraHousing == '');

    const style = "inline w-40 ml-3 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    // Select default values
    useEffect(() => {
        if(cameraHousing == 'ptz'){
            setSelectedValue('200-1000 ft')
            setViewingArea('200-1000 ft');
        } 

        if(cameraHousing != 'ptz') {
            setSelectedValue('Under 60 ft')
            setViewingArea('Under 60 ft');
        }
    }, [cameraHousing])

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setViewingArea(event.target.value);
    }

    return(
        <select
            disabled={isDisabled}
            value={selectedValue}
            onChange={handleChange}
            placeholder="Select"
            className={style + (isDisabled ? 'cursor-not-allowed' : 'cursor-pointer')}
            >
            <option disabled={isDisabled}>Under 60 ft</option>
            <option disabled={isDisabled}>Up to 180 ft</option>
            <option disabled={!isDisabled}>200-1000 ft</option>
        </select>
    )
}