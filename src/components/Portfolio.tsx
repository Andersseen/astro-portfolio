import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { SkillCard } from './SkillCard';
import { skillsData } from '../data/skills';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Portfolio() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-x-4">
            {['en', 'es'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`text-secondary px-2 py-1 rounded ${
                  i18n.language === lang ? 'bg-secondary/20' : ''
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <ul className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <button className="text-secondary hover:text-secondary/80">
                  {t(`nav.${item}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        mousewheel
        keyboard
        modules={[Pagination, Mousewheel, Keyboard]}
        className="h-full"
      >
        <SwiperSlide>
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
                {t('home.title1')}
              </h2>
              <h3 className="text-4xl md:text-6xl text-secondary mt-4 animate-fade-in-delay">
                {t('home.title2')}
              </h3>
              <div className="mt-16">
                <h1 className="font-sixcaps text-8xl md:text-[15rem] text-secondary animate-scale">
                  Your Name
                </h1>
                <div className="flex justify-center items-center space-x-4 text-xl md:text-3xl text-secondary">
                  <span className="animate-fade-left">{t('home.role1')}</span>
                  <span>|</span>
                  <span className="animate-fade-right">{t('home.role2')}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-primary p-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
              <div className="flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="rounded-full w-64 h-64 object-cover border-4 border-secondary"
                />
              </div>
              <div className="flex flex-col justify-center text-secondary">
                <h2 className="text-4xl md:text-6xl mb-8">{t('about.text1')}</h2>
                <p className="text-xl mb-4">{t('about.text2')}</p>
                <p className="text-xl">{t('about.text3')}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full flex items-center justify-center bg-primary p-8">
            <div className="max-w-6xl w-full">
              <h2 className="text-6xl md:text-7xl text-secondary mb-4 font-sixcaps tracking-wider">
                {t('skills.title')}
              </h2>
              <p className="text-xl text-secondary/80 mb-12">{t('skills.subtitle')}</p>
              
              <div className="grid md:grid-cols-2 gap-12">
                {skillsData.map((category) => (
                  <SkillCard
                    key={category.category}
                    category={t(`skills.categories.${category.category}`)}
                    skills={category.skills}
                  />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full flex flex-col justify-center bg-primary p-8">
            <div className="max-w-6xl mx-auto w-full">
              <h2 className="text-6xl md:text-8xl text-secondary mb-8">
                {t('contact.title')}
              </h2>
              <h3 className="text-2xl md:text-4xl text-secondary mb-4">
                {t('contact.subtitle')}
              </h3>
              <p className="text-xl text-secondary mb-12">{t('contact.available')}</p>
              
              <div className="flex justify-between items-end">
                <div className="text-secondary">
                  <p>{t('contact.footer.design')}</p>
                  <p className="text-lg">{t('contact.footer.rights')}</p>
                </div>
                <div className="flex space-x-8">
                  {[
                    ['linkedin', 'https://linkedin.com'],
                    ['github', 'https://github.com'],
                    ['facebook', 'https://facebook.com']
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