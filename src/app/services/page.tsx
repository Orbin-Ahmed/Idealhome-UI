import Link from "next/link";
import IMAGES from "../../component/theme";
import ClientSwiper from "../../element/ClientSwiper";
import Testimonail from "../../element/Testimonail";
import Mainlayout from "../../component/Mainlayout";
import ProductVideoSection from "@/element/ProductVideoSection";
import ProgressSection from "@/element/ProgressSection";
import UpvcProduct from "@/element/UpvcProduct";
import Pagebanner from "@/element/Pagebanner";
import ProductHero from "@/component/ProductHero";
import Image from "next/image";
import ProductSection_1 from "@/component/ProductSection_1";

const serviceData = [
  { image: IMAGES.ServicePic1, name: "Interior Design" },
  { image: IMAGES.ServicePic2, name: "Floor Plan Design" },
  { image: IMAGES.ServicePic3, name: "Construction" },
  { image: IMAGES.ServicePic4, name: "Furniture Production" },
  { image: IMAGES.ServicePic5, name: "Architecture Design" },
  { image: IMAGES.ServicePic6, name: "24X7 Support" },
];

const Services = () => {
  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <ProductHero />
        {/* <div
          className="dz-bnr-inr style-1"
          style={{ backgroundImage: `url(${IMAGES.BanerImg2.src})` }}
        ></div> */}
        <section
          className="section-full content-inner line-img section-title style-2"
          data-name="our skills"
        >
          <ProductVideoSection />
          {/* <ProgressSection /> */}
        </section>

        {/* Why Choose Keystone uPVC Windows */}
        <section className="section-title style-1 py-4">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">
                Why Choose{" "}
                <span className="text-primary">Keystone uPVC Windows</span> for
                Your Villa?
              </h2>
              <div className="dz-separator style-1 text-primary"></div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>1. Schüco-Certified Excellence</strong>
                    <ul className="mt-2">
                      <li>
                        As a Schüco-certified partner, we use premium
                        German-engineered uPVC profiles that ensure maximum
                        durability, thermal insulation, and soundproofing.
                      </li>
                      <li>
                        Our uPVC solutions are designed for long-lasting
                        performance in the UAE's harsh climate, offering
                        superior protection from extreme heat and dust.
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item">
                    <strong>2. Villa-Specific Customization</strong>
                    <ul className="mt-2">
                      <li>
                        Our solutions are tailored to match luxury villa
                        architecture, ensuring a seamless and elegant aesthetic.
                      </li>
                      <li>
                        We provide a 3D home visualization tool, allowing villa
                        owners to preview and customize their uPVC windows and
                        doors before installation.
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item">
                    <strong>3. Emirati-Owned & Trusted</strong>
                    <ul className="mt-2">
                      <li>
                        As an Emirati-owned company, we understand the
                        preferences of UAE villa owners and offer trusted,
                        high-quality uPVC solutions that align with local needs.
                      </li>
                      <li>
                        Our commitment to craftsmanship, security, and long-term
                        value makes us a preferred choice for villa projects.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Window and door premiumness  section */}
        {/* <section className="content-inner section-title style-2 pb-0">
          <div className="container">
            <div className="row"> */}
        {/* uPVC Window Solutions (Left) */}
        {/* <div className="col-md-6">
                <div className="section-head">
                  <h2 className="title">
                    Premium <span className="text-primary">uPVC Window</span>{" "}
                    for Villas
                  </h2>
                  <p>
                    We encourage villa owners to choose high-performance,
                    functional window styles that provide optimal ventilation,
                    insulation, and security. Unlike traditional sliding
                    windows, Tilt & Turn and Casement windows provide better
                    sealing, security, and energy efficiency, making them the
                    ideal choice for luxury villas.
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <h5>Tilt & Turn Windows</h5>
                    <p>
                      The perfect all-in-one solution offering ventilation, ease
                      of cleaning, and enhanced security.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <h5>Casement Windows</h5>
                    <p>
                      A classic and reliable choice for villas, providing
                      excellent airflow and unobstructed views.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <h5>Fixed Windows</h5>
                    <p>
                      Large glass panels that maximize natural light while
                      maintaining high thermal insulation.
                    </p>
                  </div>
                </div>
              </div> */}

        {/* uPVC Hinged Doors (Right) */}
        {/* <div className="col-md-6">
                <div className="section-head">
                  <h2 className="title">
                    Luxury{" "}
                    <span className="text-primary">uPVC Hinged Door</span> for
                    Villas
                  </h2>
                  <p>
                    We encourage villa owners to choose your villa with secure,
                    stylish, and high-performance hinged doors. By choosing
                    hinged doors over sliding doors, villa owners enhance energy
                    efficiency, improve security, and achieve a superior villa
                    aesthetic.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h5>Hinged Entry Doors</h5>
                    <p>
                      Reinforced with multi-point locking systems for maximum
                      security and insulation.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <h5>French Doors</h5>
                    <p>
                      A sophisticated choice for villas, blending classic charm
                      with modern uPVC durability.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <h5>Hinged Balcony Doors</h5>
                    <p>
                      A perfect alternative to sliding doors, offering a
                      stronger seal, better insulation, and an elegant finish.
                    </p>
                  </div>
                </div>
              </div> */}
        {/* </div>
          </div>
        </section> */}

        {/* Product section  */}
        <section className="content-inner line-img">
          <UpvcProduct />
        </section>

        {/* Key Benefits */}
        <section className="content-inner section-title style-2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">
                Key Benefits of{" "}
                <span className="text-primary">
                  Keystone uPVC Windows & Doors
                </span>
              </h2>
              <div className="dz-separator style-1 text-primary"></div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
                </svg>{" "}
                Designed for UAE Climate - Withstands extreme heat, dust, and
                humidity.
              </li>
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
                </svg>{" "}
                Energy Efficient - Reduces cooling costs by up to 35%.
              </li>
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
                </svg>{" "}
                Noise Reduction - Blocks up to 90% of external noise for a
                quieter home.
              </li>
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
                </svg>{" "}
                Low Maintenance - uPVC requires minimal upkeep and remains
                dust-resistant.
              </li>
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path d="M 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 15 L 44 17.3125 L 44 39 C 44 41.800781 41.800781 44 39 44 L 11 44 C 8.199219 44 6 41.800781 6 39 L 6 11 C 6 8.199219 8.199219 6 11 6 L 37.40625 6 L 39 4 Z M 43.25 7.75 L 23.90625 30.5625 L 15.78125 22.96875 L 14.40625 24.4375 L 23.3125 32.71875 L 24.09375 33.4375 L 24.75 32.65625 L 44.75 9.03125 Z"></path>
                </svg>{" "}
                Enhanced Security - Hinged doors and Tilt & Turn windows provide
                superior locking mechanisms.
              </li>
            </ul>
          </div>
        </section>
        <div className="d-flex justify-content-center">
          <Image src={IMAGES.uPVCProduct1} alt="banner" />
        </div>
        <div className="mt-5 pt-5">
          <ProductSection_1
            fixedText="uPVC Windows Are…"
            flipFlag={true}
            title="the Best for Home Insulation"
            subTitle="Energy efficiency is crucial in today's world. By choosing the right uPVC windows, you can significantly improve your home's insulation, leading to reduced heat transfer and enhanced energy efficiency"
            caveatText="Enjoy a more comfortable living environment while potentially saving money on energy bills"
            image="window.png"
          />

          <ProductSection_1
            fixedText="uPVC Windows Are…"
            flipFlag={false}
            title="Your Noise Reduction Solution"
            subTitle="uPVC windows offer excellent soundproofing properties, helping to reduce outside noise and create a tranquil indoor environment especially if you live near a busy road or in an area with high levels of noise pollution."
            caveatText="A peaceful and quiet home is essential for relaxation and well-being"
            image="window_1.png"
          />

          <ProductSection_1
            fixedText="uPVC Windows Are…"
            flipFlag={true}
            title="Your Low Maintenance Solution"
            subTitle="Reducing the time and effort spent on maintaining your windows is a great advantage. uPVC windows offer minimal maintenance requirements compared to aluminum windows, making them a smart and convenient choice for homeowners."
            caveatText="Easily keep your windows looking new with just a simple wipe down using a damp cloth"
            image="window_2.png"
          />
        </div>
        {/* Sweeper Section  */}
        {/* <div className="clients-section-1 line-img bg-gray">
          <div className="container">
            <ClientSwiper />
          </div>
        </div> */}
        <section
          className="section-full content-inner line-img section-title style-2"
          data-name="our skills"
        >
          <ProgressSection />
        </section>
        <section
          className="content-inner bg-gray section-title style-1 line-img"
          data-name="Testimonial"
        >
          <div className="container">
            <div className="row section-head-bx align-items-center">
              <div className="col-md-8">
                <div className="section-head style-1">
                  <h2 className="title">
                    WHAT OUR <span className="text-primary">CLIENT SAYS</span>
                  </h2>
                  <div className="dz-separator style-1 text-primary"></div>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <div className="testimonial-swiper m-b30">
                  <div className="btn-prev swiper-button-prev3 pe-3 c-pointer">
                    <i className="las la-long-arrow-alt-left" />
                    PREV
                  </div>
                  <div className="btn-next swiper-button-next3 ps-3 c-pointer">
                    NEXT
                    <i className="las la-long-arrow-alt-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonail
            buttn1="swiper-button-prev3"
            buttn2="swiper-button-next3"
          />
        </section>
      </div>
    </Mainlayout>
  );
};

export default Services;
