import FooterBottom from "@/components/Footer/FooterBottom";
import Navbar from "@/components/Navbar/Navbar";
import SideEnquire from "@/components/Layout/SideEnquire";
import FooterTop from "@/components/Footer/FooterTop";
import RcContainer from "@/components/Layout/RcContainer";
import { navLinks, contactUs } from "@/utils/displayData";

export const metadata = {
  title: "Web Design & Digital Marketing Services | Mars Web solution",
  description: "Generated by Next.js",
};

const beBaseUrl = "http://localhost/xampp/MARS/appolopublicschool.com/";
const feBaseUrl = "http://localhost:3000/";

let year = new Date().getFullYear();
let nextYear = year + 1;
let admissionYear = year + "-" + nextYear.toString().slice(2);

async function fetchData() {
  //---ADD "?" ADD THE end to get rid of the "< token " error
  const res = await fetch(`${beBaseUrl}api/years.php?`);
  if (!res.ok) return undefined;
  return res.json();
}
export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchData();
  let dropDownLinks = data?.years.map((item: any) => {
    let link = feBaseUrl + "gallery/" + item.id;
    return {
      name: item.fiscal_year,
      link: link,
    };
  });
  navLinks.gallery.dropDown = dropDownLinks;

  return (
    <div>
      <Navbar contactUs={contactUs} navLinks={navLinks} />

      <main>{children}</main>
      <RcContainer />
      <SideEnquire admissionYear={admissionYear} />
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
}
