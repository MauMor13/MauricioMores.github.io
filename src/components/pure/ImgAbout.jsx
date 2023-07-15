import styled from 'styled-components';
import propTypes from '';

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
        background-color: aliceblue;
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
        background-color: lightblue;
    }
`;
const ImgAbout = (props) => {
    return (
        <Img>
            
        </Img>
    );
}


export default ImgAbout;
