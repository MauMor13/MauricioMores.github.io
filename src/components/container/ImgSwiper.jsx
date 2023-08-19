import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade , Navigation, Pagination} from 'swiper/modules';


const CustomSwiper = styled(Swiper)`
    width: max(30rem,20rem);
    height: max(20rem,15rem);
    border-radius: 1rem;
    margin-top: 1.5rem;

    .swiper-button-prev,
    .swiper-button-next {
        color: #7100F1;
    }

    .swiper-pagination-bullet {
        background-color: #7100F1; 
    }

    .swiper-pagination-bullet-active {
        background-color:  #44acf2dd; 
    }
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
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
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
