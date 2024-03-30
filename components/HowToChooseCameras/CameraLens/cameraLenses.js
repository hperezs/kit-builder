import { BsDot } from "react-icons/bs";

export default function CameraLenses() {
  return (
    <section id="cameraLenses" className="my-10 pb-10">
      <h3 className="text-center my-10 text-4xl font-light">Camera Lens</h3>
      <div className="flex flex-row justify-center">
        <div className="lg:w-8/12">
          <p className="text-center">
            The camera lens is determined by the viewing area.
          </p>
          <br />
          <ul className="list-inside">
            <li className="mb-4 p-4 border rounded shadow">
              If the viewing area is{" "}
              <span className="text-green-600 font-semibold">
                under 60 feet
              </span>{" "}
              from the camera, a{" "}
              <span className="text-green-600 font-semibold">
                3.6mm fixed lens
              </span>{" "}
              is recommended. This lens provides a wide angle for close objects.
            </li>
            <li className="mb-4 p-4 border rounded shadow">
              If the viewing area is{" "}
              <span className="text-green-600 font-semibold">over 60 feet</span>{" "}
              from the camera, a{" "}
              <span className="text-green-600 font-semibold">
                2.8-12mm zoom lens
              </span>{" "}
              is recommended. The lens can be adjusted to provide clear images
              for close objects or for longer distances. This lense can be{" "}
              <span className="font-semibold text-green-600">manual</span> or{" "}
              <span className="font-semibold text-green-600">motorized</span>.
            </li>
            <div className="flex text-center">
              <li className="mb-4 p-4 border rounded shadow mr-2">
                <h5 className="text-green-600 font-semibold">Manual</h5>
                <p>This lens can only be manually adjusted by hand</p>
              </li>
              <li className="mb-4 p-4 border rounded shadow ml-2">
                <h5 className="text-green-600 font-semibold">Motorized</h5>
                <p>
                  This lens can be adjusted on the Video Recorder through
                  software that controls the lens motor.
                </p>
              </li>
            </div>
            <li className="mb-4 p-4 border rounded shadow">
              If the viewing area is{" "}
              <span className="text-green-600 font-semibold">
                over 150 feet
              </span>{" "}
              from the camera, consider{" "}
              <span className="text-green-600 font-semibold">PTZ cameras</span>{" "}
              with a motorized zoom lens.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
