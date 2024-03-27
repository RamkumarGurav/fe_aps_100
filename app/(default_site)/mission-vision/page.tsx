import Link from "next/link";
import { Poppins } from "next/font/google";
import schoolStudentsImg from "../../../public/school-students.jpg";
import { FaRegDotCircle } from "react-icons/fa";
import Image from "next/image";
import AnimatedDiv from "@/components/reusable/animated-elements/AnimatedDiv";
import {
  textSpringAnimateFromBelow10,
  textTweenAnimateFromLeft10,
  textTweenAnimateFromLeft13,
} from "@/utils/variants";
import AnimatedText from "@/components/reusable/animated-elements/AnimatedText";
import { missionStatements, visionStatement } from "@/utils/displayData";
import { Variants } from "framer-motion";
const font = Poppins({ weight: "400", subsets: ["latin"] });
export default function PageName() {
  // const textVariants: Variants = {
  //   hidden: { opacity: 0, x: 20 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.5,
  //       delay: i * 0.2, // Adjust the delay for staggering effect
  //     },
  //   }),
  // };
  return (
    <div className={`${font.className} bg-[#F9F9F9] relative z-[1]`}>
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
      <section
        id="missionVisionSection "
        className={` py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px] overflow-hidden`}
      >
        <div className={` px-4 mx-auto `}>
          <div>
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4`}>
              <div className="left pt-4">
                <div className="headingContainer mb-6">
                  <AnimatedDiv
                    className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                    variants={textSpringAnimateFromBelow10}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    Our &nbsp;
                    <span className="text-secondary-red1">Vision</span>
                  </AnimatedDiv>
                  <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
                </div>
                <AnimatedText
                  className="text-black text-[18px] leading-6 mb-6"
                  variants={textTweenAnimateFromLeft10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {visionStatement}
                </AnimatedText>
                <AnimatedDiv
                  variants={textTweenAnimateFromLeft13}
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
              </div>

              <div className="right   col-span-2">
                <div className=" bg-white p-4">
                  <div className="headingContainer mb-6">
                    <AnimatedDiv
                      className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                      variants={textSpringAnimateFromBelow10}
                      initial={"offscreen"}
                      whileInView={"onscreen"}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Our &nbsp;
                      <span className="text-secondary-red1">Mission</span>
                    </AnimatedDiv>
                    <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
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

                  {/* <div className=" flex gap-4 mb-3">
                    <span>
                      <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                    </span>
                    <span>
                      To create a safe and comfortable physical environment, as
                      learning is the chief priority because each student is a
                      valued individual with unique needs.
                    </span>
                  </div>
                  <div className=" flex gap-4 mb-3">
                    <span>
                      <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                    </span>
                    <span>
                      To create Child centered class rooms where in it enables
                      student to take the responsibility for their learning and
                      their action.
                    </span>
                  </div>
                  <div className=" flex gap-4 mb-3">
                    <span>
                      <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                    </span>
                    <span>
                      To impart quality education and variety of instructional
                      approaches and learning activities to develop confident,
                      self- directed, responsible learner.
                    </span>
                  </div>
                  <div className=" flex gap-4 mb-3">
                    <span>
                      <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                    </span>
                    <span>
                      To develop curriculum, linked to our real life situation
                      and to utilize new technologies for holistic development
                      of the child..
                    </span>
                  </div>
                  <div className=" flex gap-4 mb-3">
                    <span>
                      <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                    </span>
                    <span>
                      To mould an individual to Excel in learning by imparting
                      the true knowledge based on rich Indian culture blended
                      with Modern learning tools.
                    </span>
                  </div>
                  <div className=" flex gap-4 mb-3">
                    <span>
                      <FaRegDotCircle className="text-red-500 text-[15px] mt-1" />
                    </span>
                    <span>
                      To develop in children the ability to apply themselves to
                      a wide range of educational, social and physical
                      activities..
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
