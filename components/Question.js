import { useEffect, useState } from "react";

export default function Question({ step }) {
    const [ currentQuestion, setCurrentQuestion ] = useState('');

    useEffect(() => {
        switch(step) {
            case 0:
                setCurrentQuestion('Are you purchasing a surveillance system for a home or a business?');
                break;
            case 1:
                setCurrentQuestion('Where are you placing your cameras?');
                break;
            case 2: 
                setCurrentQuestion('How many cameras do you need?');
                break;
            case 3:
                setCurrentQuestion('Choose your type of surveillance system')
                break;
            case 4:
                setCurrentQuestion('Choosing the right cameras');
                break;
            case 5:
                setCurrentQuestion('Camera Housing');
                break;
            case 6:
                setCurrentQuestion('Camera Lens');
                break;
            case 7:
                setCurrentQuestion('Camera Resolution');
                break;
            case 8:
                setCurrentQuestion('Night Vision distance');
                break;
        }
    })
    

    return(
        <h4 className="text-3xl text-gray-800 mt-5">
            {currentQuestion}
        </h4>
    )
}