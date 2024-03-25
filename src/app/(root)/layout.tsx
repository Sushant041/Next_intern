import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-center flex-col">
          <Header />
          <hr className="w-full bg-gray-400 border-1 rounded dark:bg-gray-400" />
            <main className="h-full wrapper ">
                {children}
            </main>
            <hr className="w-full bg-gray-400 border-1 rounded dark:bg-gray-400" />
          <Footer />
        </div>
    )
}