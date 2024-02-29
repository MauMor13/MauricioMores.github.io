import styled from "styled-components";
import { useEffect, useState } from "react";
import WritingText from "../components/container/WritingText.jsx";
import CubeRotateAnimation from '../components/container/CubeRotateAnimation.jsx';
import arrowLeft from '../assets/image/arrow-prev-svgrepo-com.svg';
import arrowRight from '../assets/image/arrow-next-svgrepo-com.svg';

const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5rem;
    text-align: left;
`;

const NameSpan = styled.span`
    color: #7100F1;
    text-shadow: 2px 4px 4px #bb0b0b8a;
`;

const Article = styled.article`
    position: relative;
    width: 50%;
    @media (max-width:950px){
        width: 100%;
    } 
`;
const ArticleTwo = styled.article`
    margin-bottom: 1rem;
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:950px){
        width: 100%;
    } 
`;
const AnimateMoveImage = styled.div`
    z-index: 100;
    font-family: 'Blouse','Aesthetic','Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    color: white;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 6rem;
    animation: delayToBlink 3s infinite;

    @keyframes delayToBlink {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
`;
const Img = styled.img`
    width: 3rem;
    height: 3rem;
`;

const Home = () => {

    const [writingTextHeight, setWritingTextHeight] = useState("19rem");

    const updateWritingTextHeight = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 930)
            setWritingTextHeight("10rem");
        if (screenWidth < 600 && screenWidth > 400)
            setWritingTextHeight("14rem");
        if (screenWidth < 400)
            setWritingTextHeight("18rem");
    };

    useEffect(() => {
        updateWritingTextHeight();
        window.addEventListener('resize', updateWritingTextHeight);
        return () => {
            window.removeEventListener('resize', updateWritingTextHeight);
        };
    }, []);
    return (
        <Main>
            <Article>
                <Title>HI,<br/> I´m <NameSpan>Mauricio</NameSpan>, <br/>Full Stack Developer . . .</Title>
                <WritingText text={`In this space, I present a tour of my achievements,
                outstanding skills and projects. Each item has been carefully
                selected to reflect my dedication, experience and unique vision in the field
                web development and programming in all its splendor.
                I invite you to explore my portfolio and discover how together we can
                bring great ideas to life! Do not hesitate to contact me for future collaborations or any
                query you may have.`} height={writingTextHeight} />
            </Article>
            <ArticleTwo>
                <AnimateMoveImage><Img src={arrowLeft} /> SHIFT <Img src={arrowRight} /></AnimateMoveImage>
                <CubeRotateAnimation />
            </ArticleTwo>
        </Main>

    );
}

export default Home;
