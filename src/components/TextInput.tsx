import React from 'react'
import { useRecoilState} from "recoil";
import { textState } from '../textState';

const TextInput:React.FunctionComponent = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} /> 
            <br />
            글자: {text}       
        </div>
    )
}

export default TextInput
