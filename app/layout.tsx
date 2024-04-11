import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });
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
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <ChakraProvider>{children}</ChakraProvider>
        <div id="galleryModal"></div>
      </body>
    </html>
  );
}
