import {BsDot} from 'react-icons/bs'

export default function StepsProgress({currentStep}) {

    const steps = [1, 2, 3, 4, 5, 6]

    return(
        <div className="flex flex-row justify-evenly px-16">
            {steps.map(step => (
                <div style={{padding: '1px'}} className={"border rounded-full " + (currentStep == step ? 'bg-green-600 text-white' : 'bg-gray-100')}>
                    <span className={"text-xl align-bottom "}><BsDot /></span>
                </div>
            ))}
        </div>
    )
}