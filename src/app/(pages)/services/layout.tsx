import Footer from "@/app/pages/footer";
import Form from "@/app/pages/form";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
