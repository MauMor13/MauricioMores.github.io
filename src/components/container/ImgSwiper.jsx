import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { styled } from 'styled-components';

const CustomSwiper = styled(Swiper)`
    max-width: 25rem;
    max-height: 20rem;
    border-radius: 1rem;
`;
const ImgCarousel = styled(SwiperSlide)`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const ImgSwiper = (props) => {
    const { imgs } = props;
    const imageArray = JSON.parse(imgs); 
    console.log(imageArray);
    return (
        <CustomSwiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {imageArray.map((img, index) => (
                <ImgCarousel key={index} img={img}></ImgCarousel>
            ))}
        </CustomSwiper>
    );
}

export default ImgSwiper;
