import React from 'react'
import { selector, useRecoilValue } from "recoil";
import { textState } from '../textState';

const charCountState = selector({
    key: "charCountState",
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    },
});

const CharacterCount:React.FunctionComponent = () => {
    const count = useRecoilValue(charCountState);
    return (
        <>
        글자 수: {count}
        </>
    )
}

export default CharacterCount
