import Link from "next/link";
import { Poppins } from "next/font/google";
import schoolStudentsImg from "../../../public/school-students.jpg";
import { FaRegDotCircle } from "react-icons/fa";
import Image from "next/image";
import AnimatedDiv from "@/components/reusable/animated-elements/AnimatedDiv";
import {
  springAnimate20vhFromBelow10,
  springAnimateFromBelow10,
  tweenAnimate100pxFromBelow10,
  tweenAnimate100vhFromBelow10,
  tweenAnimateFromLeft10,
  tweenAnimateFromLeft13,
} from "@/utils/variants";
import AnimatedText from "@/components/reusable/animated-elements/AnimatedText";
import { missionStatements, visionStatement } from "@/utils/displayData";

const font = Poppins({ weight: "400", subsets: ["latin"] });
export default function MVPageName() {
  return (
    <div
      className={`${font.className} bg-yellow-muted relative z-[1] overflow-hidden`}
    >
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]  ${font.className} sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white text-center`}>
          About Us
        </h1>

        <div className="flex justify-center items-center mt-2 ">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">
            Our Vision/Mission
          </span>
        </div>
      </div>
      <AnimatedDiv
        id="missionVisionSection "
        className={` py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px] overflow-hidden`}
        variants={springAnimate20vhFromBelow10}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={` px-4 mx-auto `}>
          <div>
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4`}>
              <AnimatedDiv
                className="left pt-4"
                initial={{ opacity: 0, rotate: 20 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, type: "tween" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="headingContainer mb-6">
                  <AnimatedDiv
                    className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                    variants={springAnimateFromBelow10}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    Our &nbsp;
                    <span className="">Vision</span>
                  </AnimatedDiv>
                  <div className="w-[100px] border-b-[2px] border-red-500 mb-3"></div>
                </div>
                <AnimatedText
                  className="text-black text-[18px] leading-6 mb-6"
                  variants={tweenAnimateFromLeft10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {visionStatement}
                </AnimatedText>
                <AnimatedDiv
                  variants={tweenAnimateFromLeft13}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Image
                    src={schoolStudentsImg}
                    alt="schoolstudents"
                    className="w-full h-auto object-cover   "
                    placeholder="blur"
                  />
                </AnimatedDiv>
              </AnimatedDiv>

              <AnimatedDiv
                className="right   col-span-2"
                initial={{ opacity: 0, rotate: -20 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1, type: "tween" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className=" bg-white p-4">
                  <div className="headingContainer mb-6">
                    <AnimatedDiv
                      className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                      variants={springAnimateFromBelow10}
                      initial={"offscreen"}
                      whileInView={"onscreen"}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Our &nbsp;
                      <span className="">Mission</span>
                    </AnimatedDiv>
                    <div className="w-[100px] border-b-[2px] border-red-500 mb-3"></div>
                  </div>
                  <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
                    {missionStatements.map((item: string, i: number) => (
                      <AnimatedDiv
                        key={i}
                        initial={{ opacity: 0, x: "20vw" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.3,
                          duration: 1,
                          type: "tween",
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className=" flex gap-4 mb-3"
                      >
                        <span>
                          <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                        </span>
                        <span className={`text-base ${font.className}`}>
                          {item}
                        </span>
                      </AnimatedDiv>
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}
