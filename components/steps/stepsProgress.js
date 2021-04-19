import {BsDot} from 'react-icons/bs'

export default function StepsProgress({currentStep, setCurrentStep}) {

    const steps = [1, 2, 3, 4, 5, 6]

    return(
        <div className="flex flex-row justify-evenly px-16">
            {steps.map((step, index) => (
                <div
                    onClick={e => setCurrentStep(step)} 
                    style={{padding: '1px'}} className={"border rounded-full cursor-pointer " + (currentStep == step ? 'bg-green-600 text-white hover:bg-green-400' : 'bg-gray-100 hover:bg-gray-50')}
                    key={index}
                >
                    <span className={"text-xl align-bottom "}><BsDot /></span>
                </div>
            ))}
        </div>
    )
}