import Image from "next/image";
import { Lato } from "next/font/google";
const font = Lato({ weight: "400", subsets: ["latin"] });
import rajab from "@/public/rajab.jpg";
import Link from "next/link";
import {
  easeInOutAnimate2timesShake10,
  springAnimate70pxFromBelow10,
  tweenAnimateFromLeft10,
  tweenAnimateFromLeft13,
  tweenAnimateFromLeft16,
  tweenAnimateFromLeft19,
} from "@/utils/variants";
import AnimatedDiv from "@/components/reusable/animated-elements/AnimatedDiv";
import AnimatedText from "@/components/reusable/animated-elements/AnimatedText";
import AnimatedTitle from "@/components/reusable/animated-elements/AnimatedDiv";

export default function CHMPageName() {
  return (
    <div className="bg-[#FDFBF0] overflow-hidden">
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]  ${font.className} sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white text-center`}>
          Messages
        </h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">
            Chairperson Message
          </span>
        </div>
      </div>
      <section
        id="chairpersonMsg"
        className="py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]  "
      >
        <div className="px-4">
          <div className="mx-auto ">
            <AnimatedDiv
              className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
              variants={springAnimate70pxFromBelow10}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0 }}
            >
              Chairperson &nbsp;
              <span className="text-secondary-red1">Message</span>
            </AnimatedDiv>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </div>
          <div className="chairpersonMsgContainer bg-[#FAF6E2] ">
            <div className=" grid lg:grid-cols-2 p-4">
              <div>
                <AnimatedTitle
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`text-[#007BFF] text-lg sm:text-xl font-bold mb-2 `}
                >
                  Mrs. RAJAB KASIAR
                </AnimatedTitle>
                <AnimatedText
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`text-[#e6272d] text-base font-semibold mb-2`}
                >
                  Chairperson
                </AnimatedText>
                <AnimatedText
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className="leading-8  text-[#1d1d1d]"
                >
                  &ldquo;Education is the best gift that can be given to a
                  child&rdquo;
                </AnimatedText>
                <AnimatedText
                  initial={{ opacity: 0, x: "-20vw" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6, type: "tween" }}
                  viewport={{ once: true, amount: 0 }}
                  className={`  mt-3 leading-8  text-[#1d1d1d]`}
                >
                  {" "}
                  At Appolo we provide an atmosphere to our students for
                  multifaceted development. The talents, skills and abilities of
                  students need to be identified, nurtured and encouraged so
                  that he/she is able to reach greater heights. This can only be
                  possible in a holistic, student-centric environment. While
                  academic excellence is our major thrust, the school is also
                  devoted to prepare the individual for life, groom them to face
                  the challenges of tomorrow with confidence and encourage each
                  student to be socially relevant.
                </AnimatedText>
              </div>
              <div className=" flex justify-center items-start pt-0 md:pt-10 px-2">
                <div
                  className="p-4 
               "
                >
                  <AnimatedDiv
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                    className="flex justify-stretch  "
                  >
                    <div className="   ">
                      <Image
                        src={rajab}
                        alt="RAJAB KASIAR"
                        className="w-full h-auto object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </AnimatedDiv>
                </div>
                {/* <div
              id="image-container"
              className="relative w-full h-[500px] lg:h-full overflow-hidden"
            > */}

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
