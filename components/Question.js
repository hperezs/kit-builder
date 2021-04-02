import { useEffect, useState } from "react";

export default function Question({ currentStep, cablesType }) {
    const [ currentQuestion, setCurrentQuestion ] = useState('');

    useEffect(() => {
        // Skip choose cables question if user selected "I have my own"
        if(cablesType == 'none'){
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
                    setCurrentQuestion('Choose your Hard Drive(s)');
                    break;
                case 6:
                    setCurrentQuestion('How do you want to choose your cables?');
                    break;
                case 7:
                    setCurrentQuestion('Choose additional items')
                    break;
            }
        } else switch(currentStep) {
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
                setCurrentQuestion('Choose your Hard Drive(s)');
                break;
            case 6:
                setCurrentQuestion('How do you want to choose your cables?');
                break;
            case 7:
                setCurrentQuestion('Choose your cables');
                break;
            case 8:
                setCurrentQuestion('Choose additional items')
                break;
        }
    })
    

    return(
        <h4 className="text-3xl text-gray-800 mt-5">
            {currentQuestion}
        </h4>
    )
}