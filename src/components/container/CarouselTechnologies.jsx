import styled from 'styled-components';
import img1 from '../../assets/image/iconTechnologies/swiper-logo.svg';
import img2 from '../../assets/image/iconTechnologies/css.svg';
import img3 from '../../assets/image/iconTechnologies/git.svg';
import img4 from '../../assets/image/iconTechnologies/github.svg';
import img5 from '../../assets/image/iconTechnologies/html.svg';
import img6 from '../../assets/image/iconTechnologies/java.svg';
import img7 from '../../assets/image/iconTechnologies/jira.svg';
import img8 from '../../assets/image/iconTechnologies/js.svg';
import img9 from '../../assets/image/iconTechnologies/postgre.svg';
import img10 from '../../assets/image/iconTechnologies/postgre.svg';
import img11 from '../../assets/image/iconTechnologies/postgre.svg';
import img12 from '../../assets/image/iconTechnologies/postman.svg';
import img13 from '../../assets/image/iconTechnologies/react.svg';
import img14 from '../../assets/image/iconTechnologies/spring.svg';
import img15 from '../../assets/image/iconTechnologies/sql.svg';
import img16 from '../../assets/image/iconTechnologies/styled.svg';
import img17 from '../../assets/image/iconTechnologies/trello.svg';
import img18 from '../../assets/image/iconTechnologies/vue.svg';
import img19 from '../../assets/image/iconTechnologies/bootstrap.svg';

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

    const iconTechnologies = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];

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


