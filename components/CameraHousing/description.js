export default function Description({ displayMoreInfo, housingSelected }) {
    if(!displayMoreInfo){
        return(<div></div>)
    } else 
    switch(housingSelected) {
        case 'dome':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12">
                        <p>Dome cameras ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="mt-5 mb-2"> Vel pharetra vel turpis nunc. Nec nam aliquam sem et tortor consequat: </p>
                        <ul className="mb-10">
                            <li>-Tempus</li>
                            <li>-Tincidunt</li>
                            <li>-Cursus</li>
                            <li>-Consequat</li>
                        </ul>
                    </div>
                </section>
            )
            break;
        case 'bullet':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12">
                        <p>Bullet cameras ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="mt-5 mb-2"> Vel pharetra vel turpis nunc. Nec nam aliquam sem et tortor consequat: </p>
                        <ul className="mb-10">
                            <li>-Tempus</li>
                            <li>-Tincidunt</li>
                            <li>-Cursus</li>
                            <li>-Consequat</li>
                        </ul>
                    </div>
                </section>
            )
            break;
        case 'ptz':
            return (
                <section className="mt-10 mb-10 flex flex-col items-center">
                    <div className="w-8/12">
                        <p>PTZ cameras ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="mt-5 mb-2"> Vel pharetra vel turpis nunc. Nec nam aliquam sem et tortor consequat: </p>
                        <ul className="mb-10">
                            <li>-Tempus</li>
                            <li>-Tincidunt</li>
                            <li>-Cursus</li>
                            <li>-Consequat</li>
                        </ul>
                    </div>
                </section>
            )
            break;
    }
}