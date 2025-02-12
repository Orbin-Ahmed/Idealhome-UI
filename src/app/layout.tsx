import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "react-modal-video/css/modal-video.css";
import "swiper/css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/common.css";
import "../assets/css/skins.css";
import "../assets/css/style.css";
import "../assets/css/custom.css";
import { ThemContaxt } from "@/component/ThemContaxt";
import Script from "next/script";

export const metadata = {
  title: "Ideal Home UAE",
  description: "Your ideal choice for homes in the UAE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QE0SQ9PP9Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QE0SQ9PP9Q');
          `}
        </Script>
      </head>
      <body id="body" data-color="color_1" className="layout-light">
        <ThemContaxt>
          <main>{children}</main>
        </ThemContaxt>
      </body>
    </html>
  );
}
