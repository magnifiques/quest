import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full h-screen">
      <div>{children}</div>
      <div className="auth-assets hidden md:block relative">
        <Image
          src="/bg.jpg"
          fill
          quality={100}
          alt="Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </main>
  );
}
