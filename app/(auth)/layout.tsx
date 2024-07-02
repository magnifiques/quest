import { Video } from "@/components/custom/Video";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 w-full h-screen">
      <div>{children}</div>
      <div className="auth-assets hidden md:block">
        <Video />
      </div>
    </main>
  );
}
