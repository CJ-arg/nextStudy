import Navbar from "@/components/navbar/Navbar";

export default function Multi1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Pagina Portfolio Page</span>

        {children}
      </main>
    </>
  );
}
