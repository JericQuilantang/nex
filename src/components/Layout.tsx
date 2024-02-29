"use client";
import React, { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "./theme-provider";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUp } from "lucide-react";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = React.useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  return (
    <div className={"${inter.className}"}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <ScrollToTop
              smooth
              component={<ArrowUp />}
              style={{
                zIndex: 9999,
                backgroundColor: "#21ce9a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
              }}
            />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
