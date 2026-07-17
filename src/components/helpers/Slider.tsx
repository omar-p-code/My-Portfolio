import { type Image } from "../../constants"
import Slider from "react-slick";
import Styled from "styled-components";

const StyledSlider = Styled(Slider)`
   .slick-dots {
      bottom: -30px;
   }
   .slick-dots li button:before {
   color: var(--text);
   }
   .slick-dots li.slick-active button:before {
      color: var(--secondary);
   }
`

export default function SliderComponent({ slider }: { slider: Image[] }) {
   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true,
   };


   return (
      <div className="rounded-md flex pb-10">

         <StyledSlider {...settings} className="w-[min(100vw,1000px)] mx-auto">
            {
               slider.map((slide, index: number) => (
                  <div className="slide w-full" key={index + '-' + slide.name}>
                     {slide.src.endsWith('.mp4') ? (
                        <video src={slide.src} loop autoPlay className="w-fit h-full rounded-md" />
                     ) : (
                        <img src={slide.src} alt={slide.title || 'image'} className="w-fit h-full rouned-md" />
                     )}
                  </div>
               ))
            }
         </StyledSlider >
      </div>
   )
}