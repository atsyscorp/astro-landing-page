import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeCustomerSlider = () => {

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

    const images = [
        "/img/atsys-customer-alcaldia-bogota.png",
        "/img/atsys-customer-bolivar.png",
        "/img/atsys-customer-davivienda.png",
        "/img/atsys-customer-emermedica.png",
        "/img/atsys-customer-fundacion-compartir.png",
        "/img/atsys-customer-mininterior.png",
        "/img/atsys-customer-rivertech.png",
        "/img/atsys-customer-soenergy.png",
        "/img/atsys-customer-terpel.png",
        "/img/atsys-customer-ultratug.png",
        "/img/atsys-customer-spot.png",
        "/img/atsys-customer-1publicidad.png",
    ];
    images.sort(() => Math.random() - 0.5);

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

            {
                images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="" />
                    </div>
                ))
            }
        </Carousel>
    )
}

export default HomeCustomerSlider;