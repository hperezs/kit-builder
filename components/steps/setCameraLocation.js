export default function SetCameraLocation({outdoorSelected, indoorSelected, setOutdoorSelected, setIndoorSelected}) {

    return(
        <section className="h-72 my-10 ">
            <p className="mb-8 text-xl">Select any that apply.</p>
            <div className="text-2xl mb-5 font-light">
                <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    checked={outdoorSelected}
                    onChange={e => setOutdoorSelected(!outdoorSelected)}
                />
                    <span className="ml-2">Outdoors</span>
                </label>
            </div>
            <div className="text-2xl font-light">
                <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    checked={indoorSelected}
                    onChange={e => setIndoorSelected(!indoorSelected)}
                />
                    <span className="ml-2">Indoors</span>
                </label>
            </div>
        </section>
    )
}