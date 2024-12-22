import Carousel from "../ui/carousel/carousel";

export default function CzworobocznyGrzbietu() {
  const cworob = [
    { id: 1, title: "Img", slideImage: "/cworob/1.png" },
    { id: 2, title: "Img", slideImage: "/cworob/2.png" },
  ];
  return (
    <>
      <h2 className="text-xl font-bold">Czworoboczny grzbietu</h2>
      <div className="mt-4 max-w-[320px]">
        <Carousel slides={cworob} />
      </div>
    </>
  );
}
