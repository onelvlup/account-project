import React, { useEffect, useRef, useState } from "react";
import Span from "./Span";
import RIGHT_BUTTON_SVG from "../assets/svg/buttons/button_1.svg";
import LEFT_BUTTON_SVG from "../assets/svg/buttons/button_2.svg";
import CardFeedback from "./CardFeedback";
import { useTranslation } from "react-i18next";
import logo_1 from "../assets/png/company_logos/logo_1.png";
import logo_2 from "../assets/png/company_logos/logo_2.png";
import logo_3 from "../assets/png/company_logos/logo_3.png";
import logo_4 from "../assets/png/company_logos/logo_4.png";
import logo_5 from "../assets/png/company_logos/logo_5.png";
import logo_6 from "../assets/png/company_logos/logo_6.png";
import logo_7 from "../assets/png/company_logos/logo_7.png";
import Slider from "react-slick";

function Feedback() {
  const { t } = useTranslation();
  const feedback_data = t("feedback", { returnObjects: true });
  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7];
  const [slidesToShow, setSlidesToShow] = useState(2); // Default value for larger screens
  const [slidesToScroll, setSlidesToScroll] = useState(1); // Default value for scrolling

  const updateSlides = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    } else if (width <= 600) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    } else if (width <= 1024) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    } else {
      setSlidesToShow(2);
      setSlidesToScroll(1);
    }
  };

  useEffect(() => {
    // Update slide settings when the component is mounted
    updateSlides();

    // Add event listener for window resize
    window.addEventListener("resize", updateSlides);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // Dynamic value
    slidesToScroll: slidesToScroll, // Dynamic value
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 21,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <section id="feedback" className=" bg-white w-full pt-[80px] lg:pt-[120px]">
      <article className="max-w-[1296px] w-full mx-auto px-[16px] md:px-auto">
        <div className="flex justify-between">
          <h2>{feedback_data.title}</h2>
          <div className=" hidden md:block">
            <button onClick={previous}>
              <img src={LEFT_BUTTON_SVG} alt="" />
            </button>
            <button onClick={next} className=" pl-[16px]">
              <img src={RIGHT_BUTTON_SVG} alt="" />
            </button>
          </div>
        </div>
        <div className="pt-[56px] overflow-hidden">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {feedback_data.cards.map((card, index) => {
              return (
                <div className="h-full">
                  <CardFeedback
                    name={card.name}
                    title={card.title}
                    feedback={card.feedback}
                    logo={logos[index]}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </article>
      ;
    </section>
  );
}

export default Feedback;
