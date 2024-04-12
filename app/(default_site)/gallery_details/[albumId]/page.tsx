import { notFound } from "next/navigation";
import { getImagesWithSrcAndBlurDataUrlArr } from "@/utils/base64Converters";
import GalleryModalContainer from "../../../../components/GalleryDetails/GalleryModalContainer";
import VideoCard from "../../../../components/GalleryDetails/VideoCard";

import { Mulish } from "next/font/google";
import MovingMessage from "@/components/MovingMessage/MovingMessage";
import AnimatedDiv from "@/components/reusable/animated-elements/AnimatedDiv";
import Bedcrumb from "@/components/Bedcrumb/Bedcrum";

const font = Mulish({ weight: "400", subsets: ["latin"] });

const beBaseUrl = "http://localhost/xampp/MARS/rest_ci_api_100/";
const feBaseUrl = "http://localhost:3001/";

async function fetchData(id: number) {
  // console.log(
  //   `${process.env.NEXT_PUBLIC_BE_BASE_URL}api/album-images?albumID=${id}`
  // );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BE_BASE_URL}api/album-images?albumID=${id}`,
    { cache: "no-cache" }
  );

  // if (!res.ok) return null;
  return res.json();
}

export default async function Gallery({
  params,
}: {
  params: { albumId: string };
}) {
  // const albumId = decodeURI(String(params.albumId));
  const data = await fetchData(Number(params.albumId));
  if (data.status == false) {
    notFound();
  }
  const albumsImagesData = data.data;
  const albumData = data.albumData;
  const yearData = data.yearData;
  // console.log("albumsImagesData:=", albumsImagesData);
  // console.log("albumData:=", albumData);
  // console.log("yearData:=", yearData);
  // console.log("dataa::::", data);

  let filterImages = albumsImagesData
    .slice()
    .filter((item: { [key: string]: any }) => item.type == "1");
  let filteredVideos = albumsImagesData
    .slice()
    .filter((item: { [key: string]: any }) => item.type == "0");

  // console.log(filteredVideos);
  let albumImages = filterImages.map((item: { [key: string]: any }) => ({
    ...item,
    imageUrl: `${process.env.NEXT_PUBLIC_BE_BASE_URL}uploads/album/${yearData.fiscal_year}/album_images/${item.album_image}`,
  }));

  let albumsBlurDataUrl = await getImagesWithSrcAndBlurDataUrlArr(albumImages);
  // console.log(albumsBlurDataUrl);

  return (
    <div className="w-[100%] overflow-hidden">
      <Bedcrumb heading="Gallery" pageName1={`Gallery - ${albumData.name}`} />

      <section id="albums" className="albumsShell py-20 px-2 sm:px-12 ">
        <AnimatedDiv
          initial={{ opacity: 0, x: "50vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4">
            {albumData.name} &nbsp;
            <span className="text-secondary-red1">{yearData.fiscal_year}</span>
          </div>
          <div className="w-[100px] border-b-[3px] border-red-500"></div>
        </AnimatedDiv>

        <div className=" mt-4  grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
          {albumsBlurDataUrl &&
            albumsBlurDataUrl?.map(
              (item: { [key: string]: any }, i: number) => (
                <div
                  key={i}
                  className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]"
                >
                  <GalleryModalContainer
                    data={albumsBlurDataUrl}
                    srcUrl={`${process.env.NEXT_PUBLIC_BE_BASE_URL}uploads/album/${yearData.fiscal_year}/album_images/${item.album_image}`}
                    blurUrl={item.blurDataUrl}
                    keyIndex={i}
                  />
                </div>
              )
            )}
        </div>

        <div className="w-full mt-4   grid md:grid-cols-2  gap-4  gap-y-8 place-content-center place-items-start">
          {filteredVideos.map((item: { [key: string]: any }, i: number) => (
            <VideoCard key={i} code={item.album_image} />
          ))}
        </div>
      </section>
    </div>
  );
}
