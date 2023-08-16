import PropTypes from 'prop-types';
import styled from "styled-components";
import { useEffect , useRef } from "react";

const TextOne = styled.span`
    font-family: 'Courier New', Courier, monospace;
    display: block;
    min-height:${props => props.height};
    font-size: 1.3rem;
    padding-top: 1rem;
    text-align: left;
`;
const ToBlink = styled.div`
    display: inline-block;
    animation:  blinkAnimation 1s infinite;
    @keyframes  blinkAnimation {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }`;

const WritingText = (props) => {
    const textWriting = props.text;

    const textRef = useRef(null);
    useEffect(() => {
        const element = textRef.current;
        let index = 0;
        let time = 40;
            writingChar();
        function writingChar() {
            let timeMax = 40;
            let timeMin = 30;
            if (textWriting.charAt(index) == " ") {
                time = Math.floor(Math.random() * (timeMax - timeMin) + timeMin);
            } else {
                time = 40;
            }
            if (index < textWriting.length) {
                element.innerHTML += textWriting.charAt(index);
                index++;
                setTimeout(writingChar, time);
            }
        }
    }, [textWriting]);
    return (
        <>
            <TextOne height={props.height}>
            <span ref={textRef}></span>
            <ToBlink>│</ToBlink>
            </TextOne>
        </>
    );
}
WritingText.prototype = {
    text : PropTypes.string,
}

export default WritingText;
