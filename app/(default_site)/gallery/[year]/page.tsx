import { notFound } from "next/navigation";
import Link from "next/link";
import { getImagesWithSrcAndBlurDataUrlArr } from "@/utils/base64Converters";
import Image from "next/image";
import MovingMessage from "@/components/MovingMessage/MovingMessage";
import GalleryCard from "./GalleryCard";
import { Mulish } from "next/font/google";

const font = Mulish({ weight: "400", subsets: ["latin"] });

//

const beBaseUrl = "http://localhost/xampp/MARS/appolopublicschool.com/";
const feBaseUrl = "http://localhost:3000/";

async function fetchData(id: string | number) {
  const res = await fetch(`${beBaseUrl}api/albums.php?fyID=${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) return undefined;
  return res.json();
}

export default async function Gallery({
  params,
}: {
  params: { year: string | number };
}) {
  const year = decodeURI(String(params.year));
  if (year == "0") {
    return notFound();
  }
  const data = await fetchData(year);
  const albumsData = data.albums;
  const yearData = data.year;

  // console.log(data);

  if (!data || data.albums == false || year == "0") {
    return notFound();
  }
  let albumCoverImages = albumsData.map((item: { [key: string]: any }) => ({
    ...item,
    imageUrl: `${beBaseUrl}uploads/album/${yearData.fiscal_year}/cover_images/${item.cover_image}`,
  }));
  // console.log(albumCoverImages);

  let albumCoversBlurDataUrl = await getImagesWithSrcAndBlurDataUrlArr(
    albumCoverImages
  );

  // console.log(albumCoversBlurDataUrl);

  return (
    <div className="w-[100%] ">
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
        </div>
      </div>

      <section id="albums" className="albumsShell py-20 px-2 sm:px-12 ">
        <div className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4">
          Gallery{" "}
          <span className="text-secondary-red1">{yearData.fiscal_year}</span>
        </div>
        <div className="w-[100px] border-b-[3px] border-red-500"></div>
        <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start ">
          {albumCoversBlurDataUrl.map(
            (item: { [key: string]: any }, i: number) => (
              <GalleryCard
                key={i}
                i={i}
                id={item.id}
                name={item.name}
                srcUrl={`${beBaseUrl}uploads/album/${yearData.fiscal_year}/cover_images/${item.cover_image}`}
                blurDataUrl={item.blurDataUrl}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}
