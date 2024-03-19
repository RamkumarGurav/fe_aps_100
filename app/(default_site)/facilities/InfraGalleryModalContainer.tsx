"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import GalleryCarousel from "@/components/Carousel/GalleryCarousel";
import InfraGalleryCarousel from "./InfraGalleryCarousel";
import Modal from "@/components/GalleryDetails/Modal";
import infra1 from "@/public/infrastructure/1.jpg";
import infra2 from "@/public/infrastructure/2.jpg";
import infra3 from "@/public/events-img-1.jpg";
import infra4 from "@/public/events-img-2.jpg";
import infra5 from "@/public/events-img-3.jpg";
import infra6 from "@/public/events-img-4.jpg";
import infra7 from "@/public/sports/2.jpg";
import infra8 from "@/public/sports/1.jpg";

export default function InfraGalleryModalContainer() {
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
              src={infra1}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={currentIndex}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
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
              src={infra2}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={currentIndex}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
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
            onClick={() => (modalOpen ? close() : open())}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={infra3}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={2}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
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
            onClick={() => (modalOpen ? close() : open())}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={infra4}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={3}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
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
            onClick={() => (modalOpen ? close() : open())}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={infra5}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={4}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
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
            onClick={() => (modalOpen ? close() : open())}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={infra6}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={5}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
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
            onClick={() => (modalOpen ? close() : open())}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={infra7}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={6}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
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
            onClick={() => (modalOpen ? close() : open())}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={infra8}
              alt="infrastructure"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              // placeholder="blur"
              placeholder="blur"
              // blurDataURL={blurUrl}
              // loading={keyIndex < 9 ? "eager" : "lazy"}
            />
          </motion.div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close}>
                <InfraGalleryCarousel
                  slides={[1, 2, 3, 4, 5, 6, 7, 8]}
                  currentIndex={0}
                >
                  1
                </InfraGalleryCarousel>
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
