
export default function CableLengthDropdown({setCableLocation}) {

    const handleChange = event => {
        setCableLocation(event.target.value);
    }

    const style = "inline w-40 lg:ml-3 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    return(
        <select
            onChange={handleChange}
            placeholder="Select"
            className={style + 'cursor-pointer'}
        >
            <option value='indoor'>Indoor</option>
            <option value='outdoor'>Outdoor</option>
        </select>
    )
}