import React from "react";

const Skills = ({ t }) => (
  <div className="h-full flex flex-col justify-center items-center bg-primary p-8">
    <div className="max-w-4xl w-full">
      <h2 className="text-6xl md:text-7xl text-secondary mb-4 font-sixcaps tracking-wider">
        {t("skills.title")}
      </h2>
      <p className="text-xl text-secondary/80 mb-12">{t("skills.subtitle")}</p>

      <div className="space-y-8">
        <div className="bg-secondary/10 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl md:text-4xl text-secondary mb-4">
            {t("skills.categories.backend")}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-secondary text-lg md:text-xl">
            {t("skills.details.backend", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>

        <div className="bg-secondary/10 p-6 rounded-lg shadow-md">
          <h3 className="text-3xl md:text-4xl text-secondary mb-4">
            {t("skills.categories.devops")}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-secondary text-lg md:text-xl">
            {t("skills.details.devops", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
