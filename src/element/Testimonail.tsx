"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import IMAGES from "../component/theme";

interface TestimonialData {
  image: any; // Image source
  name: string; // User's name
  position: string; // User's position
  testimonial: string; // Unique testimonial
}

const sliderData: TestimonialData[] = [
  {
    image: IMAGES.Testimonial1,
    name: "Fatima A.",
    position: "Al Reem Island Villa Owner",
    testimonial:
      "Living in Al Reem Island, I was looking for exceptional quality for my new home. Ideal Factory's bespoke joinery UAE service delivered beyond expectations. Their custom joinery solutions transformed my apartment with stunning wardrobes and kitchen cabinets that perfectly utilize our space.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Abdullah M.",
    position: "Yas Island Villa Owner",
    testimonial:
      "As a homeowner in Yas Island, I chose Keystone UPVC for their premium uPVC windows and doors. The difference in our home's temperature control is remarkable, and the quality is outstanding. Their energy-efficient uPVC solutions have significantly reduced our cooling costs.",
  },
  {
    image: IMAGES.Testimonial3,
    name: "Mariam K.",
    position: "Al Raha Gardens Homeowner",
    testimonial:
      "Finding the best joinery company in UAE was crucial for our Al Raha Gardens villa renovation. Ideal Factory's bespoke joinery UAE team created magnificent custom-fitted wardrobes that perfectly matched our home's aesthetic. The quality and service were exceptional.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Omar S.",
    position: "Saadiyat Island Villa Owner",
    testimonial:
      "When renovating our Saadiyat Island villa, we installed premium uPVC windows and doors from Keystone UPVC. The sound insulation is impressive, and their attention to detail during installation was remarkable. A worthwhile investment for any luxury home.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Layla H.",
    position: "Al Bateen Villa Owner",
    testimonial:
      "The custom joinery solutions from Ideal Factory transformed our Al Bateen villa completely. Their team's expertise in bespoke joinery UAE showed in every detail, from the walk-in closets to the kitchen cabinetry. They truly deserve their reputation as the best joinery company in UAE.",
  },
];

interface navButton {
  buttn1: string;
  buttn2: string;
}

const Testimonail = ({ buttn1, buttn2 }: navButton) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 m-b20">
          <Swiper
            speed={1500}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1500,
            }}
            className="swiper-container testimonial-swiper"
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: `.${buttn1}`,
              nextEl: `.${buttn2}`,
            }}
            breakpoints={{
              1191: {
                slidesPerView: 3,
              },
              691: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {sliderData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-1 text-center">
                  <div className="testimonial-info">
                    <div className="sep-tl"></div>
                    <div className="sep-br"></div>

                    {/* Testimonial Text */}
                    <div className="testimonial-text">
                      <p>{item.testimonial}</p>
                    </div>

                    {/* User Details */}
                    <div className="testimonial-detail">
                      <ul className="star-rating text-primary">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h5 className="testimonial-name text-white">
                        {item.name}
                      </h5>
                      <span className="testimonial-position text-primary">
                        {item.position}
                      </span>
                    </div>
                  </div>

                  {/* User Image */}
                  <div className="testimonial-pic">
                    <Image src={item.image} alt={item.name} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
