
import "./globals.css";
import { Lato } from "next/font/google";

const font=Lato({weight:"400" ,subsets:['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        {children}
        <div id="galleryModal"></div>
      </body>
    </html>
  );
}
