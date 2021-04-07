import {BsDot} from 'react-icons/bs'

export default function CameraLenses() {

    return(
        <section id="cameraLenses" className="my-10 pb-20">
            <h3 className="text-center my-10 text-3xl font-light">Camera Lenses</h3>
            <div className="flex flex-row justify-center">
                <div className="w-8/12">
                    <p>The camera lens is determined by the viewing area.</p>
                    <br/>
                    <ul className="list-inside">
                        <li className="mb-4"><BsDot className="inline" />If the viewing area is of under 50 feet from the camera, select a 3.6mm fixed lens. This lens provides wide angle for close objects.</li>
                        <li className="mb-4"><BsDot className="inline" />If the viewing area is of over 50 feet from the camera, select a camera with a 2.8-12mm zoom lens. This lens is flexible and can provide clear images for further distances</li>
                        <li className="mb-4"><BsDot className="inline" />If the viewing are is of over 150 feet from the camera, consider PTZ cameras with a motorized zoom lens.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}