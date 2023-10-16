import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SwiperCarousel = styled(Swiper)`
    height: 20rem;
    width: 100%;
    background-color: aqua;
    margin-bottom: 1rem;
`;
const IconSlide = styled(SwiperSlide)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
`;
const Icon = styled.img`
    background-image: url(${props => props.img});
    width: 10rem;
    height: 10rem;
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
        'src/assets/image/iconTechnologies/vue.svg'
    ];

    return (
        <SwiperCarousel
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination,Autoplay]}
            autoplay={{ delay: 500 }}
        >
            {iconTechnologies.map((icon, index) => (
                <IconSlide key={index}>
                    <Icon src={icon}></Icon>
                </IconSlide>
            ))}
        </SwiperCarousel>
    );
};

export default CarouselTechnologies;