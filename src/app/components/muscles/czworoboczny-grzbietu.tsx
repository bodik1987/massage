"use client";

import { useState } from "react";
import Carousel from "../ui/carousel/carousel";
import Modal from "../ui/modal";

export default function CzworobocznyGrzbietu() {
  const [expanded, setExpanded] = useState(false);

  const cworob = [
    { id: 1, title: "Img", slideImage: "/cworob/1.png" },
    { id: 2, title: "Img", slideImage: "/cworob/2.png" },
  ];
  return (
    <>
      <button
        onClick={() => setExpanded(true)}
        className="bg-black p-2 rounded-lg text-white w-fit"
      >
        Czworoboczny grzbietu
      </button>

      <Modal
        isOpen={expanded}
        onClose={() => setExpanded(false)}
        content={
          <>
            <h2 className="text-xl font-bold">Czworoboczny grzbietu</h2>
            <div className="mt-4 max-w-[320px]">
              <Carousel slides={cworob} />
            </div>
          </>
        }
      />
    </>
  );
}
