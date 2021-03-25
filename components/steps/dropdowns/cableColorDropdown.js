import { useEffect } from "react";

export default function CableColorDropdown({setCableColor}) {

    useEffect(() => {
        // Default to white if the component is re-rendered
        setCableColor('White');
    }, [])

    const style = "inline w-40 h-14 ml-3 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    return(
        <select
            onChange={e => setCableColor(e.target.value)}
            placeholder="Select"
            className={style + 'cursor-pointer'}
        >
            <option>White</option>
            <option>Black</option>
        </select>
    )
}