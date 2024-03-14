import { notFound } from "next/navigation";
import Link from "next/link";
import { getImagesWithSrcAndBlurDataUrlArr } from "@/utils/base64Converters";
import Image from "next/image";
import GalleryModalContainer from "../../../../components/GalleryDetails/GalleryModalContainer";
import VideoCard from "../../../../components/GalleryDetails/VideoCard";

import { Mulish } from "next/font/google";
import MovingMessage from "@/components/MovingMessage/MovingMessage";

const font = Mulish({ weight: "400", subsets: ["latin"] });

const beBaseUrl = "http://localhost/xampp/MARS/appolopublicschool.com/";

async function fetchData(id: string | number) {
  const res = await fetch(`${beBaseUrl}api/album_images.php?albumID=${id}`);

  if (!res.ok) return null;
  return res.json();
}

export default async function Gallery({
  params,
}: {
  params: { albumId: string | number };
}) {
  const albumId = decodeURI(String(params.albumId));
  const data = await fetchData(albumId);
  const albumsImagesData = data.albumImages;
  const albumData = data.album;
  const yearData = data.year;

  if (!data || data.albumImages == false) {
    notFound();
  }
  let filterImages = albumsImagesData
    .slice()
    .filter((item: { [key: string]: any }) => item.type == "1");
  let filteredVideos = albumsImagesData
    .slice()
    .filter((item: { [key: string]: any }) => item.type == "0");

  // console.log(filteredVideos);
  let albumImages = filterImages.map((item: { [key: string]: any }) => ({
    ...item,
    imageUrl: `${beBaseUrl}uploads/album/${yearData.fiscal_year}/album_images/${item.album_image}`,
  }));

  let albumsBlurDataUrl = await getImagesWithSrcAndBlurDataUrlArr(albumImages);
  // console.log(albumsBlurDataUrl)

  return (
    <div className="w-[100%] ">
      {/* <div className="h-[75px]"></div> */}
      <MovingMessage
        message='"Admissions Open 2024-25"'
        classes="text-secondary-red1 bg-[#F8F4E1]"
      />
      <div
        className={`gallery-banner flex flex-col justify-center items-center h-[140px]  ${font.className} sm:h-[170px] bg-cover`}
        style={{ backgroundImage: "url('../../inner2.jpg')" }}
      >
        <h1 className={`text-2xl sm:text-4xl text-white text-center`}>
          Gallery
        </h1>

        <div className="flex justify-center items-center mt-2">
          <Link href="/" className={`text-xs  text-[#EF4438] font-bold `}>
            Home
          </Link>
          <span className="text-white text-xs">&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="font-medium text-white text-xs ">Gallery</span>
          <span className="text-white text-xs">
            &nbsp;&nbsp;-&nbsp;&nbsp;
          </span>{" "}
          <span className="font-medium text-white text-xs ">
            {albumData.name}
          </span>
        </div>
      </div>

      <section id="albums" className="albumsShell py-20 px-2 sm:px-12 ">
        <div className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4">
          {albumData.name} &nbsp;
          <span className="text-secondary-red1">{yearData.fiscal_year}</span>
        </div>
        <div className="w-[100px] border-b-[3px] border-red-500"></div>
        <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
          {albumsBlurDataUrl &&
            albumsBlurDataUrl?.map(
              (item: { [key: string]: any }, i: number) => (
                <div
                  key={i}
                  className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]"
                >
                  <GalleryModalContainer
                    data={albumsBlurDataUrl}
                    srcUrl={`${beBaseUrl}uploads/album/${yearData.fiscal_year}/album_images/${item.album_image}`}
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
