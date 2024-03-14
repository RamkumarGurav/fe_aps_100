"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import bannerImage1 from "../../public/banner-img-1.jpg";
import bannerImage2 from "../../public/banner-img-2.jpg";
import bannerImage3 from "../../public/banner-img-3.jpg";
import bannerImage4 from "../../public/banner-img-4.jpg";
import Image from "next/image";
export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-[400px]">
        <div className="embla__slide">
          <Image
            src={bannerImage1}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={bannerImage2}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={bannerImage3}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={bannerImage4}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
