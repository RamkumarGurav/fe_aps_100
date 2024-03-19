import Image from "next/image";
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
import knowledgeCenter1 from "@/public/knowledge-center/1.jpg";
import Link from "next/link";
import { FaRegHandPointRight } from "react-icons/fa";
import { curriculumDetails } from "@/utils/displayData";

export default function PageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0]`}>
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]   sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white text-center`}>
          Academics
        </h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">Curriculum</span>
        </div>
      </div>
      <section
        id="curriculumSection"
        className="py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]  "
      >
        <div className="px-4 ">
          <div className="mx-auto ">
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
              {curriculumDetails.curriculumData.mainHeading}
            </div>
            <div className="w-[100px] border-b-[3px] border-red-700 mb-4"></div>
          </div>
          <div className="principalMsgContainer  pb-4">
            <div className=" lg:grid lg:grid-cols-2 p-4 pb-0">
              <div className="left">
                {curriculumDetails.curriculumData.list1.map(
                  (item: string, i: number) => (
                    <div key={i} className=" flex gap-2 mb-3">
                      <span className="flex justify-center items-center pb-[1px]">
                        <FaRegHandPointRight className="text-red-700 text-[15px] " />
                      </span>
                      <span className={`text-gray-800  leading-8`}>{item}</span>
                    </div>
                  )
                )}

                <div>
                  <p className={`text-base my-4 font-semibold text-gray-900`}>
                    {curriculumDetails.curriculumData.list2Heading}
                  </p>
                </div>
                {curriculumDetails.curriculumData.list2.map(
                  (item: string, i: number) => (
                    <div key={i} className=" flex gap-2 mb-3">
                      <span className="flex justify-center items-center pb-[1px]">
                        <FaRegHandPointRight className="text-red-700 text-[15px] " />
                      </span>
                      <span className={`text-gray-800  leading-8`}>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="right flex  justify-center items-start pt-0  px-2">
                <div
                  className="p-4 
               "
                >
                  <div className="flex justify-stretch  p-0 pb-0 ">
                    <div className="   ">
                      <Image
                        src={knowledgeCenter1}
                        alt="knowledgeCenter1 "
                        className="w-full h-auto object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="" className={` sm:px-[35px] xl:px-[70px]`}>
        <div className={` px-4 mx-auto `}>
          <div className="border-b-gray-200/70 border-b-[1px] mt-3"></div>
        </div>
      </section>

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` px-4 mx-auto `}>
          <div className="grid lg:grid-cols-3 p-4 gap-4">
            {curriculumDetails.classSubjectsData.map(
              (item: { [key: string]: any }, i: number) => (
                <div key={i} className="box1">
                  <div className="mx-auto ">
                    <div className="text-xl md:text-3xl text-start font-bold text-gray-900 mb-4">
                      {item.mainHeading}
                    </div>
                    <div className="w-[100px] border-b-[3px] border-red-700 mb-4"></div>
                    {item.list1.map((sub: string, j: number) => (
                      <div key={i} className=" flex gap-2 mb-3">
                        <span className="flex justify-center items-center pb-[1px]">
                          <FaRegHandPointRight className="text-red-700 text-[15px] " />
                        </span>
                        <span className={`text-gray-800  leading-8`}>
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className={` pb-[35px] sm:pb-[50px] sm:px-[35px] xl:px-[70px] `}>
        <div className={` p-8 mx-auto bg-[#FAF6E2]`}>
          <div className="mx-auto ">
            <div className="text-xl md:text-3xl text-start font-bold text-gray-900 mb-4">
              {curriculumDetails.assessmentData.mainHeading}
            </div>
            <div className="w-[100px] border-b-[3px] border-red-700 mb-4"></div>
            <div className=" flex gap-2 mb-3">
              <span className={`text-gray-800 text-base leading-8`}>
                {curriculumDetails.assessmentData.mainTag}
              </span>
            </div>
            {curriculumDetails.assessmentData.list1.map(
              (item: string, i: number) => (
                <div key={i} className=" flex gap-2 mb-3">
                  <span className="flex justify-center items-center pb-[1px]">
                    <FaRegHandPointRight className="text-red-700 text-[15px] " />
                  </span>
                  <span className={`text-gray-800  leading-8`}>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className={` pb-[35px] sm:pb-[50px] sm:px-[35px] xl:px-[70px] `}>
        <div className={` p-8 mx-auto bg-[#FAF6E2]`}>
          <div className="mx-auto ">
            <div className="text-xl md:text-3xl text-start font-bold text-gray-900 mb-4">
              {curriculumDetails.toolsOfAssessmentData.mainHeading}
            </div>
            <div className="w-[100px] border-b-[3px] border-red-700 mb-4"></div>

            {curriculumDetails.toolsOfAssessmentData.list1.map(
              (item: string, i: number) => (
                <div key={i} className=" flex gap-2 mb-3">
                  <span className="flex justify-center items-center pb-[1px]">
                    <FaRegHandPointRight className="text-red-700 text-[15px] " />
                  </span>
                  <span className={`text-gray-800  leading-8`}>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
