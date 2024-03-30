export default function NightVision() {
  return (
    <section id="nightVision" className="my-10 pb-20">
      <h3 className="text-center my-10 text-4xl font-light">Night Vision</h3>
      <div className="flex flex-row justify-center">
        <div className="lg:w-11/12 xl:w-8/12 2xl:w-7/12">
          <p>
            Select a camera that’s night vision range is{" "}
            <span className="text-green-600 font-semibold">
              no more than double the expected viewing distance
            </span>
            .<br />
            <br /> For example, if your desired viewing distance is 60-80 feet
            from the camera location, we would select a camera with a 120 foot
            night vision distance. If your desired viewing distance is 30 feet,
            we would not recommend a camera with night viewing distance stronger
            than 60 feet.
          </p>
        </div>
      </div>
    </section>
  );
}
