import Image from "next/image";
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
import Link from "next/link";
import { holidayCalendarDetails } from "@/utils/displayData";

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
            {holidayCalendarDetails.mainHeadingList[0]} &nbsp;
            <span className="text-secondary-red1">
              {holidayCalendarDetails.mainHeadingList[1]}
            </span>
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>

          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <thead className="border-b text-gray-800 border-neutral-200  bg-gray-50 dark:border-white/10">
                        <tr>
                          <th
                            // scope="col"
                            className="border-e   border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4  dark:border-white/10"
                          >
                            Sl.No
                          </th>
                          <th
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                          >
                            MONTH AND DATE
                          </th>
                          <th
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                          >
                            DAY
                          </th>
                          <th
                            // scope="col"
                            className="border-e border-neutral-200 text-left text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10"
                          >
                            EVENT
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {holidayCalendarDetails.holidaysList.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  ${
                                (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                              } border-neutral-200 dark:border-white/10`}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10">
                                {i + 1}
                              </td>
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10">
                                {item.date}
                              </td>
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm md:text-base px-3 py-2 md:px-6  md:py-4 dark:border-white/10">
                                {item.event}
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
