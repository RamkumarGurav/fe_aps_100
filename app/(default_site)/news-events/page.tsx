import Image from "next/image";
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
import Link from "next/link";
import { eventsDetails } from "@/utils/displayData";

export default function PageName() {
  return (
    <div className={`${font.className}  bg-[#FDFBF0]`}>
      <div
        className={`bedcrumb flex flex-col justify-center items-center h-[140px]   sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white `}>News and Events</h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">
            News and Events
          </span>
        </div>
      </div>

      <section
        className={` py-[35px] sm:py-[50px] sm:px-[35px] xl:px-[70px]   `}
      >
        <div className={` p-4 mx-auto   `}>
          <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-2">
            {eventsDetails.mainHeadingList[0]} &nbsp;
            <span className="text-secondary-red1">
              {eventsDetails.mainHeadingList[1]}
            </span>
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>

          <div className="">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full lg:w-[800px] border border-neutral-200  text-sm font-light text-surface dark:border-white/10 dark:text-white">
                      <tbody>
                        {/* //{--------------TERM-I-------------- */}
                        <tr
                          className={`border-b bg-gray-50
                               border-neutral-200  table-`}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>TERM-I</p>
                          </td>
                        </tr>
                        <tr
                          className={`border-b  
                               border-neutral-200 `}
                        >
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            SL.NO.
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DATE
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DAY
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            EVENT
                          </td>
                        </tr>
                        {/* //{--------------MAY-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>MAY</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.may.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JUNE-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>JUNE</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.june.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JULY-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>JULY</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.july.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------AUGUST-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>AUGUST</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.august.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------SEPTEMBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>SEPTEMBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.september.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------OCTOBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>OCTOBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term1.october.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        <tr
                          className={`border-b 
                               border-neutral-200  table-`}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>TERM-II</p>
                          </td>
                        </tr>
                        <tr
                          className={`border-b  bg-gray-50
                               border-neutral-200 `}
                        >
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            SL.NO.
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DATE
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            DAY
                          </td>
                          <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                            EVENT
                          </td>
                        </tr>
                        {/* //{--------------OCTOBER-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>MAY</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.october.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------NOVEMBER-------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>NOVEMBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.november.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------DECEMBER-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>DECEMBER</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.december.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{--------------JANUARY-------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>JANUARY</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.january.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td
                            colSpan={2}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4"
                          >
                            <p className="text-wrap ">
                              {String(
                                eventsDetails.term2.january.specialEvents[0]
                                  .oneToTwo
                              )}
                            </p>
                          </td>
                          <td
                            colSpan={2}
                            className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4"
                          >
                            <p className="text-wrap ">
                              {String(
                                eventsDetails.term2.january.specialEvents[0]
                                  .threToFour
                              )}
                            </p>
                          </td>
                        </tr>
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------FEBRUARY--------------- */}
                        <tr
                          className={`border-b   
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>FEBRUARY</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.february.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 3) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------MARCH--------------- */}
                        <tr
                          className={`border-b   bg-gray-50
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>MARCH</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.march.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}
                        {/* //{-------------APRIL--------------- */}
                        <tr
                          className={`border-b bg-gray-50  
                               border-neutral-200 `}
                        >
                          <td colSpan={4} className="pt-2 pb-4 px-4">
                            <p>APRIL</p>
                          </td>
                        </tr>
                        {eventsDetails.term2.april.events.map(
                          (item: { [key: string]: any }, i: number) => (
                            <tr
                              key={i}
                              className={`border-b  
                               border-neutral-200   ${
                                 (i + 2) % 2 == 1 ? "bg-gray-50" : ""
                               } `}
                            >
                              <td className="whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.slno}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.date}
                              </td>
                              <td className="uppercase whitespace-nowrap border-e border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.day}
                              </td>
                              <td className="whitespace-nowrap border-e min-w-[500px]  border-neutral-200 text-sm px-1 py-1 sm:px-6  sm:py-4 ">
                                {item.eventsList.map((e: string, j: number) => (
                                  <p key={j} className="text-wrap ">
                                    {e}
                                  </p>
                                ))}
                              </td>
                            </tr>
                          )
                        )}
                        {/* //--------------------------------------------------} */}{" "}
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
