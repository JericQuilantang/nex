"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/toggle-mode";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  const [showNavigation, setShowNavigation] = useState(false);

  function handleNav() {
    setShowNavigation(!showNavigation);
  }

  return (
    <>
      <style>{`
      nav {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        position: fixed;
        width: 100%;
        z-index: 9999;
      }
      nav li{
        list-style: none;
      }
        .light{
          .navtext{
            color: #2d2e32;
          }
          nav{
            background-color: #ffffff;
          }
        }

        .dark{
          .navtext{
            color: #f9f9f9;
          }
          nav{
            background-color: #2d2e32;
          }
        }
        .desktopNav{
          display: flex;
        }
        .mobileNav{
          display: none;
        }
        .navCont li:last-child{
          display: none;
        }
        @media (max-width: 768px) {
          .desktopNav{
            // display: none;
            justify-content: center;
            
          }
          .mobileNav{
            display: flex;
          }
          .dark{
            .navCont{
              background-color: #151515;
            }
          }
          .light{
            .navCont{
              background-color: #f9f9f9;
            }
          }
          .navCont{
            flex-direction: column;
            position: fixed;
            width: 100%;
            height: 100vh;
            left: 0;
            right: 0;
            top: 84px;
            padding: 0;
            margin: 0;
            font-size: 2.5rem;
            gap: 0;
            visibility: hidden;
            opacity: 0;
            transform: scale(1);
            transition: visibility 0s, opacity 0.2s ease, 0.2s ease;
            li{
              padding: 0;
              width: 100%;
              text-align: center;
            }
            li:nth-child(5){
              visibility: hidden;
            }
            li:last-child{
              position: absolute;
              bottom: 6rem;
              width: 100%;
              text-align: center;
              font-size: 0.8rem;
              display: block;
            }
            p{
              visibility: visible;
            }
          }
          .showNav{
            visibility: visible;
            opacity: 1;
            height: 100vh;
          }
          .hideNav {
            visibility: hidden;
          }
          
        }
      `}</style>
      <nav>
        <div className="navtext flex justify-between items-center">
          <div className="font-extrabold text-xl px-12 py-7 font-altoneBold hover:cursor-pointer hover:animate-pulse">
            <Fade triggerOnce>
              <ScrollLink to="hero" smooth={true} duration={1000}>
                Jeric.dev
              </ScrollLink>
            </Fade>
          </div>
          <div className="desktopNav">
            <div
              className={`navCont flex gap-2 px-12 py-5 font-altoneReg items-center ${
                showNavigation ? "showNav" : "hideNav"
              }`}
            >
              <Fade cascade damping={0.2} triggerOnce>
                <li>
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={1000}
                    onClick={handleNav}
                  >
                    <Button
                      variant={"link"}
                      className="buttColor font-bold text-lg"
                    >
                      Home
                    </Button>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={1000}
                    onClick={handleNav}
                  >
                    <Button
                      variant={"link"}
                      className="buttColor font-bold text-lg"
                    >
                      About
                    </Button>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={1000}
                    onClick={handleNav}
                  >
                    <Button
                      variant={"link"}
                      className="buttColor font-bold text-lg"
                    >
                      Projects
                    </Button>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={1000}
                    onClick={handleNav}
                  >
                    <Button
                      variant={"link"}
                      className="buttColor font-bold text-lg"
                    >
                      Contact
                    </Button>
                  </ScrollLink>
                </li>
                <li>
                  <ModeToggle />
                </li>
                <li>Copyright © 2024. All rights reserved</li>
              </Fade>
            </div>
          </div>
          <div className="mobileNav">
            <Fade cascade damping={0.2} triggerOnce>
              <li className="inline-flex items-center px-4 py-2 h-20 w-20">
                <ModeToggle />
              </li>
              <li>
                <Button
                  variant={"default"}
                  className="h-20 w-20"
                  data-collapse-toggle="navbar-default"
                  onClick={handleNav}
                >
                  {showNavigation ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <Menu className="h-8 w-8" />
                  )}
                </Button>
              </li>
            </Fade>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
