export default function Description({ displayMoreInfo, housingSelected }) {
    if(!displayMoreInfo){
        return(<div></div>)
    } else 
    switch(housingSelected) {
        case 'dome':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12 text-center">
                        <p><span className="text-green-600 font-semibold">Dome Style</span> cameras are designed for indoor use. They are often used indoors due to their small size. The Dome style is good at hiding the lens but does not have the best night vision systems due to the plastic cover. It is the perfect answer <span className="text-green-600 font-semibold">if the public may have access to the camera</span>, as they are much more difficult to vandalize. </p>
                    </div>
                </section>
            )
            break;
        case 'bullet':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12 text-center">
                        <p><span className="text-green-600 font-semibold">Bullet Style</span> cameras are great for <span className="text-green-600 font-semibold">covering longer distances</span>. The housings are solid and designed for outdoor use.</p>
                    </div>
                </section>
            )
            break;
        case 'ptz':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12 text-center">
                        <p><span className="text-green-600 font-semibold">PTZ (Pan-Tilt-Zoom)</span> cameras support 3 motors: a heating/cooling system, a vertical and horizontal moving system and a motorized lens. They are capable of performing scheduled patrols to capture multiple specific areas. PTZs are usually found outdoors and <span className="text-green-600 font-semibold">used for large area surveillance</span>.</p>
                    </div>
                </section>
            )
            break;
    }
}