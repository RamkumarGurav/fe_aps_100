"use client";
import Image from "next/image";
import LogoBlack from "@/public/logo.jpg";
import LogoWhite from "@/public/logo.jpg";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import SideNav from "./DropDown";
import NavLinks from "./NavLinks";
import Link from "next/link";
import HeaderTop from "./HeaderTop";
import DropDown from "./DropDown";
import { Lato } from "next/font/google";
import { DiVim } from "react-icons/di";

const font = Lato({ weight: "400", subsets: ["latin"] });

export default function Navbar({
  navLinks,
  contactUs,
}: {
  navLinks: { [key: string]: any };
  contactUs: { [key: string]: any };
}) {
  const [open, setOpen] = useState(false);
  const [navLinkName, setNavLinkName] = useState("");
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleNavLinkName = (name: string) => {
    setNavLinkName((prevName) => (prevName === name ? "" : name));
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!open) {
      setNavLinkName("");
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolled = scrollTop > 41; //when scroll reaches above 50px lengthh

      setIsScrolled(isScrolled);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
      <HeaderTop contactUs={contactUs} />
      {/* ${
          isScrolled ? "fixed top-0 left-0 right-0" : "relative"
        }  */}
      <div
        className={`min-w-[100%]  sticky top-0 left-0 right-0        flex items-center 
         text-gray-900 font-serif  bg-yellow-muted h-full  ${font.className}  shadow-b
          
         z-[998]
        `}
      >
        <div className="wrapperToMakeZindexWork w-full h-full  lg z-[997] px-3 pb-1 lg:px-1 bg-yellow-muted ">
          <div className=" w-full h-full  flex items-center justify-between    ">
            <Link href="/" className="p-1">
              <Image
                src={isScrolled ? LogoBlack : LogoWhite}
                alt="logo"
                width={200}
                height={200}
                className="w-auto h-[46px] sm:h-[61px] object-cover"
                placeholder="blur"
              />
            </Link>
            {/* <div className="bg-red-500">xx</div> */}
            <NavLinks isScrolled={isScrolled} navLinks={navLinks} />
            <div className="h-full w-[40px]  flex items-center justify-center  visible lg:hidden">
              {!open ? (
                <FaBars
                  size={30}
                  onClick={handleOpen}
                  className="visible lg:hidden cursor-pointer   "
                />
              ) : (
                <GrFormClose
                  size={40}
                  onClick={handleOpen}
                  className="visible lg:hidden cursor-pointer font-bolder  "
                />
              )}
            </div>
          </div>
        </div>

        <DropDown
          open={open}
          navLinkName={navLinkName}
          handleNavLinkName={handleNavLinkName}
          handleOpen={handleOpen}
          navLinks={navLinks}
        />
      </div>

      {/* {isScrolled && <div className={`h-[51px] sm:h-[80px]`}></div>} */}
    </>
  );
}
