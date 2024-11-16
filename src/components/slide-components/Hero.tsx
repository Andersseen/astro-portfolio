import React from "react";

const Hero = ({ t }) => (
  <div className="relative h-full flex items-center justify-center bg-primary">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    >
      <source src="/video.webm" type="video/webm" />
    </video>
    <div className="relative z-10 text-center">
      <h2 className="text-6xl md:text-8xl text-secondary animate-fade-in">
        {t("home.title1")}
      </h2>
      <h3 className="text-4xl md:text-6xl text-secondary mt-4 animate-fade-in-delay">
        {t("home.title2")}
      </h3>
      <div className="mt-16">
        <h1 className="font-sixcaps text-8xl md:text-[15rem] text-secondary animate-scale">
          Yevhen Letin
        </h1>
        <div className="flex justify-center items-center space-x-4 text-xl md:text-3xl text-secondary">
          <span className="animate-fade-left">{t("home.role1")}</span>
          <span>|</span>
          <span className="animate-fade-right">{t("home.role2")}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
