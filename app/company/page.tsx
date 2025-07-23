"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ValuesGrid from "@/components/ValuesGrid";
import Image from "next/image";

const Company = () => {
  return (
    <>
      <div className="bg-black h-16">
        <Navbar />
      </div>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-gray-800 space-y-6">
          <h2 className="text-3xl font-semibold">
            WE CARE, WE BUILD FOR TOMORROW
          </h2>
          <p>
            Welcome to Ideal Factory — a proudly Emirati-owned manufacturer
            specializing in premium joinery and uPVC window solutions, designed
            for today's modern homes. With deep roots in craftsmanship and a
            forward-thinking commitment to technology, we seamlessly blend
            tradition with innovation to deliver exceptional products that
            elevate living spaces across the UAE.
          </p>
          <p>
            From stunning kitchens and walk-in closets to elegant doors and
            high-performance Schüco windows, every element we create is built
            with precision, passion, and purpose. Our in-house production
            facility, supported by our proprietary 3D design tool, ensures your
            ideas are brought to life quickly, reliably, and beautifully — no
            matter the size or complexity of the project.
          </p>
          <p>
            At Ideal Factory, we value honesty, quality, and trust. We partner
            with homeowners, architects, and designers to achieve unique results
            that reflect true Emirati pride and global standards of excellence.
          </p>
        </div>

        <div className="mt-12">
          <Image
            src="/images/test2/company.jpg"
            alt="Factory Machinery"
            width={800}
            height={400}
            className="m-auto h-auto object-cover"
          />
        </div>
      </section>
      <ValuesGrid />
      <div className="pt-4 pb-8 bg-white">
        <p className="text-2xl font-semibold text-center text-black px-1 max-w-4xl mx-auto leading-relaxed">
          Avoid Overpaying for Standard Interiors — With Ideal Factory, Experience a Process Where You Approve, Understand, and Control Every Detail, with Factory-Direct Quality.
        </p>
        <div className="text-center mt-8">
          <button
            className="
                  inline-block px-6 py-3
                  bg-[#57b7c0] text-white font-semibold
                  rounded-lg shadow-md
                  min-w-[220px]
                  transition-opacity duration-300
                  hover:opacity-90
                "
          >
            <a href="#contact-us">Request Free 3D Design</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company;
