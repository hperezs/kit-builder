export default function Description({ displayMoreInfo, housingSelected }) {
    if(!displayMoreInfo){
        return(<div></div>)
    } else 
    switch(housingSelected) {
        case 'dome':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12">
                        <p>“Dome Style” cameras are designed for indoor use. They are often used indoors due to their small size. The Dome style is good at hiding the lens but does not have the best night vision systems due to the plastic cover. It is the perfect answer if the public may have access to the camera, as they are much more difficult to vandalize. </p>
                    </div>
                </section>
            )
            break;
        case 'bullet':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12">
                        <p>“Bullet Style” cameras are great for outdoor use. The housings are solid and designed for harsh environments.</p>
                    </div>
                </section>
            )
            break;
        case 'ptz':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12">
                        <p>“PTZ (Pan-Tilt-Zoom)” cameras support 3 motors: a heating/cooling system, a vertical and horizontal moving system and a motorized lens. PTZs are usually found outdoors and used for large area surveillance.</p>
                    </div>
                </section>
            )
            break;
    }
}