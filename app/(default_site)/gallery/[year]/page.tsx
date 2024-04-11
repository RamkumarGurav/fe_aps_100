import { notFound } from "next/navigation";
import Link from "next/link";
import { getImagesWithSrcAndBlurDataUrlArr } from "@/utils/base64Converters";
import MovingMessage from "@/components/MovingMessage/MovingMessage";
import GalleryCard from "../../../../components/Gallery/GalleryCard";
import { Mulish } from "next/font/google";
import AnimatedDiv from "@/components/reusable/animated-elements/AnimatedDiv";
import Bedcrumb from "@/components/Bedcrumb/Bedcrum";

const font = Mulish({ weight: "400", subsets: ["latin"] });

const beBaseUrl = "http://localhost/xampp/MARS/appolopublicschool.com/";
const feBaseUrl = "http://localhost:3000/";

async function fetchData(id: string | number) {
  const res = await fetch(`${beBaseUrl}api/albums.php?fyID=${id}`);

  if (!res.ok) return null;
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
    <div className="w-[100%] overflow-hidden">
      <Bedcrumb heading="Gallery" pageName1={`Gallery`} />

      <section id="albums" className="albumsShell py-20 px-2 sm:px-12 ">
        <AnimatedDiv
          initial={{ opacity: 0, x: "50vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4">
            Gallery{" "}
            <span className="text-secondary-red1">{yearData.fiscal_year}</span>
          </div>
          <div className="w-[100px] border-b-[3px] border-red-500"></div>
        </AnimatedDiv>

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
