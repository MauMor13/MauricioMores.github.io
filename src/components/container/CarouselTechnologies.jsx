import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
    display: flex;
    align-items: center;
    transform: rotateX(-4deg);
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 24rem;
    transform-origin: 50% 50% -500px;
`;

const Icon = styled.img`
    width: 10rem;
    height: 10rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 42%;
    transform-origin: 80% 50% -600px;
    border-radius: 100px;
    background: linear-gradient(155deg, #4b1652,#4f175675 );
    box-shadow:  10px 10px 40px  #5e1c6779 ,
            -10px -10px 70px #651e6e;
`;
const CarouselTechnologies = () => {
    const iconTechnologies = [
        'src/assets/image/iconTechnologies/css.svg',
        'src/assets/image/iconTechnologies/git.svg',
        'src/assets/image/iconTechnologies/github.svg',
        'src/assets/image/iconTechnologies/html.svg',
        'src/assets/image/iconTechnologies/java.svg',
        'src/assets/image/iconTechnologies/jira.svg',
        'src/assets/image/iconTechnologies/js.svg',
        'src/assets/image/iconTechnologies/postgre.svg',
        'src/assets/image/iconTechnologies/postman.svg',
        'src/assets/image/iconTechnologies/react.svg',
        'src/assets/image/iconTechnologies/spring.svg',
        'src/assets/image/iconTechnologies/sql.svg',
        'src/assets/image/iconTechnologies/styled.svg',
        'src/assets/image/iconTechnologies/trello.svg',
        'src/assets/image/iconTechnologies/vue.svg'
    ];
    useEffect(() => {
        
        return () => {
            
        };
    }, []);
    return (
        <Container>
            {iconTechnologies.map((icon, index) => {
                let angle = index * (360 / iconTechnologies.length);
                return <Icon key={index} src={icon} angle={angle} style={{ transform: "rotateY(" + angle + "deg)" }}></Icon>
            })}
        </Container>
    );
};

export default CarouselTechnologies;

