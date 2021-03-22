
export default function EditViewingArea({camera}) {

    const isDisabled = false;
    const style = "block w-40 h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";

    return(
        <select
            disabled={isDisabled}
            className={style + (isDisabled ? 'cursor-not-allowed' : 'cursor-pointer')}
        >
            <option disabled={isDisabled}>Under 50 ft</option>
            <option disabled={isDisabled}>50-180 ft</option>
            <option disabled={(camera.housing == 'dome' || camera.housing == 'bullet' ? true : false)}>200-1000 ft</option>
        </select>
    )
}