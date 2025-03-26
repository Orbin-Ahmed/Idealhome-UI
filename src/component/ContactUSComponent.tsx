"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import Image from "next/image";
import Pagebanner from "@/element/Pagebanner";
import IMAGES from "./theme";

interface DetailBlogItem {
  title: string;
  icon: string;
  subtitle: string;
}

const detailBlog: DetailBlogItem[] = [
  {
    title: "Call Now",
    icon: "flaticon-telephone",
    subtitle: "+91 123 456 7890, +91 987 654 3210",
  },
  {
    title: "Location",
    icon: "flaticon-email",
    subtitle: "info@gmail.com, services@gmail.com",
  },
  {
    title: "Email Now",
    icon: "flaticon-placeholder",
    subtitle: "15/B Miranda House, New York, US",
  },
];

interface ContactUsProps {}

const ContactUSComponent: React.FC<ContactUsProps> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gfykn6i",
        "template_iy1pb0b",
        e.target as HTMLFormElement,
        "HccoOtZS6GHw-N-m6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="contact-us">
      {/* Contact Form & Details */}
      <section className="content-inner-2 line-img">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              CONTACT <span className="text-primary">WITH US</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <div className="row">
            {/* Contact Form */}
            <div className="col-xl-6 col-lg-6 m-b30">
              <form
                className="dz-form style-1 dzForm radius-no"
                ref={form}
                onSubmit={sendEmail}
              >
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <div className="dzFormMsg"></div>
                <div className="row sp10">
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="dzFirstName"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="dzLastName"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="dzEmail"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="dzPhoneNumber"
                        placeholder="Phone No."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="dzOther[subject]"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <textarea
                        name="dzMessage"
                        className="form-control"
                        defaultValue={"Message"}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                        data-callback="verifyRecaptchaCallback"
                        data-expired-callback="expiredRecaptchaCallback"
                      ></div>
                      <input
                        className="form-control d-none"
                        style={{ display: "none" }}
                        data-recaptcha="true"
                        required
                        data-error="Please complete the Captcha"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      name="submit"
                      type="submit"
                      value="submit"
                      className="btn btn-primary"
                    >
                      SUBMIT NOW <i className="m-l10 fas fa-caret-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                {detailBlog.map((item, i) => (
                  <div className="col-lg-12 m-b30" key={i}>
                    <div className="icon-bx-wraper style-8 bg-white">
                      <div className="icon-md m-r20">
                        <span className="icon-cell text-primary">
                          <i className={item.icon}></i>
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="tilte m-b10">{item.title}</h4>
                        <p className="m-b0">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="content-inner-1 line-img">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h2 className="title">
              WE ARE <span className="text-primary">WORLDWIDE</span>
            </h2>
            <div className="dz-separator style-1 text-primary"></div>
          </div>
          <Image src={IMAGES.MapImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default ContactUSComponent;
