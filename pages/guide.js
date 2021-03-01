import { useState } from "react";
import Actions from "../components/Actions";
import Answer from "../components/Answer";
import Question from "../components/question";

export default function Guide() {
    const [ step, setStep ] = useState(0);
    const [ homeOrBusiness, setHomeOrBusiness ] = useState('');
    const [ indoorSelected, setIndoorSelected ] = useState(false);
    const [ outdoorSelected, setOutdoorSelected ] = useState(false);
    const [ indoorCount, setIndoorCount ] = useState(0);
    const [ outdoorCount, setOutdoorCount ] = useState(0);
    const [ cviOrIp, setCviOrIp ] = useState('');

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }
    
    return(
        <main className="flex flex-col mt-14 px-20">
            <Question step={step} />
            <hr className="mt-5"/>
            <Answer 
                step={step} 
                homeOrBusiness={homeOrBusiness} 
                setHomeOrBusiness={setHomeOrBusiness} 
                indoorSelected={indoorSelected}
                outdoorSelected={outdoorSelected}
                setIndoorSelected={setIndoorSelected}
                setOutdoorSelected={setOutdoorSelected}
                outdoorCount={outdoorCount}
                indoorCount={indoorCount}
                setOutdoorCount={setOutdoorCount}
                setIndoorCount={setIndoorCount}
                cviOrIp={cviOrIp}
                setCviOrIp={setCviOrIp}
            />
            <Actions nextStep={nextStep} prevStep={prevStep} step={step} />
        </main>
    )
}