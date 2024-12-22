import React from "react";
import Carousel from "./carousel/carousel";

type Props = {
  title: string;
  images: { id: number; title: string; slideImage: string }[];
};

export default function Muscle({ title, images }: Props) {
  return (
    <>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-4 max-w-[320px]">
        <Carousel slides={images} />
      </div>
    </>
  );
}
