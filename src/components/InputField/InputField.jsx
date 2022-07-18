import { useState } from 'react';

export const InputField = ({wasClicked}) => {
    const [text, setText] = useState('');

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        if (text) {
            wasClicked(text);
        }
    }

    return (
        <div>
            <input type='text' name='input' placeholder='Insert Text Here' value={text} onChange={handleOnChange} />
            <button data-testid="click-button" onClick={handleOnClick}>Click</button>
        </div>
    )
};