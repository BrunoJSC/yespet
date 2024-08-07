/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { ImageProps } from "next/image";
import { Card, CardContent } from "./ui/card";

const images: ImageProps[] = [
  { src: "01.png", alt: "one" },
  { src: "02.png", alt: "two" },
  { src: "03.png", alt: "three" },
  { src: "04.jpg", alt: "four" },
];

export function Banner() {
  return (
    <div className="w-full h-[400px] relative">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl h-full mx-auto p-4"
        autoplay
        autoplayInterval={3000}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="w-full h-[400px] bg-white shadow-xl rounded-lg ">
                <img
                  src={`/${image.src}`}
                  alt={image.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-center  h-full w-full aspect-square   rounded-lg"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
