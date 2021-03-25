import { useEffect, useState } from "react";

export default function Question({ currentStep }) {
    const [ currentQuestion, setCurrentQuestion ] = useState('');

    useEffect(() => {
        switch(currentStep) {
            case 1:
                setCurrentQuestion('Are you purchasing a surveillance system for a home or a business?');
                break;
            case 2:
                setCurrentQuestion('How to Choose the Right Cameras');
                break;
            case 3:
                setCurrentQuestion('Choose Your Cameras');
                break;
            case 4:
                setCurrentQuestion('Choose a Video Recorder');
                break;
            case 5:
                setCurrentQuestion('How do you want to choose your cables?');
                break;
            case 6:
                setCurrentQuestion('Choose your cables');
                break;
            case 7:
                setCurrentQuestion('In progress')
                break;
        }
    })
    

    return(
        <h4 className="text-3xl text-gray-800 mt-5">
            {currentQuestion}
        </h4>
    )
}