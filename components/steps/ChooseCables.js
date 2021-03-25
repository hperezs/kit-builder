import ChooseCable from "./ChooseCables/chooseCable"


export default function ChooseCables({cableType, cameras, indoorCables, outdoorCables, selectCable}) {

    return(
        <section className="my-10">
            <div className="flex flex-col items-start">
                {cameras.length != 0 && 
                    cameras.map((camera, index) => {

                        return <ChooseCable camera={camera} key={index} indoorCables={indoorCables} outdoorCables={outdoorCables} selectCable={selectCable}/>
                    })
                }
            </div>
            
        </section>
    )
}