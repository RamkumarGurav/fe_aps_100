"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import InfraGalleryCarousel from "./Carousel";
import Modal from "@/components/GalleryDetails/Modal";
import scienceLab1 from "@/public/science-lab/5.jpg";
import scienceLab2 from "@/public/science-lab/6.jpg";
import scienceLab3 from "@/public/science-lab/01.jpg";
import scienceLab4 from "@/public/science-lab/02.jpg";
import scienceLab5 from "@/public/science-lab/03.jpg";
import scienceLab6 from "@/public/science-lab/4.jpg";
import { defaultBlurDataUrl } from "@/utils/displayData";
import Carousel from "./Carousel";
export default function ScienceLabModalContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(0);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={scienceLab1}
              alt="knowledgeCentre"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(1);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={scienceLab2}
              alt="knowledgeCentre"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(2);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={scienceLab3}
              alt="knowledgeCentre"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(3);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={scienceLab4}
              alt="knowledgeCentre"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(4);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={scienceLab5}
              alt="knowledgeCentre"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(5);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={scienceLab6}
              alt="knowledgeCentre"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <Carousel currentIndex={currentIndex} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
