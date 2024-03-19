import Image from "next/image";
import { Lato } from "next/font/google";
const font = Lato({ weight: "400", subsets: ["latin"] });
import sreelakshmi from "@/public/sreelakshmi.jpg";
import Link from "next/link";

export default function PageName() {
  return (
    <div className="bg-[#FDFBF0]">
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
            Principal Message
          </span>
        </div>
      </div>
      <section
        id="principalMsg"
        className="py-[35px] sm:py-[50px] md:px-[35px] xl:px-[70px]  "
      >
        <div className="px-4 ">
          <div className="mx-auto ">
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
              Principal &nbsp;
              <span className="text-secondary-red1">Message</span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500 mb-4"></div>
          </div>
          <div className="principalMsgContainer bg-[#FAF6E2] pb-4">
            <div className=" lg:grid lg:grid-cols-2 p-4 pb-0">
              <div className="left">
                <h3
                  className={`text-[#007BFF] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 `}
                >
                  Ms. Sreelakshmi S.
                </h3>
                <h4
                  className={`text-[#e6272d] text-base xl:text-2xl font-semibold mb-3`}
                >
                  Principal, M.A., B.Ed.
                </h4>
                <p className="leading-8  text-[#1d1d1d] mb-3">
                  “Better than a thousand days of diligent study is one day with
                  a great teacher.”
                </p>
                <p className={`   leading-8  text-[#1d1d1d] mb-3`}>
                  {" "}
                  At Appolo, we believe that education cannot be limited merely
                  to textbooks and classrooms. It is our core belief that right
                  education is the one which builds one’s character, conduct and
                  culture. Guided by this very belief, Appolo was built with a
                  strong intention of moulding the young minds. We believe in an
                  all-round development of our students. Thus, our teachers
                  strive day in and day out to cater and understand the unique
                  needs of each of our students to bring out the best in their
                  interest.
                </p>
              </div>
              <div className="right flex  justify-center items-start pt-0  px-2">
                <div
                  className="p-4 
               "
                >
                  <div className="flex justify-stretch  p-10 pb-0 ">
                    <div className="   ">
                      <Image
                        src={sreelakshmi}
                        alt="sreelakshmi "
                        className="w-full h-auto object-cover "
                        placeholder="blur"
                      />
                    </div>
                    <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className={`px-4  mb-3 leading-8  text-[#1d1d1d]`}>
              {" "}
              We strongly believe in continual evolvement of teaching-learning
              methodologies to equip our students with competencies and skills
              that prepare them for their entry into the challenging world
              beyond school.
            </p>
            <p className={`px-4 mb-3  leading-8  text-[#1d1d1d]`}>
              {" "}
              In light of the utmost and superior outcome of our students, we
              ensure to provide an empowering child-centric environment for
              them. We are here to make our students lifelong learners and
              social influencers who can lead the community towards progress and
              positivity to make the world a better place to live in.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
