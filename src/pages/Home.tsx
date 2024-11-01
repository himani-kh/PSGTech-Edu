import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles.css"

import Image1 from "../assests/home/carousel1.jpeg";
import Image2 from "../assests/home/carousel2.jpeg";
import Image3 from "../assests/home/carousel3.jpeg";

const Home = () => {
  const slides = [
    { src: Image1, caption: "Event 1" },
    { src: Image2, caption: "Event 2" },
    { src: Image3, caption: "Event 3" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      swipeable={false}
      stopOnHover={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      dynamicHeight={false}
    >
      {slides.map((slide, index) => (
        <div key={index} className="carousel-container">
          <img className="carousel-image" src={slide.src} alt={slide.caption} />
          <div className="caption-container">
            <p>{slide.caption}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Home;