import { useEffect, useState } from "react"

export default function ViewingAreaDropdown({ indoorOrOutdoor, camera, index, selectViewingArea }) {
    const [ selectedValue, setSelectedValue ] = useState(camera.viewingArea);

    const isDisabled = (camera.housing == 'ptz');

    const style = "block w-40 h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    // Select default values
    useEffect(() => {
        if(camera.viewingArea == '' && camera.housing == 'ptz'){
            selectViewingArea(indoorOrOutdoor, '200-1000 ft', index);
        } 

        if(camera.viewingArea == '' && camera.housing != 'ptz') {
            selectViewingArea(indoorOrOutdoor, 'Under 50 ft', index);
        }
    }, [])

    const handleChange = (event) => {
        let viewingArea = event.target.value;
        setSelectedValue(viewingArea);
        selectViewingArea(indoorOrOutdoor, viewingArea, index);
    }

    return(
        <select
            disabled={isDisabled}
            value={selectedValue}
            onChange={handleChange}
            placeholder="Select"
            className={style + (isDisabled ? 'cursor-not-allowed' : 'cursor-pointer')}
            >
            <option disabled={isDisabled}>Under 50 ft</option>
            <option disabled={isDisabled}>50-180 ft</option>
            <option disabled={(camera.housing == 'dome' || camera.housing == 'bullet' ? true : false)}>200-1000 ft</option>
        </select>
    )
}