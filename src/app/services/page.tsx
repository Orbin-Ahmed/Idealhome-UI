"use client";
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
import GridCard from "@/component/GridCard";
import AccordianCard from "@/component/AccordionCard";
import FourReasons from "@/component/FourReason";
import ColumnCard from "@/component/ColumnCard";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "@/component/AccordioItem";

const serviceData = [
  { image: IMAGES.ServicePic1, name: "Interior Design" },
  { image: IMAGES.ServicePic2, name: "Floor Plan Design" },
  { image: IMAGES.ServicePic3, name: "Construction" },
  { image: IMAGES.ServicePic4, name: "Furniture Production" },
  { image: IMAGES.ServicePic5, name: "Architecture Design" },
  { image: IMAGES.ServicePic6, name: "24X7 Support" },
];

const Services = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleChange = (panel: any) => () => {
    setActiveKey(activeKey === panel ? null : panel);
  };

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
        <div className="d-flex justify-content-center mx-5">
          <Image src={IMAGES.uPVCProduct1} alt="banner" />
        </div>
        {/* Benefit Section 1  */}
        <div className="container text-center mt-5 pt-5">
          <p className="mb-4 fs-6 fw-bold">
            Selecting the Ideal Window Solution for Your Home
          </p>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="w-100 fs-3 fw-bold lh-base">
              1. Opt for uPVC Windows Over Aluminum for Improved Performance and
              Aesthetics.
            </p>
            <p className="mt-4 fs-6 fw-medium lh-base">
              When selecting windows for your new home, it's important to
              consider the materials used in their construction. One popular
              choice is uPVC windows, which offer several advantages over
              traditional aluminum windows. Here are some reasons why you should
              choose uPVC windows instead of aluminum:
            </p>
          </div>
          <Image
            src="down_arrow_group.png"
            alt="banner"
            width={320}
            height={70}
          />
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
          <ProductSection_1
            fixedText="uPVC Windows Are…"
            flipFlag={false}
            title="Your Durable Window Solution"
            subTitle="Durability is an essential factor when choosing windows for your home. uPVC windows are highly durable and long-lasting, making them a reliable and low-maintenance option for homeowners who value longevity and dependability."
            subTitle2="Benefit from highly durable and long-lasting windows that withstand the test of time. Enjoy resistance to harsh weather conditions and extreme temperatures without warping or deterioration"
            caveatText="Choose a reliable and low-maintenance window option for your home, offering peace of mind and long-term value"
            image="window_3.png"
          />
        </div>
        {/* Benefit Section 1 end */}
        {/* Benefit Section 2  */}
        <div className="container text-center mt-5 pt-5">
          <p className="mb-4 fs-6 fw-medium">
            Selecting the Ideal Window Solution for Your Home
          </p>
          <p className="mb-4 fs-2 fw-semibold caveat-font fst-italic">
            Not any uPVC
          </p>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="w-100 fs-3 fw-bold lh-base">
              2. Choose only the best German brands making uPVC windows.
            </p>
            <p className="mt-4 fs-6 fw-medium lh-base">
              Choosing the best quality German uPVC windows and doors starts
              with understanding the criteria for your selection.
            </p>
          </div>
          <div className="row mt-5">
            <GridCard
              title="PROFILE"
              subTitle="Make sure to select windows with profiles extruded in Germany from a special hot country compound and designed with 5 chambers to withstand the extreme weather conditions of the Gulf countries while maintaining its aesthetic nature."
              boldText="Only the profiles made in Germany have these characteristics."
              image="CT70 1.png"
            />
            <GridCard
              title="STEEL"
              subTitle="The strong, corrosion-protected steel profiles in the window frame and vents ensure stability, reliability, and longevity. Also, all the fittings are anchored securely and permanently in the steel reinforcement on all sides."
              image="CT70 2.png"
            />
            <GridCard
              title="HARDWARE"
              subTitle="The hardware system must provide the best-in-class security and insulation for the windows. The hardware should give a wide variety of customization options for you, while keeping the windows looking sleek and modern."
              image="CT70 3.png"
            />
            <GridCard
              title="ACCESSORIES"
              subTitle="Window accessories should allow you to create individual design accents. You should be able to choose from a wide variety of accessory options to suit your vision, be it clean, linear design, or colorful accents."
              image="CT70 4.png"
            />
          </div>
          <Link
            href="about-us"
            className="btn shadow-primary btn-primary btn-quote mt-5"
          >
            Reserve Your Expert Design Consultation{" "}
          </Link>
        </div>
        {/* Benefit Section 2 end */}
        {/* Benefit Section 3 */}
        <div className="container text-center mt-5 pt-5">
          <p className="mb-4 fs-6 fw-bold">
            Selecting the Ideal Window Solution for Your Home
          </p>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="w-100 fs-3 fw-bold lh-base">
              3. Know how to evaluate proposals from uPVC windows fabricators
              offering German brands and how to identify the best brand.
            </p>
            <p className="mb-4 fs-2 fw-semibold caveat-font fst-italic">
              Here You Go....
            </p>
          </div>
          <div>
            <AccordianCard
              text="Go only for trusted German brands who offer durable, energy-efficient, and stylish products."
              points="1"
            />
            <AccordianCard
              text="Make sure that the uPVC window entire system including the profiles, steel, hardware, accessories and EPDM gaskets are designed and manufactured by the same German supplier."
              points="2"
            />
            <AccordianCard
              text="Make sure that the steel offered for the windows enforcement have the thickness that is appropriate for the size and use of the window or door and it covers the full profile length."
              points="3"
            />
            <AccordianCard
              text="Make sure that the glass used in the uPVC windows is high-performance, featuring a low U-value to match the thermal and insulation properties of the window system."
              points="4"
            />
            <AccordianCard
              text="The fabricator must have the capability and flexibility to align with your external and interiors design of your dream home."
              points="5"
            />
            <AccordianCard
              text="You should always ask for detailed design drawings to confirm that the fabricator has selected the right profile, steel thickness, hardware, and accessories for your uPVC windows and doors. And all these components are made in Germany, only then you can guarantee that you are getting the right value for your money."
              points="6"
            />
            <AccordianCard
              text="Also make sure that the detailed design drawings include the specifications of the glass stating the U value, thickness, and origin of the glass."
              points="7"
            />
            <AccordianCard
              text="The fabricator must offer the best workmanship quality through trained professionals using the German machinery for making the highest quality uPVC windows and doors."
              points="8"
            />
          </div>
          <Link
            href="about-us"
            className="btn shadow-primary btn-primary btn-quote mt-5"
          >
            Reserve Your Expert Design Consultation{" "}
          </Link>
        </div>
        {/* Benefit Section 3 end */}
        {/* Four Reason Section  */}
        <FourReasons />
        {/* Four Reason Section End */}
        {/* Bonus Section  */}
        <div className="bg-gradient py-5">
          <div className="container">
            <div className="text-center">
              <p className="fw-bold fs-3">
                Why Choose <span className="text-primary">Keystone uPVC?</span>
              </p>
              <p className="fw-medium fs-6 mt-3">
                When you choose to receive a quote from us, here's what you can
                expect:
              </p>
            </div>
            <div className="d-flex flex-column mt-4">
              <div className="mb-4">
                <ColumnCard
                  flipFlag={false}
                  image="Rectangle 16.svg"
                  description="We will provide you with suitable uPVC windows and doors from the German company Schüco. Schüco offers profiles, reinforcement steel, opening and closing systems, and accessories, ensuring quality, innovation, and durability."
                />
              </div>
              <div className="mb-4">
                <ColumnCard
                  flipFlag={true}
                  image="Rectangle 17.svg"
                  description="Our engineers will design windows and doors while considering the architectural aspects and interior designs of your dream home. We will present you with detailed plans and several options, giving you the freedom to design your home down to the finest details."
                />
              </div>
              <div className="mb-4">
                <ColumnCard
                  flipFlag={false}
                  image="explain.svg"
                  description="We will show you all the components of our products, allowing you to see how these elements surpass their German counterparts."
                />
              </div>
              <div className="mb-4">
                <ColumnCard
                  flipFlag={true}
                  image="Rectangle 17 (1).svg"
                  description="We will take you on a tour of our factory, where you can see the quality standards in the manufacturing of our products and the competence of our teams."
                />
              </div>
            </div>
            <div className="text-center mt-5">{/* <EstimateButton /> */}</div>
          </div>
        </div>
        {/* Bonus Section end */}
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
        {/* Testimonial Section */}
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
        {/* Testimonial Section end */}
        {/* FAQ Section */}
        <div className="bg-gradient py-5">
          <div className="container">
            <p className="text-center fw-bold fs-2 mb-4">
              Frequently Asked Questions?
            </p>
            <Accordion activeKey={activeKey} alwaysOpen>
              <AccordionItem
                title="Do I have to pay for the detailed design drawings?"
                content="No! You don't have to pay for the detailed design drawings..."
                panel="panel1"
                expanded={activeKey}
                handleChange={handleChange}
              />
              <AccordionItem
                title="How long is the typical lifespan of Schüco uPVC windows and doors?"
                content="The typical lifespan of Schüco uPVC windows and doors is quite impressive..."
                panel="panel2"
                expanded={activeKey}
                handleChange={handleChange}
              />
              <AccordionItem
                title="How do Schüco uPVC windows and doors contribute to noise reduction?"
                content="Schüco uPVC windows and doors contribute to noise reduction through their excellent design..."
                panel="panel3"
                expanded={activeKey}
                handleChange={handleChange}
              />
              <AccordionItem
                title="What type of glass is recommended for use with Schüco uPVC windows and doors?"
                content="We always suggest and provide quotes for high-performance glass..."
                panel="panel4"
                expanded={activeKey}
                handleChange={handleChange}
              />
            </Accordion>
          </div>
        </div>
        {/* FAQ Section end */}
      </div>
    </Mainlayout>
  );
};

export default Services;
