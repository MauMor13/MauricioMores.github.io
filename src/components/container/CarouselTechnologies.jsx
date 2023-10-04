import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CarouselTec = styled(Swiper)`
    width: 100%;
    height: 20rem;
    background-color: aqua;
`;
const LogoCarousel = styled(SwiperSlide)`
    background-image: url(${props => props.logo});
    width: 10rem;
    height: 10rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const CarouselTechnologies = () => {

    const iconTechnologies = [
        'src/assets/image/iconTechnologies/iconBootstrap.svg',
        'src/assets/image/iconTechnologies/iconCss3.svg',
        'src/assets/image/iconTechnologies/iconGit.svg',
        'src/assets/image/iconTechnologies/iconGithub.svg',
        'src/assets/image/iconTechnologies/iconHtml5.svg',
        'src/assets/image/iconTechnologies/iconJava.svg',
        'src/assets/image/iconTechnologies/iconJira.svg',
        'src/assets/image/iconTechnologies/iconJS.svg',
        'src/assets/image/iconTechnologies/iconReact.svg',
        'src/assets/image/iconTechnologies/iconSpring.svg',
        'src/assets/image/iconTechnologies/iconStiled.svg',
        'src/assets/image/iconTechnologies/iconTrello.svg',
        'src/assets/image/iconTechnologies/iconVue.svg'];

    return (
        <CarouselTec
            spaceBetween={15}
            centeredSlides={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            {iconTechnologies.map((logo, index) => (
                <LogoCarousel key={index} logo={logo}></LogoCarousel>
            ))}
        </CarouselTec>
    );
}

export default CarouselTechnologies;

