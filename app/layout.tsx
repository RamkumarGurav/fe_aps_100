import "./globals.css";
import { Lato } from "next/font/google";

const font = Lato({ weight: "400", subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="body"
        className={`${font.className} max-w-[1536px] mx-auto bg-gray-400`}
      >
        {children}
        <div id="galleryModal"></div>
      </body>
    </html>
  );
}
