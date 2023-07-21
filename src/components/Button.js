import React, { useState } from 'react'

const Button = ({ initialState }) => {
    const [buttonText, setButtonText] = useState(initialState);
    const [isPressed, setIsPressed] = useState('false');

    const handleButtonClicked = () => {
        setIsPressed(!isPressed);
        setButtonText(isPressed ? initialState : "Remove")
    }
    return (
        <button onClick={handleButtonClicked} > {buttonText}</ button >
    )
}

export default Button
