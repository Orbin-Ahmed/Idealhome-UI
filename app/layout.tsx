import "@/app/globals.css";
import "swiper/css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideal Home UAE",
  description: "A Complete Interior Design Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
