import './Slide.css';
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "./Card";
import {Navigation, Pagination, Scrollbar} from "swiper/modules";

function Slide(props) {
    const {rouanetData} = props;

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <div className="Slide">
            <Swiper
                breakpoints={{
                    480: {
                        width: 480,
                        slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 3,
                    }
                }}

                pagination={ pagination }
                // pagination={{type: 'bullets', clickable: true}}
                navigation={{nextEl: ".arrow-right", prevEl: ".arrow-left"}}
                // navigation
                centeredSlides={false}
                spaceBetween={35}
                modules={[Navigation, Pagination, Scrollbar]}
            >
                {rouanetData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <i className="icon-background-right">
                <i className="arrow-right"></i>
            </i>
            <i className="icon-background-left">
                <i className="arrow-left"></i>
            </i>
        </div>
    );
}

export default Slide;