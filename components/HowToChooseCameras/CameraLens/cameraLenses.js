import {BsDot} from 'react-icons/bs'

export default function CameraLenses() {

    return(
        <section id="cameraLenses" className="my-10 pb-10">
            <h3 className="text-center my-10 text-4xl font-light">Camera Lens</h3>
            <div className="flex flex-row justify-center">
                <div className="w-8/12">
                    <p className="text-center">The camera lens is determined by the viewing area.</p>
                    <br/>
                    <ul className="list-inside">
                        <li className="mb-4 p-4 border rounded shadow">If the viewing area is <span className="text-green-600 font-semibold">under 50 feet</span> from the camera, a <span className="text-green-600 font-semibold">3.6mm fixed lens</span> is recommended. This lens provides a wide angle for close objects.</li>
                        <li className="mb-4 p-4 border rounded shadow">If the viewing area is <span className="text-green-600 font-semibold">over 50 feet</span> from the camera, a <span className="text-green-600 font-semibold">2.8-12mm zoom lens</span> is recommended. This lens is flexible and can provide clear images at further distances.</li>
                        <li className="mb-4 p-4 border rounded shadow">If the viewing area is <span className="text-green-600 font-semibold">over 150 feet</span> from the camera, consider <span className="text-green-600 font-semibold">PTZ cameras</span> with a motorized zoom lens.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}