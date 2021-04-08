import { useEffect, useState } from "react";

export default function CableLocationDropdown({setCableLength, indoorOrOutdoor, selectedNVR}) {
    const [selectedValue, setSelectedValue] = useState(selectedNVR ? 5 : 25)

    useEffect(() => {
        if(indoorOrOutdoor == 'outdoor') {
            setCableLength(50);
            setSelectedValue(50);
        };
        if(indoorOrOutdoor == 'indoor') {
            setCableLength(selectedNVR ? 5 : 75);
            setSelectedValue(selectedNVR ? 5 : 75);
        }
    }, [indoorOrOutdoor])


    const handleChange = event => {
        setCableLength(event.target.value);
        setSelectedValue(event.target.value);
    }

    const style = "inline w-40 ml-3 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    if(indoorOrOutdoor == 'indoor')return(
        <select
            value={selectedValue}
            onChange={handleChange}
            placeholder="Select"
            className={style + 'cursor-pointer'}
        >
            {selectedNVR && <option value={5}>5 ft</option>}
            <option value={25}>25 ft</option>
            <option value={75}>75 ft</option>
            <option value={100}>100 ft</option>
            <option value={150}>150 ft</option>
            <option value={200}>200 ft</option>
        </select>
    )

    if(indoorOrOutdoor == 'outdoor')return(
        <select
            value={selectedValue}
            onChange={handleChange}
            placeholder="Select"
            className={style + 'cursor-pointer'}
        >
            <option value={50}>50 ft</option>
            <option value={100}>100 ft</option>
            <option value={200}>200 ft</option>
            <option value={1000}>1000 ft</option>
        </select>
    )
}