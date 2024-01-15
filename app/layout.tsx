import "./globals.css";

import { Poppins } from "next/font/google";
import { AppbarComponent } from "./Components/appBar";
import { Footer } from "./Components/footer";
import { TopBarComponent } from "./Components/topBar";
import { Providers } from "./Providers";

// const raleway = Raleway({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["200", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
        <Providers>
          <TopBarComponent />
          <main className="relative flex flex-col min-h-screen h-full w-full">
            <AppbarComponent />
            <div className="flex-1 flex flex-col justify-center min-h-full h-full min-w-full w-full">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
