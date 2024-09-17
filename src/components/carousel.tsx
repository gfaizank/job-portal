"use client";

import { companies, CompaniesType } from "~/data/companies";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CompanyCarousel = () => {
  return (
    <Carousel
      className="mt-6 w-full px-4 py-10 md:mt-20 md:px-20"
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent className="flex items-center gap-5">
        {companies.map(({ id, path, name }: CompaniesType) => (
          <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
            <img
              src={path}
              alt={name}
              className="h-9 w-24 object-contain sm:h-14 md:w-36"
            />
          </CarouselItem>
        ))}
        {/* Repeat the companies to ensure a seamless infinite loop */}
        {companies.map(({ id, path, name }: CompaniesType) => (
          <CarouselItem
            key={`${id}-duplicate`}
            className="basis-1/3 lg:basis-1/6"
          >
            <img
              src={path}
              alt={name}
              className="h-9 w-24 object-contain sm:h-14 md:w-36"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyCarousel;
