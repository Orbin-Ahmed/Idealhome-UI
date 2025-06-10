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
    name: "Ahmed Al Zaabi",
    position: "Villa Owner – Mohamed Bin Zayed City, Abu Dhabi",
    testimonial:
      "The quality of Keystone uPVC Windows and Doors is exceptional. The craftsmanship and durability exceeded my expectations, giving my villa an elegant and refined look. I highly recommend their products to anyone looking for premium uPVC windows and doors.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Ahmed Al Mazrouei",
    position: "Villa Owner - Al Bahia City, Abu Dhabi",
    testimonial:
      "What stood out to me was their outstanding service. From consultation to installation, their team was professional, knowledgeable, and detail-oriented. The superior insulation has significantly reduced dust inside my home.",
  },
  {
    image: IMAGES.Testimonial3,
    name: "Abdulla Al Maainah",
    position: "Villa Owner - Shakboot City, Abu Dhabi",
    testimonial:
      "Keystone uPVC Windows not only delivered top-quality products but also provided excellent after-sales service. Their follow-ups ensured everything was working perfectly, and their responsiveness made me confident in my investment.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Ali Saeed Salem",
    position: "Villa Owner -  Mohamed Bin Zayed City, Abu Dhabi",
    testimonial:
      "The beauty of Keystone's uPVC windows and doors has transformed my villa. Their designs complement my home perfectly, adding sophistication and style. I'm truly impressed with the elegance and finish of their products.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Saleh, Ahmed, and Mohamed Mubarak Aljneibi",
    position: "Villas Owners - Al Shuwamikh City, Abu Dhabi",
    testimonial:
      "As three brothers building adjacent villas, we carefully considered all options before choosing Keystone uPVC Windows and Doors over aluminum—and we couldn’t be happier with our decision. We chose Keystone uPVC Windows for their durability and insulation. Their designs complement our homes perfectly, adding sophistication and style.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Yusuf Al Suwaidi",
    position: "Villa Owner - Nad Alshiba, Dubai",
    testimonial:
      "Keystone uPVC Windows impressed me with their quick response and professionalism. The Schüco premium products they provided showcase excellent craftsmanship, durability, and efficiency. The whole process was smooth and hassle-free.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Huda Saeed Abdullah",
    position: "Villa Owner - Khalifa City, Abu Dhabi",
    testimonial:
      "I wanted windows and doors that would enhance my villa's elegance without compromising on quality. Keystone uPVC Windows delivered exactly that—beautiful, high-performance products that provide excellent insulation and durability.",
  },
  {
    image: IMAGES.Testimonial2,
    name: "Umm Ahmed Al Rumaithi",
    position: "Villa Owner, Khalifa City, Abu Dhabi",
    testimonial:
      "Replacing my aluminum windows and doors with Schüco uPVC from Keystone was the best decision I made. The thermal insulation keeps my villa cool even in peak summer, and the sand insulation has significantly reduced dust inside my home. On top of that, the transformation gave my  villa an astonishing modern look.",
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
            speed={5000}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
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
                  {/* <div className="testimonial-pic">
                    <Image src={item.image} alt={item.name} />
                  </div> */}
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
