import { Hind_Madurai } from "next/font/google";
import "./globals.css";

const hindi = Hind_Madurai({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Kobo - Kopi Botol Terbaik di Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hindi.className}>{children}</body>
    </html>
  );
}
