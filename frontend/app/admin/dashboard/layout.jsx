import Header from "@/components/header";
import QuickOverview from "@/components/quickOverview";
import Sidebar from "@/components/sidebar";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="">
            <div className="md:flex">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="ml-8">
                        <Header />
                        <QuickOverview />
                        {children}
                    </div>
                </div>  
            </body>
      </html>
    );
  }
  