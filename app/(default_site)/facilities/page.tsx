import Image from "next/image";
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
import Link from "next/link";
import { holidayCalendarDetails } from "@/utils/displayData";
import styles from "./styles.module.css";
import GalleryModalContainer from "@/components/GalleryDetails/GalleryModalContainer";
import { getImagesWithSrcAndBlurDataUrlArr } from "@/utils/base64Converters";
import InfraGalleryModalContainer from "./InfraGalleryModalContainer";

export default function PageName() {
  // let albumImages = [
  //   {
  //     imageUrl: `../..`,
  //   },
  // ];

  // let albumsBlurDataUrl = await getImagesWithSrcAndBlurDataUrlArr(albumImages);
  return (
    <div className={`${font.className}  bg-[#FDFBF0]`}>
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]   sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white `}>Facilities</h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">Facilities</span>
        </div>
      </div>

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto   `}>
          <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
            Our&nbsp;
            <span className="text-secondary-red1">Facilities</span>
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>

          <div className="">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Link
                href={"#"}
                className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
              >
                <div className="flex justify-center items-center bg-transparent relative  mb-4">
                  <div
                    className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                  >
                    <div
                      className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <div
                      className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>

                    <div
                      className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                    ></div>

                    <div
                      className={`${styles.facilityIcon1} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                    ></div>
                  </div>
                </div>
                <h4
                  className={`text-center font-semibold text-base text-gray-800`}
                >
                  Infrastructure
                </h4>
              </Link>
              <Link
                href={"#"}
                className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
              >
                <div className="flex justify-center items-center bg-transparent relative  mb-4">
                  <div
                    className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                  >
                    <div
                      className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <div
                      className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>

                    <div
                      className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                    ></div>

                    <div
                      className={`${styles.facilityIcon2} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                    ></div>
                  </div>
                </div>
                <h4
                  className={`text-center font-semibold text-base text-gray-800`}
                >
                  Knowledge centre
                </h4>
              </Link>
              <Link
                href={"#"}
                className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
              >
                <div className="flex justify-center items-center bg-transparent relative  mb-4">
                  <div
                    className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                  >
                    <div
                      className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <div
                      className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>

                    <div
                      className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                    ></div>

                    <div
                      className={`${styles.facilityIcon3} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                    ></div>
                  </div>
                </div>
                <h4
                  className={`text-center font-semibold text-base text-gray-800`}
                >
                  Science Lab
                </h4>
              </Link>
              <Link
                href={"#"}
                className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
              >
                <div className="flex justify-center items-center bg-transparent relative  mb-4">
                  <div
                    className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                  >
                    <div
                      className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <div
                      className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>

                    <div
                      className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                    ></div>

                    <div
                      className={`${styles.facilityIcon4} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                    ></div>
                  </div>
                </div>
                <h4
                  className={`text-center font-semibold text-base text-gray-800`}
                >
                  Computer Lab
                </h4>
              </Link>
              <Link
                href={"#"}
                className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
              >
                <div className="flex justify-center items-center bg-transparent relative  mb-4">
                  <div
                    className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                  >
                    <div
                      className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <div
                      className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>

                    <div
                      className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                    ></div>

                    <div
                      className={`${styles.facilityIcon5} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                    ></div>
                  </div>
                </div>
                <h4
                  className={`text-center font-semibold text-base text-gray-800`}
                >
                  Sports
                </h4>
              </Link>
              <Link
                href={"#"}
                className={`${styles.facilitiesCard} ${styles.facilitiesCardParent}`}
              >
                <div className="flex justify-center items-center bg-transparent relative  mb-4">
                  <div
                    className="relative rounded-full  w-[145px] h-[145px] 
                  bg-[#FDFBF0]  z-[99] "
                  >
                    <div
                      className={`${styles.facilitiesCardBgImageContainer1} absolute bottom-0
                   w-[145px] h-[145px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <div
                      className={`${styles.facilitiesCardBgImageContainer2} absolute bottom-0
                   w-[145px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center`}
                    ></div>

                    <div
                      className="shadowContainer absolute w-[90px] h-[87px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                    ></div>

                    <div
                      className={`${styles.facilityIcon6} absolute w-[70px] h-[70px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat`}
                    ></div>
                  </div>
                </div>
                <h4
                  className={`text-center font-semibold text-base text-gray-800`}
                >
                  Transport
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="Section" className={`  sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200 border-b-[1px] my-0"></div>
        </div>
      </section>
      <section
        id="infrastuctureSection"
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
            Our&nbsp;
            <span className="text-secondary-red1">Infrastructure</span>
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          <p className={`leading-8  text-[#1d1d1d] mb-3`}>
            Appolo is renowned for its education and holistic development that
            it renders to its students. It has always been catering to the needs
            of its budding students by providing an authentic environment and a
            friendly atmosphere for physical, social and mental development of
            child
          </p>
          <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
            <InfraGalleryModalContainer

            />
          </div>
        </div>
      </section>
    </div>
  );
}
