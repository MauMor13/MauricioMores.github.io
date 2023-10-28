import styled from 'styled-components';

const ContainerCarousel = styled.div`
	width: 100%;
    height: 22rem;
    margin-bottom: 2rem;
	perspective: 1000px;
	position: relative;
    display: flex;
    justify-content: center;
`;
const Carousel = styled.div`
    width: 10%;
	position: absolute;
    top: 26%;
    left: 45%;
    transform: translate(-50%,-50%);
    animation: rotateIcon 30s infinite linear;
	transform-style: preserve-3d;

    @keyframes rotateIcon {
	0% {
		transform: rotateY(0deg);
	} 
    100% {
		transform: rotateY(360deg);
	}
}
`;
const ContentIcon = styled.div`
    width: 9rem;
	height: 9rem;
    display: flex;
    justify-content: center;
	border: 1px solid #3b444b;
	position: absolute;
    border-radius: 100px;
    background: linear-gradient(155deg, #4b1652,#4f175675 );
    box-shadow:  10px 10px 40px  #5e1c6779 ,
            -10px -10px 70px #651e6e;
`;
const Icon = styled.img`
    width: 5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
        'src/assets/image/iconTechnologies/vue.svg',
        'src/assets/image/iconTechnologies/bootstrap.svg'
    ];

    return (
        <ContainerCarousel>
            <Carousel>
                {iconTechnologies.map((icon, index) => {
                    const angle = (360 / iconTechnologies.length) * index;
                    return <ContentIcon key={index} style={{ transform: "rotateY(" + angle + "deg)  translateZ(25rem)" }}><Icon key={index} src={icon} ></Icon></ContentIcon>
                })}
            </Carousel>
        </ContainerCarousel>
    );
};

export default CarouselTechnologies;


