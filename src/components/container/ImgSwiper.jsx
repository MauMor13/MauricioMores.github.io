import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


const CustomSwiper = styled(Swiper)`
    width: max(30rem,20rem);
    height: max(20rem,15rem);
    padding: 1rem;
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
            effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
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
