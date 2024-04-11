import Link from "next/link";
import { Poppins } from "next/font/google";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Bedcrumb from "@/components/Bedcrumb/Bedcrum";
import AnimatedDiv from "@/components/reusable/animated-elements/AnimatedDiv";
import {
  springAnimate70pxFromBelow10,
  tweenAnimateFromLeft10,
  tweenAnimateFromLeft13,
  tweenAnimateFromLeft16,
} from "@/utils/variants";
import AnimatedButton from "@/components/reusable/animated-elements/AnimatedButton";
const font = Poppins({ weight: "400", subsets: ["latin"] });
export default function CUPageName() {
  return (
    <div className={`${font.className} bg-[#F9F9F9] overflow-hidden`}>
      <Bedcrumb heading="Contact Us" pageName1="Contact Us" />

      <section
        id="contactUsSection "
        className={`contactUsSection py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]`}
      >
        <div className={` px-4 mx-auto `}>
          <div className={`grid lg:grid-cols-2`}>
            <div className="left ">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Contact &nbsp;
                  <span className="text-secondary-red1">Us</span>
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
              </div>
              <AnimatedDiv
                variants={tweenAnimateFromLeft10}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4 rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <IoLocationSharp size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    APPOLO PUBLIC SCHOOL
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    #320,5TH CROSS,5th BLOCK ,3RD PHASE BSK III STAGE
                    Bangalore-560085
                  </p>
                </div>
              </AnimatedDiv>

              <AnimatedDiv
                variants={tweenAnimateFromLeft13}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4  rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <MdEmail size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    Email Address
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    appolopublicsch@gmail.com
                  </p>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                variants={tweenAnimateFromLeft16}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                className={`contactCard mb-6 shadow-lg flex items-center gap-4  rounded border border-gray-300 p-4 lg:mr-[100px]`}
              >
                <div className={`bg-red-500 rounded-full p-3 sm:p-4 `}>
                  <FaPhone size={25} className={`text-white`} />
                </div>
                <div>
                  <h1
                    className={`text-gray-700 text-xl sm:text-2xl font-medium`}
                  >
                    Phone Number
                  </h1>
                  <p className={`text-gray-700 text-sm font-medium`}>
                    +91 80-26698908/9 / +91 8792539589
                  </p>
                </div>
              </AnimatedDiv>
            </div>

            <div className="right">
              <div className="headingContainer mb-6">
                <AnimatedDiv
                  className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4"
                  variants={springAnimate70pxFromBelow10}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Enquire &nbsp;
                  <span className="text-secondary-red1">Here</span>
                </AnimatedDiv>
                <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
              </div>

              <form className="relative  w-full flex flex-col ">
                <div className="gap-2 flex flex-col ">
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Name* "
                      className="p-[15px] w-full py-[25px] bg-white text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] 
                     focus:outline-none appearance-none border-solid focus:border-red-500 hover:border-red-500 transition    "
                    />
                  </AnimatedDiv>
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.1, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Email Address*"
                      className="p-[15px] py-[25px] w-full text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-red-500 hover:border-red-500 transition    "
                    />
                  </AnimatedDiv>
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <input
                      type="text"
                      placeholder="Contact No*"
                      className="p-[15px] py-[25px] w-full text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-red-500 hover:border-red-500 transition    "
                    />
                  </AnimatedDiv>
                  <AnimatedDiv
                    className="w-full "
                    initial={{ opacity: 0, x: "20vw" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.3, type: "tween" }}
                    viewport={{ once: true, amount: 0 }}
                  >
                    <textarea
                      placeholder="Enter Your Message here...*"
                      cols={10}
                      rows={4}
                      className="p-[15px] py-[10px] w-full text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  
                    border-[1px] mb-4 h-[110px] focus:ring-0 focus:outline-none border-solid
                     focus:border-red-500 hover:border-red-500 transition "
                    />
                  </AnimatedDiv>
                  <div className={`flex `}>
                    <AnimatedButton
                      initial={{ opacity: 0, x: "20vw" }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.4, type: "tween" }}
                      viewport={{ once: true, amount: 0 }}
                      className="w-[160px] h-[52px] font-medium text-base font-sans rounded text-white bg-[#E92226] inline-block  hover:bg-black hover:text-white"
                      type="submit"
                    >
                      Send Message
                    </AnimatedButton>
                  </div>
                  {/* <div className={`flex `}>
                    <button
                      className="w-[160px] h-[52px] font-medium text-base font-sans rounded text-white bg-[#E92226] inline-block  hover:bg-black hover:text-white"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
