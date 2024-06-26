import FooterBottom from "@/components/Footer/FooterBottom";
import Navbar from "@/components/Navbar/Navbar";
import SideEnquire from "@/components/Layout/SideEnquire";
import FooterTop from "@/components/Footer/FooterTop";
import RcContainer from "@/components/Layout/RcContainer";
import { navLinks, contactUs } from "@/utils/displayData";
import MovingMessage from "@/components/MovingMessage/MovingMessage";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Web Design & Digital Marketing Services | Mars Web solution",
  description: "Generated by Next.js",
};

let year = new Date().getFullYear();
let nextYear = year + 1;
let admissionYear = year + "-" + nextYear.toString().slice(2);

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  navLinks.gallery.dropDown = [
    { name: "2023-24", link: "/gallery/2023-24" },
    { name: "2022-23", link: "/gallery/2022-23" },
  ];

  return (
    <div className="bg-white">
      <Navbar contactUs={contactUs} navLinks={navLinks} />
      <MovingMessage
        message="&ldquo;Admissions Open 2024-25&rdquo;"
        classes="text-secondary-red1 bg-[#F8F4E1]"
      />
      <main>{children}</main>
      {/* <RcContainer /> */}
      <SideEnquire admissionYear={admissionYear} />
      <ScrollToTop />
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
}
