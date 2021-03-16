import CameraList from "./ChooseCameras/cameraList";



export default function ChooseCameras({ cameras }) {

    return(
        <section className="my-10">
            <p>With the information you have entered, we are ready to make your selections.</p>
            <p className="text-2xl font-light my-10">
                <span className="text-green-700">&#8594;</span> Press the <span className="text-green-600 font-normal">calculate</span> button to get started.
            </p>
            <CameraList cameras={cameras} />
        </section>
    )
}