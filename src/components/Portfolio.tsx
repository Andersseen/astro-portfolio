import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "../i18n/i18n.config";
import "swiper/css";
import "swiper/css/pagination";
import Hero from "./slide-components/Hero";
import About from "./slide-components/About";
import Skills from "./slide-components/Skills";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "uk", name: "Українська" },
];

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lang");
    if (savedLang && languages.some((lang) => lang.code === savedLang)) {
      void i18n.changeLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
    localStorage.setItem("preferred-lang", lng);
  };

  const navigateToSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const year = new Date().getFullYear();

  return (
    <div className="h-screen w-screen overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-primary/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-2">
            {languages.map(({ code, name }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  i18n.language === code
                    ? "bg-secondary/20 text-secondary"
                    : "text-secondary/60 hover:text-secondary hover:bg-secondary/10"
                }`}
              >
                <span className="hidden md:inline">{name}</span>
              </button>
            ))}
          </div>
          <ul className="hidden md:flex space-x-8">
            {["home", "about", "skills", "contact"].map((item, index) => (
              <li key={item}>
                <button
                  onClick={() => navigateToSlide(index)}
                  className="text-secondary hover:text-secondary/80 transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Swiper
        ref={swiperRef}
        direction="vertical"
        pagination={{ clickable: true }}
        mousewheel
        keyboard
        modules={[Pagination, Mousewheel, Keyboard]}
        className="h-full"
      >
        <SwiperSlide>
          <Hero t={t} />
        </SwiperSlide>
        <SwiperSlide>
          <About t={t} />
        </SwiperSlide>
        <SwiperSlide>
          <Skills t={t} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center bg-primary p-8">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-6xl md:text-8xl text-secondary mb-8">
                {t("contact.title")}
              </h2>
              <h3 className="text-2xl md:text-4xl text-secondary mb-4">
                {t("contact.subtitle")}
              </h3>
              <p className="text-xl text-secondary mb-12">
                {t("contact.available")}
              </p>

              <div className="flex justify-between items-end">
                <div className="text-secondary">
                  <p>{t("contact.footer.design")}</p>
                  <p className="text-lg">
                    © {year} {t("contact.footer.rights")}
                  </p>
                </div>
                <div className="flex space-x-8">
                  {[
                    ["linkedin", "https://linkedin.com"],
                    ["github", "https://github.com"],
                    ["gitlab", "https://facebook.com"],
                  ].map(([icon, url]) => (
                    <a
                      key={icon}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <i className={`fab fa-${icon} text-3xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
