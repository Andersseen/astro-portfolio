import React from "react";

const About = ({ t }) => (
  <div className="h-full flex items-center justify-center bg-primary p-8">
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
      <div className="flex items-center justify-center">
        <img
          src="/myFoto.webp"
          alt="myFoto"
          className="rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] w-64 h-64 object-cover border-4 border-secondary shadow-[15px_15px_50px_rgba(0,0,0,0.2)] animate-morphing"
        />
      </div>
      <div className="flex flex-col justify-center text-secondary">
        <h2 className="text-4xl md:text-6xl mb-8">{t("about.text1")}</h2>
        <p className="text-xl mb-4">{t("about.text2")}</p>
        <p className="text-xl">{t("about.text3")}</p>
      </div>
    </div>
  </div>
);

export default About;
