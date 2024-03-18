import { IoMdPeople } from "react-icons/io";
import { FaRegHandPointRight } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { BsVectorPen } from "react-icons/bs";
import { Poppins } from "next/font/google";
import Image from "next/image";
import EnquiryImg from "@/public/survey-1.png";
import Link from "next/link";
import "./style.module.css";
const font = Poppins({ weight: "400", subsets: ["latin"] });

export default function PageName() {
  return (
    <>
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]  ${font.className} sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white text-center`}>
          About Us
        </h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">
            Admission Procedure
          </span>
        </div>
      </div>
      <section
        id="admissionProcedureSection"
        className={`bg-[#FDFBF0] py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px] ${font.className}`}
      >
        <div className={` px-4 mx-auto `}>
          <div className="headingContainer flex flex-col justify-center items-center mb-6">
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
              Admission &nbsp;
              <span className="text-secondary-red1">Procedure</span>
            </div>
            <div className="w-[100px] border-b-[3px] border-red-500 mb-3"></div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4">
            <div className="admitCard admitCardParent">
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    01
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  {/* <CgNotes
                    className="absolute  top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%]  text-[50px] admitIcon1 text-blue-500 z-[99]"
                  /> */}
                  {/* <Image
                    src={EnquiryImg}
                    alt="enquiry"
                    placeholder="blur"
                    className="object-contain"
                  /> */}
                  <div
                    className="apIcon1 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Enquiry
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                Submit the online enquiry form or visit the school office. The
                office staff will get back to you.
              </p>
            </div>
            <div className="admitCard admitCardParent">
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    02
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon2 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Registration
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                Parents are requested to fill the registration form provided in
                the office.
              </p>
            </div>
            <div className="admitCard admitCardParent">
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    03
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon3 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Written Test
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                A written test will be conducted for the students seeking
                admission for grade 1 and above. Eligible student will be given
                seat and informed.
              </p>
            </div>
            <div className="admitCard admitCardParent">
              <div className="flex justify-center items-center bg-transparent relative  mb-4">
                <div
                  className="relative rounded-full  w-[105px] h-[105px] 
                  bg-[#FDFBF0]  z-[99] "
                >
                  <div
                    className="admitCardBgImageContainer1 absolute bottom-0
                   w-[105px] h-[105px] z-[2] left-0 rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admitCardBgImageContainer2 absolute bottom-0
                   w-[105px] h-[0px]  left-0  rounded-full bg-contain bg-no-repeat bg-center"
                  ></div>
                  <div
                    className="admissionProcStep1 border-2 text-center flex justify-center items-center 
            border-blue-500 w-[40px] h-[40px] absolute top-[-10px]
        
            right-[-20px] rounded-full font-serif text-blue-800 text-xl"
                  >
                    04
                  </div>
                  <div
                    className="shadowContainer absolute w-[80px] h-[77px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] bg-transparent rounded-full z-[1] shadow-admissionCard-icon"
                  ></div>
                  <div
                    className="apIcon4 absolute w-[50px] h-[50px] top-[50%] left-[50%] translate-x-[-50%]
              translate-y-[-50%] z-[10] bg-red-400/0 bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </div>
              <p className={`text-center text-gray-600 font-semibold`}>
                Admission
              </p>
              <p className={`text-center text-gray-700 font-medium`}>
                A meeting with the Principal will be scheduled at the time of
                admission. The filled application form along with the required
                documents are to be submitted within 7 days.
              </p>
            </div>
          </div>
          <div className="border-b-gray-200 border-b-[1px] my-8"></div>
          <div className={`grid lg:grid-cols-2`}>
            <div className="left ">
              <div className="headingContainer mb-6">
                <div className="text-[20px] lg:text-[27px] text-start font-bold text-gray-800 mb-4">
                  Documents Required for Admission:
                </div>
                <div className="w-[100px] border-b-[3px] border-red-700 mb-3"></div>
              </div>

              <div className=" flex gap-2 mb-3">
                <span>
                  <FaRegHandPointRight className="text-red-700 text-[15px] mt-1" />
                </span>
                <span className={`text-gray-800 text-sm leading-6`}>
                  Photocopy of Birth Certificate
                </span>
              </div>
              <div className=" flex gap-2 mb-3">
                <span>
                  <FaRegHandPointRight className="text-red-700 text-[15px] mt-1" />
                </span>
                <span className={`text-gray-800 text-sm leading-6`}>
                  Photocopy of Child’s Aadhar card and Parents Aadhar card
                </span>
              </div>
              <div className=" flex gap-2 mb-3">
                <span>
                  <FaRegHandPointRight className="text-red-700 text-[15px] mt-1" />
                </span>
                <span className={`text-gray-800 text-sm leading-6`}>
                  Three-passport size photograph.
                </span>
              </div>
              <div className=" flex gap-2 mb-3">
                <span>
                  <FaRegHandPointRight className="text-red-700 text-[15px] mt-1" />
                </span>
                <span className={`text-gray-800 text-sm leading-6`}>
                  Transfer certificate for class 2 and above.
                </span>
              </div>
              <div className=" flex gap-2 mb-3">
                <span>
                  <FaRegHandPointRight className="text-red-700 text-[15px] mt-1" />
                </span>
                <span className={`text-gray-800 text-sm leading-6`}>
                  Photocopy of previous year class report card.
                </span>
              </div>
            </div>

            <div className="right mt-4 lg:mt-0">
              <div className="headingContainer mb-6">
                <div className="text-[20px] lg:text-[27px] text-start font-bold text-gray-800 mb-4">
                  Enquire Here
                </div>
                <div className="w-[100px] border-b-[3px] border-red-700 "></div>
              </div>
              <form className="relative  w-full flex flex-col ">
                <div className="gap-2 flex flex-col ">
                  <input
                    type="text"
                    placeholder="Name "
                    className="p-[15px] py-[25px] bg-white text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] 
                     focus:outline-none appearance-none border-solid focus:border-red-700 hover:border-red-700 transition    "
                  />
                  <input
                    type="text"
                    placeholder="Email "
                    className="p-[15px] py-[25px] text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-red-700 hover:border-red-700 transition    "
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-[15px] py-[25px] text-gray-600 font-medium placeholder-gray-500  font-sans text-[16px]  border-[1px] mb-4 h-[38px] focus:ring-0 focus:outline-none border-solid focus:border-red-700 hover:border-red-500 transition    "
                  />

                  <textarea
                    placeholder="Message"
                    cols={10}
                    rows={4}
                    className="p-[15px] py-[10px] text-gray-600 font-medium placeholder-gray-500 
                   font-sans text-[16px]  
                    border-[1px] mb-4 h-[110px] focus:ring-0 focus:outline-none border-solid
                     focus:border-red-700 hover:border-red-700 transition "
                  />

                  <div className={`flex `}>
                    <button
                      className="w-[160px] h-[52px] font-medium text-base font-sans rounded text-white bg-[#E92226] inline-block  hover:bg-black hover:text-white"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
