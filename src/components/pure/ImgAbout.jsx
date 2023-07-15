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
        height: 15rem;
        border-radius: .5rem;
        background-image: url(${props => props.imgOne});
    }
    &:before{
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -30%);
        content: '';
        width: 20rem;
        height: 15rem;
        border-radius: .5rem;
        background-image: url(${props => props.imgTwo});
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
