import { Lato } from "next/font/google";
const font = Lato({ weight: "400", subsets: ["latin"] });
import Image from "next/image";
import AbouApsImg from "../../public/abt-img.jpg";
import rajab from "../../public/rajab.jpg";
import sreelakshmi from "../../public/sreelakshmi.jpg";
import bannerImg1 from "../../public/banner-img-1.jpg";
import bannerImg2 from "../../public/banner-img-2.jpg";
import bannerImg3 from "../../public/banner-img-3.jpg";
import bannerImg4 from "../../public/banner-img-4.jpg";
import HeroCarousel from "@/components/Carousel/HeroCarousel";
import HomeHeroCarousel from "@/components/Carousel/HomeHeroCarousel";
import MovingMessage from "@/components/MovingMessage/MovingMessage";
import SwiperCarousel from "@/components/Carousel/Swiper/SwiperCarousel";
import EmblaCarousel from "@/components/Carousel/HeroCarousel";

export default function Home() {
  const hereSlides = [1, 2, 3, 4];
  return (
    <div
      className={`min-h-[500px] w-[100%] bg-[#FCF9F1] ${font.className} font-mono`}
    >
      <MovingMessage
        message='"Admissions Open 2024-25"'
        classes="text-secondary-red1 bg-[#F8F4E1]"
      />
      <section className="py-10">
        <SwiperCarousel />
      </section>
      {/* <section className="py-10">
        <EmblaCarousel />
      </section> */}

      {/* <section id="homeCarousel">
        <HomeHeroCarousel slides={hereSlides} autoPlay={true}>
          {" "}
          <Image
            src={bannerImg1}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />{" "}
          <Image
            src={bannerImg2}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />{" "}
          <Image
            src={bannerImg3}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />{" "}
          <Image
            src={bannerImg4}
            alt="banner"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />{" "}
          <Image
            src={AbouApsImg}
            alt="pagination"
            className="w-full h-auto object-cover "
            placeholder="blur"
          />
        </HomeHeroCarousel>
      </section> */}
      <section
        id="aboutAps"
        className="pt-[20px] pb-10 lg:pt-[40px] px-[5px] lg:px-[80px] "
      >
        <div className="aboutApsContainer grid lg:grid-cols-2">
          <div className="p-4">
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
              About &nbsp;
              <span className="text-secondary-red1">Appolo Public School</span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500"></div>
            <p className={`  mt-3 leading-8  text-[#1d1d1d]`}>
              {" "}
              Appolo Public School, is established by Mrs. Rajab Kasiar under
              the patronage of The Apollo Education Trust. It has built an
              admirable reputation as a school that offers a high quality of
              holistic education in Bangalore. The school is affiliated to the
              Indian Certificate of Secondary Education (C.I.S.C.E) with
              affiliation number KA400. At Appolo Public School, learning is
              valued and cherished as a life-long commitment; to foster this, it
              provides a secure and open atmosphere that supports diversity and
              welcomes inquiry. It also believes in developing positive
              character traits and will-power in students throughout their
              lives, fostering each individual’s personal development. The
              school educators are a committed lot, who promote self-confidence,
              integrity, perseverance, responsibility, self-respect and
              inter-personal skills.
            </p>
          </div>
          <div className=" flex justify-center items-start pt-10 px-2">
            {/* <div
              id="image-container"
              className="relative w-full h-[500px] lg:h-full overflow-hidden"
            > */}
            <Image
              src={AbouApsImg}
              alt="pagination"
              className="w-full h-auto object-cover "
              placeholder="blur"
            />
            {/* </div> */}
          </div>
        </div>
      </section>
      <section
        id="chairpersonMsg"
        className="pt-[20px] pb-10 lg:pt-[40px] px-[5px] lg:px-[80px]  border-blue-300"
      >
        <div className="mx-auto flex flex-col justify-center items-center my-4">
          <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
            Chairperson Message
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500"></div>
        </div>
        <div className="chairpersonMsgContainer bg-[#FAF6E2] ">
          <div className=" grid lg:grid-cols-2 p-4">
            <div className="p-4">
              <h3
                className={`text-[#007BFF] text-lg sm:text-xl font-bold mb-2 `}
              >
                Mrs. RAJAB KASIAR
              </h3>
              <h4 className={`text-[#e6272d] text-base font-semibold mb-2`}>
                Chairperson
              </h4>
              <p className="leading-8  text-[#1d1d1d]">
                “Education is the best gift that can be given to a child”
              </p>
              <p className={`  mt-3 leading-8  text-[#1d1d1d]`}>
                {" "}
                At Appolo we provide an atmosphere to our students for
                multifaceted development. The talents, skills and abilities of
                students need to be identified, nurtured and encouraged so that
                he/she is able to reach greater heights. This can only be
                possible in a holistic, student-centric environment. While
                academic excellence is our major thrust, the school is also
                devoted to prepare the individual for life, groom them to face
                the challenges of tomorrow with confidence and encourage each
                student to be socially relevant.
              </p>
            </div>
            <div className=" flex justify-center items-start pt-0 md:pt-10 px-2">
              <div
                className="p-4 
               "
              >
                <div className="flex justify-stretch  ">
                  <div className="   ">
                    <Image
                      src={rajab}
                      alt="RAJAB KASIAR"
                      className="w-full h-auto object-cover "
                      placeholder="blur"
                    />
                  </div>
                  <div className="bg-[#348BC1] inline-block w-[20px] mt-8 mb-4"></div>
                </div>
              </div>
              {/* <div
              id="image-container"
              className="relative w-full h-[500px] lg:h-full overflow-hidden"
            > */}

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <section
        id="principalMsg"
        className="pt-[20px] pb-10 lg:pt-[40px] px-[5px] lg:px-[80px]  "
      >
        <div className="mx-auto flex flex-col justify-center items-center my-4">
          <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
            Principal Message
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500"></div>
        </div>
        <div className="principalMsgContainer bg-[#FAF6E2] ">
          <div className=" grid lg:grid-cols-2 p-4">
            <div className="p-4">
              <h3
                className={`text-[#007BFF] text-lg sm:text-xl font-bold mb-2 `}
              >
                Ms. Sreelakshmi S.
              </h3>
              <h4 className={`text-[#e6272d] text-base font-semibold mb-2`}>
                Principal, M.A., B.Ed
              </h4>
              <p className="leading-8  text-[#1d1d1d]">
                “Better than a thousand days of diligent study is one day with a
                great teacher.”
              </p>
              <p className={`  mt-3 leading-8  text-[#1d1d1d]`}>
                {" "}
                At Appolo, we believe that education cannot be limited merely to
                textbooks and classrooms. It is our core belief that right
                education is the one which builds one’s character, conduct and
                culture. Guided by this very belief, Appolo was built with a
                strong intention of moulding the young minds. We believe in an
                all-round development of our students. Thus, our teachers strive
                day in and day out to cater and understand the unique needs of
                each of our students to bring out the best in their interest.
              </p>
            </div>
            <div className=" flex justify-center items-start pt-0 md:pt-10 px-2">
              <div
                className="p-4 
               "
              >
                <div className="flex justify-stretch  ">
                  <div className="border-[5px] border-white">
                    {" "}
                    <Image
                      src={sreelakshmi}
                      alt="pagination"
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
      </section>
      <section
        id="toppers"
        className="pt-[20px] pb-10 lg:pt-[40px] px-[5px] lg:px-[80px] bg-[#F9F9F9] "
      >
        <div className="mx-auto flex flex-col justify-center items-center my-4">
          <div className="text-2xl md:text-4xl text-start font-bold text-gray-900 mb-4">
            Toppers
          </div>
          <div className="w-[100px] border-b-[4px] border-red-500"></div>
        </div>
        <div className="toppersContainer min-h-[400px]"></div>
      </section>
      <section
        id="studentsMsg"
        className=" object-cover"
        style={{ backgroundImage: "url(../../trust_bg.jpg)" }}
      >
        <div className="pt-[20px] pb-10 lg:pt-[40px] px-[5px] lg:px-[80px] bg-[#25304ae7] w-full h-full">
          <div className="mx-auto flex flex-col justify-center items-center my-4">
            <div className="text-2xl md:text-4xl text-start font-bold text-gray-100 mb-4">
              Students & Parents&nbsp;
              <span className="text-secondary-red1">Messages</span>
            </div>
            <div className="w-[100px] border-b-[4px] border-red-500"></div>
          </div>

          <div className="studentsMsgContainer min-h-[400px]"></div>
        </div>
      </section>
    </div>
  );
}
