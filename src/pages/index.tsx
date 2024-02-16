import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  ChevronRight,
  GithubIcon,
  LinkedinIcon,
  Mail,
  PhoneCall,
} from "lucide-react";
import waving from "../assets/waving.png";
import portrait from "../assets/portrait.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import aboutimg from "../assets/aboutimg.avif";
import laptopimg from "../assets/laptop.png";
import frontendspin from "../assets/frontend.svg";
import Image from "next/image";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <title>Jeric.dev</title>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <Layout>
        <style>
          {`
          .morph{
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            margin: auto;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
            animation: morphing 10s infinite;
            overflow: hidden;
          }
          @keyframes morphing_dark {
            0% {
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
                border: 3px solid #f9f9f9;
            }
            25% { 
                border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
                border: 3px solid #f9f9f9;
            }
            50% {
                border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
                box-shadow: -10px -5px 50px rgba(0,0,0,0.2);
                border: 3px solid #f9f9f9;
            }
            75% {
                border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
                border: 3px solid #f9f9f9;	
            }
            100%{
                border: 3px solid #f9f9f9;
            }
          } 
          @keyframes morphing {
            0% {
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
                border: 3px solid black;
            } 
            25% { 
                border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
                border: 3px solid black;
            }
            50% {
                border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
                box-shadow: -10px -5px 50px rgba(0,0,0,0.2);
                border: 3px solid black;
            }
            75% {
                border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
                border: 3px solid black;	
            }
            100%{
                border: 3px solid black;
            }
          }
          @keyframes spin {
            to {
                transform: rotate(360deg);
            }
          }
          .frontwheel {
            animation: spin 8s linear infinite;
          }
        .light {
          .frontwheel {
            background: white;
          }
          .morph{
            background: #b5b2ac;
          }
          .vline{
            --tw-bg-opacity: 1;
            background-color: rgb(39 39 42 / var(--tw-bg-opacity));
          }
        }
        .dark {
          .frontwheel {
            background: #ededed;
            --tw-invert: invert(100%);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
          }
          .morph{
            animation: morphing_dark 10s infinite;
            background: #5a5956;
          }
          .vline{
            background-color: white;
          }
        }
        .projectimg{
          overflow: hidden;
          border-radius: 1.5rem;
        }
        .projectgrid img {
        transition: transform 0.5s, filter 1s ease-in-out;
        transform: scale(1);
        }
      
        .projectimg img:hover {
        transform: scale(1.2);
        }
          `}
        </style>
        <section className="hero px-64 pb-28 pt-48">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
          <div className="herocont flex justify-between">
            <div className="heroconttxt h-auto w-[28rem]">
              <Fade direction="down" triggerOnce>
                <h1 className="font-altoneBold text-6xl">
                  Front-End Next Developer{" "}
                  <Image
                    src={waving}
                    alt="👋🏻"
                    width={56}
                    height={56}
                    className="h-14 w-14 inline-block"
                  />
                </h1>
              </Fade>
              <Fade triggerOnce>
                <p className="py-4 text-lg font-altoneReg">
                  Hi, I&apos;m Jeric Ivan. A passionate Front-end Developer
                  based in Cabanatuan City, Nueva Ecija. 📍
                </p>
              </Fade>
              <Fade direction="up" triggerOnce>
                <div className="button-container">
                  <Button variant="default" size="icon">
                    <a
                      href="https://www.linkedin.com/in/jeric-quilantang-a86508288/"
                      target="_blank"
                    >
                      <LinkedinIcon className="hover:text-blue-500" />
                    </a>
                  </Button>
                  <Button variant="default" size="icon">
                    <a
                      href="https://github.com/JericQuilantang"
                      target="_blank"
                    >
                      <GithubIcon className="hover:text-blue-500" />
                    </a>
                  </Button>
                </div>
              </Fade>
            </div>
            <div className="p">
              <Fade delay={300} triggerOnce>
                <div className="morph border-black">
                  <Image
                    src={portrait}
                    alt="portrait"
                    width={500}
                    height={500}
                    className="object-cover h-80 w-80"
                  />
                </div>
              </Fade>
            </div>
          </div>
          <div className="heroicon flex flex-1 z-[1001]">
            <div className="cont flex items-center py-20 text-lg font-semibold">
              <Fade triggerOnce>
                <div className="text inline-block">
                  <p className="pr-4 inline-block font-altoneReg text-[#22ce9d]">
                    <a href="https://techstacksph.com" target="_blank">
                      TechstacksPH
                    </a>
                  </p>
                  <hr className=" hidden" />
                  <div className="vline inline-block h-[20px] min-h-[1em] w-[1.5px] self-stretch bg-auto opacity-50 dark:opacity-50 align-middle"></div>
                </div>
              </Fade>
              <div className="logos inline-block pl-14">
                <Fade
                  direction="left"
                  delay={200}
                  cascade
                  damping={0.15}
                  triggerOnce
                >
                  <ul className="flex flex-wrap gap-8 list-none justify-center">
                    <li>
                      <Image
                        src={icon1}
                        alt="icon1"
                        className="hover:animate-bounce hover:cursor-pointer"
                      />
                    </li>

                    <li>
                      <Image
                        src={icon2}
                        alt="icon2"
                        className="hover:animate-bounce hover:cursor-pointer"
                      />
                    </li>

                    <li>
                      <Image
                        src={icon3}
                        alt="icon3"
                        className="hover:animate-bounce hover:cursor-pointer"
                      />
                    </li>

                    <li>
                      <Image
                        src={icon4}
                        alt="icon4"
                        className="hover:animate-bounce hover:cursor-pointer"
                      />
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className="about px-64 py-28" id="about">
          <div className="abtcontainer">
            <div className="aboutcont items-center grid justify-center grid-cols-2">
              <div className="aboutimg flex">
                <Fade triggerOnce>
                  <div className="relative">
                    <Image
                      src={aboutimg}
                      alt="mainimg"
                      width={25 * 16}
                      height={20 * 16}
                      className="mainimg rounded-3xl object-cover"
                    />
                    <span className="lightwheel absolute -bottom-5 -right-16 transform translate-y-10">
                      <Image
                        src={frontendspin}
                        alt="frontendwheel"
                        className="frontwheel h-[180px] w-[180px] rounded-full"
                      />
                    </span>
                    <Image
                      src={laptopimg}
                      alt="laptopimg"
                      className="laptopimg absolute bottom-0 -right-[0.15rem] h-[60px] w-[60px] object-cover"
                    />
                  </div>
                </Fade>
              </div>
              <div className="aboutcnt">
                <Fade direction="right" cascade damping={0.1} triggerOnce>
                  <h1 className="font-altoneBold text-1xl text-blue-700">
                    ABOUT ME
                  </h1>

                  <h1 className="font-altoneBold text-2xl">
                    Front-end Developer based in Nueva Ecija, PH 📍
                  </h1>

                  <p className="py-4 text-lg text-[#7F7F7F] font-altoneReg">
                    I like CSS styling. I love video and photo editing and
                    developing dynamic, intuitive user experiences.
                  </p>

                  <p className="py-4 text-lg text-[#7F7F7F] font-altoneReg">
                    My main stack currently is React/Next.js in combination with
                    Tailwind CSS and TypeScript.
                  </p>

                  <Button variant="link" size="default">
                    <ChevronRight className="inline-block" />
                    <span className="pl-2 font-altoneReg">
                      <a href="/cv/CV.pdf" target="_blank">
                        {" "}
                        Download CV
                      </a>
                    </span>
                  </Button>
                </Fade>
              </div>
            </div>
          </div>
        </section>
        <section className="projects px-64 py-28" id="projects">
          <h1 className="headtxt font-altoneBold text-4xl text-center pb-[3.5rem]">
            PROJECTS
          </h1>
          <div className="projectscont">
            <div className="projectgrid flex flex-1 py-10 justify-center">
              <Fade delay={150} triggerOnce>
                <div className="projectcard">
                  <div className="projectimg">
                    <Image
                      src={aboutimg}
                      alt="projectimg"
                      className="object-cover shadow-lg shadow-[#17171772]"
                    />
                  </div>
                </div>
              </Fade>
              <Fade direction="right" delay={300} triggerOnce>
                <div className="projecttxtbox mt-16 -ml-32 z-10">
                  <div className="projectdesc bg-white dark:bg-[#171717] rounded-3xl px-5 py-10 shadow-md dark:shadow-zinc-800 min-h-[20rem] w-[28rem]">
                    <h1 className="font-altoneBold text-2xl">Project 1</h1>

                    <p className="py-4 text-lg text-[#7F7F7F] font-altoneReg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident, corrupti! Reprehenderit esse officiis ex
                      veritatis, quo qui eius porro aliquam in distinctio nulla
                      repellendus eos, necessitatibus eveniet laborum ratione
                      neque.
                    </p>

                    <Button
                      variant="outline"
                      size="default"
                      className="rounded-2xl bg-blue-800 hover:bg-blue-500 text-[#f9f9f9] hover:text-black"
                    >
                      <ChevronRight className="inline-block hover:text-black" />

                      <span className=" pl-2 font-altoneReg">View Project</span>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="projectgrid rev flex flex-1 py-10 justify-center">
              <Fade direction="left" delay={300} triggerOnce className="z-10">
                <div className="projecttxtbox mt-16 -mr-32">
                  <div className="projectdesc bg-white dark:bg-[#171717] rounded-3xl px-5 py-10 shadow-md dark:shadow-zinc-800 min-h-[20rem] w-[28rem]">
                    <h1 className="font-altoneBold text-2xl">Project 2</h1>

                    <p className="py-4 text-lg text-[#7F7F7F] font-altoneReg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident, corrupti! Reprehenderit esse officiis ex
                      veritatis, quo qui eius porro aliquam in distinctio nulla
                      repellendus eos, necessitatibus eveniet laborum ratione
                      neque.
                    </p>

                    <Button
                      variant="outline"
                      size="default"
                      className="rounded-2xl bg-blue-800 hover:bg-blue-500 text-[#f9f9f9] hover:text-black"
                    >
                      <ChevronRight className="inline-block hover:text-black" />

                      <span className=" pl-2 font-altoneReg">View Project</span>
                    </Button>
                  </div>
                </div>
              </Fade>
              <Fade delay={150} triggerOnce>
                <div className="projectcard">
                  <div className="projectimg">
                    <Image
                      src={aboutimg}
                      alt="projectimg"
                      className="rounded-3xl object-cover shadow-lg shadow-[#17171772]"
                    />
                  </div>
                </div>
              </Fade>
            </div>
            <div className="projectgrid flex flex-1 py-10 justify-center">
              <Fade delay={150} triggerOnce>
                <div className="projectcard">
                  <div className="projectimg">
                    <Image
                      src={aboutimg}
                      alt="projectimg"
                      className="rounded-3xl object-cover shadow-lg shadow-[#17171772]"
                    />
                  </div>
                </div>
              </Fade>
              <Fade direction="right" delay={300} triggerOnce>
                <div className="projecttxtbox mt-16 -ml-32 z-10">
                  <div className="projectdesc bg-white dark:bg-[#171717] rounded-3xl px-5 py-10 shadow-md dark:shadow-zinc-800 min-h-[20rem] w-[28rem]">
                    <h1 className="font-altoneBold text-2xl">Project 3</h1>

                    <p className="py-4 text-lg text-[#7F7F7F] font-altoneReg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident, corrupti! Reprehenderit esse officiis ex
                      veritatis, quo qui eius porro aliquam in distinctio nulla
                      repellendus eos, necessitatibus eveniet laborum ratione
                      neque.
                    </p>

                    <Button
                      variant="outline"
                      size="default"
                      className="rounded-2xl bg-blue-800 hover:bg-blue-500 text-[#f9f9f9] hover:text-black"
                    >
                      <ChevronRight className="inline-block hover:text-black" />

                      <span className=" pl-2 font-altoneReg">View Project</span>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="contact px-64 py-28">
            <div className="contactcont items-center justify-center grid-cols-2">
              <div className="contactcnt">
                <Fade direction="down" triggerOnce>
                  <h1 className="font-altoneBold text-1xl text-blue-700">
                    CONTACT DETAILS
                  </h1>
                </Fade>
                <Fade direction="up" triggerOnce>
                  <h2 className="font-altoneBold text-3xl">
                    Get in touch with me!👇
                  </h2>
                </Fade>
              </div>
              <div className="contacticontxtcont pt-12 flex flex-wrap gap-10 grid-cols-2">
                <Fade cascade damping={0.15} triggerOnce>
                  <div className="contacticontxt flex">
                    <Button
                      size="icon"
                      className="text-blue-700 shadow-gray-300 shadow-sm rounded-full"
                    >
                      <Mail />
                    </Button>
                    <div className="px-3">
                      <h1 className="font-altoneBold text-lg">Mail</h1>

                      <p className="font-altoneReg text-[#7F7F7F]">
                        <a href="mailto:jericquilantang87@gmail.com">
                          jericquilantang87@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contacticontxt flex">
                    <Button
                      size="icon"
                      className="text-blue-700 shadow-gray-300 shadow-sm rounded-full"
                    >
                      <PhoneCall />
                    </Button>
                    <div className="px-3">
                      <h1 className="font-altoneBold text-lg">Phone</h1>

                      <p className="font-altoneReg text-[#7F7F7F]">
                        <a href="tel:639614916962">+63 961 491 6962</a>
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
