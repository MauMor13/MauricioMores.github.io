import styled from "styled-components";
import { useState } from "react";

const DownloadCv = styled.a.attrs((props) => ({
    isActive: props.isActive || false
}))`
    text-decoration: none;
    font-family: 'Aesthetic','Courier New', Courier, monospace;
    width: 15rem;
    height: 3rem;
    position: relative;
    display: flex;
    padding-left: 1rem;
    justify-content: start;
    align-items: center;
    font-size: 22px;
    border: 3px solid #28f2b3;
    color: #28f2b3;
    background: none;
    white-space: nowrap;
    overflow: hidden;
    line-height: 64px;
    box-shadow: 0 0 5px #222;
    border-radius: 70px;
    animation: ${(props) => props.isActive ? 'over 3s linear' : 'none'};
    outline: none;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        background: #28f2b3;
        animation: ${(props) => props.isActive ? 'load 3s linear' : 'none'};
    }

    &:after {
        content: "";
        position: absolute;
        top: 10%;
        right: 10%;
        width: 15px;
        height: 15px;
        border-bottom: 3px solid;
        border-right: 3px solid;
        transform: rotate(45deg);
        box-shadow: 3px 3px #333, 6px 6px #28f2b3;
        animation:  ${(props) => props.isActive ? 'dwd 3s linear' : 'none'};
    }
    

    @keyframes over {
    0% , 20% {
        text-indent: -9999px;
    }
    25%,
    100% {
        border-color: #28f2b3;
    }
    30%,
    100% {
        width: 3rem;
        border-color: #444;
    }
    }
    @keyframes load {
    0%,
    40% {
        height: 0;
    }
    90%,
    100% {
        height: 100%;
    }
    }
    @keyframes dwd {
    0%,
    20% {
        top: 10%;
    }
    30%,
    100% {
        right: 29%;
    }
    50%,
    60%,
    70%,
    80% {
        top: 5%;
    }
    35%,
    45%,
    55%,
    65%,
    75%,
    85% {
        top: 15%;
    }
    54% {
        color: #28f2b3;
        box-shadow: 3px 3px #333, 6px 6px #28f2b3;
    }
    55%,
    85% {
        color: #333;
        box-shadow: 3px 3px #28f2b3, 6px 6px #333;
        border-width: 3px;
        height: 15px;
    }
    90%,100% {
        box-shadow: 1px 1px #333;
        border-width: 5px;
        height: 20px;
        color: #fff;
    }}
`;

const ButtonDownload = () => {
    const [actionAnimation, setActionAnimation] = useState(false);
    const handleButtonClick = () => { setActionAnimation(true) };

    return (
        <DownloadCv onClick={handleButtonClick} isActive={actionAnimation} href='src/assets/cv/Mauricio_Mores_Dev_Full_Stack_JAVA.pdf' download={"Mauricio_Mores_Dev_Full_Stack_JAVA"}>Download CV</DownloadCv>
    );
}

export default ButtonDownload;
