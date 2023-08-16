import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.div`
    position: relative;
    width: 30rem;
    min-height: 100%;
    &:after{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: 20rem;
        height: 20rem;
        border-radius: .5rem;
        background-image: url(${props => props.imgOne});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    &:before{
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -30%);
        content: '';
        width: 20rem;
        height: 20rem;
        border-radius: .5rem;
        background-image: url(${props => props.imgTwo});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(100%);
    }
    &:hover{
        &:after{
        animation: movDiagonalAfter 1s forwards;
        }
        &:before{
        animation: movDiagonalBefore 1s forwards;
        }
    }
    @keyframes movDiagonalAfter {
        0%{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        50%{
            top: 50%;
            left: 55%;
            transform: translate(-50%, -40%);
        }
        100%{
            top: 50%;
            left: 60%;
            transform: translate(-50%, -30%);
            z-index: -1;
            filter: grayscale(100%);
        }
    }
    @keyframes movDiagonalBefore {
        0%{
            top: 50%;
            left: 60%;
            transform: translate(-50%, -30%);
        }
        50%{
            top: 50%;
            left: 55%;
            transform: translate(-50%, -40%);
        }
        100%{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: none;
        }
    }
`;
const ImgAbout = ({imgOne, imgTwo}) => {
    return (
        <Img imgOne={imgOne} imgTwo={imgTwo}></Img>
    );
}
ImgAbout.prototype = {
    imgOne : PropTypes.string,
    imgTwo : PropTypes.string
}


export default ImgAbout;
