import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { toDirectImageUrl } from "@/helper";

type Props = {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export const ImageModal: React.FC<Props> = ({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;
  const safeIdx = Math.max(0, Math.min(index, images.length - 1));
  const src = toDirectImageUrl(images[safeIdx] ?? "");

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-[min(92vw,900px)]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/90 hover:text-white transition"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        )}

        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/30">
          <img
            src={src}
            alt={`gallery-image-${safeIdx + 1}`}
            className="w-full max-h-[80vh] object-contain"
            loading="eager"
          />
        </div>

        {images.length > 1 && (
          <div className="mt-3 text-center text-white/90 text-sm">
            {safeIdx + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};
