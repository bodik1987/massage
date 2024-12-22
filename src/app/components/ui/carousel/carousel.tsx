"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./EmblaCarouselArrowButtons";
import Modal from "../modal";

type PropType = {
  options?: EmblaOptionsType;
  slides: { id: number; title: string; slideImage: string }[];
};

export default function Carousel({ options, slides }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay: any = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(slides[0].slideImage);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={
          <Image
            src={selectedImage}
            alt={"Image"}
            width={650}
            height={312}
            className="w-full h-full rounded object-cover"
            priority
            quality={100}
          />
        }
      />
      <section className="embla relative">
        <div className="overflow-hidden rounded" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image) => (
              <button
                className="embla__slide"
                key={image.id}
                onClick={() => {
                  setSelectedImage(image.slideImage);
                  setIsModalOpen(true);
                }}
              >
                <Image
                  src={image.slideImage}
                  alt={image.title}
                  width={650}
                  height={312}
                  className="w-full h-full rounded object-cover"
                  priority
                  quality={100}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-3 inset-x-0 z-10 px-3 mt-2 flex items-end justify-between opacity-80">
          <div className="flex justify-end items-center">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
