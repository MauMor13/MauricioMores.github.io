import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
    width: 400px;
    height: 400px;
    background-color: white;
`; 

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current; 
        const context = canvas.getContext('2d');
        let animationFrameId;

        

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <Canvas ref={canvasRef}></Canvas>;
};

export default BackgroundAnimation;

