import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeCustomerSlider = ( children ) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 0
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 0
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            centerMode={true}
            autoPlaySpeed={5000}
            transitionDuration={500}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside
            containerClass="container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {children && children}
        </Carousel>
    )
}

export default HomeCustomerSlider;