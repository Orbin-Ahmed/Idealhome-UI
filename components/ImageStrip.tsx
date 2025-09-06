import React from "react";
import { toDirectImageUrl, toThumbnailUrl } from "@/helper";

export const ImageStrip: React.FC<{ images: string[] }> = ({ images }) => {
  if (!images?.length) return null;

  return (
    <div className="mt-3 space-y-2">
      {images.slice(0, 6).map((url, idx) => {
        const src = toDirectImageUrl(url);
        const fallback = toThumbnailUrl(url);

        return (
          <a
            key={`${url}-${idx}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            title="Open image"
            className="group block"
          >
            <img
              src={src}
              alt={`chat-image-${idx + 1}`}
              className="w-full h-44 object-cover rounded-xl border border-gray-200 group-hover:opacity-90 transition"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                if (!t.dataset.fallbackApplied) {
                  t.src = fallback;
                  t.dataset.fallbackApplied = "1";
                }
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
