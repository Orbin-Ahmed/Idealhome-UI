import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import DesignSection from "@/components/DesignSection";
import ItemFinishFeatureSection from "@/components/ItemFinishFeatureSection";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Chatbots from "@/components/Chatbots";

export default function Home() {
  const t = useTranslations("HomePage");

  const itemFeatures = [
    {
      title: t("closets.title"),
      subtitleItems: [
        { label: t("closets.items.walkIn"), href: "/closets/walk-in-closet" },
        {
          label: t("closets.items.wardrobe"),
          href: "/closets/wardrobe-closet",
        },
        {
          label: t("closets.items.smartStorage"),
          href: "/closets/smart-storage-solution",
        },
        { label: t("closets.items.hisHers") },
        { label: t("closets.items.kids") },
        { label: t("closets.items.modern") },
        { label: t("closets.items.classic") },
        { label: t("closets.items.luxury") },
      ],
      images: ["/images/home/closet-1.jpg", "/images/home/closet-2.jpg"],
      textPosition: "left" as const,
      titleLink: "/closets",
    },
    {
      title: t("kitchens.title"),
      subtitleItems: [
        {
          label: t("kitchens.items.withIsland"),
          href: "/kitchens/kitchen-with-island",
        },
        {
          label: t("kitchens.items.uShaped"),
          href: "/kitchens/u-shaped-kitchen",
        },
        { label: t("kitchens.items.pantry"), href: "/kitchens/pantry-kitchen" },
        { label: t("kitchens.items.modern") },
        { label: t("kitchens.items.classic") },
      ],
      images: ["/images/home/kitchen-1.jpg", "/images/home/kitchen-2.jpg"],
      textPosition: "right" as const,
      titleLink: "/kitchens",
    },
    {
      title: t("doors.title"),
      subtitleItems: [
        { label: t("doors.items.interior") },
        { label: t("doors.items.front") },
        { label: t("doors.items.wood") },
        { label: t("doors.items.pvc") },
        { label: t("doors.items.sliding") },
        { label: t("doors.items.upvcExterior") },
        { label: t("doors.items.glassAluminum") },
        { label: t("doors.items.modern") },
        { label: t("doors.items.classic") },
      ],
      images: ["/images/home/doors-1.jpg", "/images/home/doors-2.jpg"],
      textPosition: "left" as const,
      titleLink: "/doors",
    },
  ];

  const images = [
    "/images/home/classic-elegant-walk-in-closet-mirrored-cabinet-doors.jpg",
    "/images/home/luxury-walk-in-closet-sliding-glass-doors-wood-finish.jpg",
    "/images/home/modern-kitchen-matte-black-beige-cabinets-marble-countertop-island.jpg",
  ];

  return (
    <>
      <Navbar />
      <Slider images={images} />
      <DesignSection />
      <ItemFinishFeatureSection features={itemFeatures} />
      <Footer />
      <Chatbots
        webhookUrl="https://automation.idealhomeuae.com/webhook/961f7707-cb4f-4645-81af-13383aefb221/chat"
        brandColor="#57b7c0"
        initialMessage={t("chatWelcome.message")}
        quickActions={[
          t("chatWelcome.quickAction_1"),
          t("chatWelcome.quickAction_2"),
          t("chatWelcome.quickAction_3"),
          t("chatWelcome.quickAction_4"),
        ]}
      />
    </>
  );
}
