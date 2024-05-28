import "./globals.css";

export const metadata = {
  title: "MoonLight Ad",
  description: "This is An Ad App Created By Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
