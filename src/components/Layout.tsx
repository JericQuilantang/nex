
import React, { ReactNode } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from './theme-provider';
import ScrollToTop from "react-scroll-to-top";
import { ArrowUp } from 'lucide-react';


interface LayoutProps{
    children: ReactNode;
}
const Layout = ({children}: LayoutProps) => {
  return (
    <div className={'${inter.className}'}>
      <ScrollToTop smooth component={<ArrowUp />} style={
        { zIndex: 9999, 
          backgroundColor: "#21ce9a",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          borderRadius: "100%"
        }
      }
      />
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
      <Navbar />
      <main>{children}</main>
      <Footer />
      </ThemeProvider>

    </div>
  )
}

export default Layout