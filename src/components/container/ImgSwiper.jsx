import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { styled } from 'styled-components';

const CustomSwiper = styled(Swiper)`
margin-top: 1.5rem;
    width: max(30rem,15rem);
    height: max(20rem,15rem);
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
    return (
        <CustomSwiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {imgs.map((img, index) => (
                <ImgCarousel key={index} img={img}></ImgCarousel>
            ))}
        </CustomSwiper>
    );
};
ImgSwiper.propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImgSwiper;
