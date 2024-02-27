import React, { useEffect } from "react";
import Image from "next/image";
import anime from "animejs";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 1000,
        easing: "easeInExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 2,
        duration: 1500,
        easing: "easeOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <h1
          id="logo"
          className="font-extrabold text-xl px-12 py-7 font-altoneBold animate-pulse dark:text-white"
        >
          Jeric.dev
        </h1>
      </div>
    </>
  );
};

export default SplashScreen;
