import Image from "next/image";
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
import knowledgeCenter2 from "@/public/knowledge-center/2.jpg";
import Link from "next/link";
import { FaRegHandPointRight } from "react-icons/fa";
import {
  schoolTimingsDetails,
  academicCalendarDetails,
} from "@/utils/displayData";

export default function PageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0]`}>
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]   sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white `}>School Timings</h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">
            School Timings
          </span>
        </div>
      </div>

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto   `}>
          <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
            {academicCalendarDetails.mainHeadingList[0]} &nbsp;
            <span className="text-secondary-red1">
              {academicCalendarDetails.mainHeadingList[1]}
            </span>
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>

          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                        <tr>
                          <th
                            // scope="col"
                            className="border-e   border-neutral-200 text-left text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4  dark:border-white/10"
                          >
                            Sl.No
                          </th>
                          <th
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10"
                          >
                            MONTH
                          </th>
                          <th
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10"
                          >
                            EVENTS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {academicCalendarDetails.monthsList.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  ${
                                (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                              } border-neutral-200 dark:border-white/10`}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10">
                                {i + 1}
                              </td>
                              <td className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10">
                                {item.month}
                              </td>
                              <td className="whitespace-nowrap border-e border-neutral-200 text-xs sm:text-base px-1 py-1 sm:px-6  sm:py-4 dark:border-white/10">
                                {item.eventsList.map(
                                  (event: string, j: number) => (
                                    <div key={j} className=" flex gap-2 mb-3">
                                      <span className="flex justify-center items-center pb-[1px]">
                                        <FaRegHandPointRight className="text-red-700 text-[15px]  " />
                                      </span>
                                      <span
                                        className={`text-gray-800 text-wrap  leading-8`}
                                      >
                                        {event}
                                      </span>
                                    </div>
                                  )
                                )}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
