import { Card, CardContent } from "@/components/ui/card";
import {
  PiIcon as Api,
  Code2,
  ComputerIcon as Desktop,
  Server,
  GitGraphIcon as Git,
} from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Skills = ({ t }) => {
  const skills = [
    {
      description: t("skills.details.desktop"),
      icon: <Desktop className="h-8 w-8" />,
      gridClass: "col-span-1 md:col-span-1 lg:col-span-2",
    },
    {
      description: t("skills.details.git"),
      icon: <Git className="h-8 w-8" />,
      gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      description: t("skills.details.serverDeployment"),
      icon: <Server className="h-8 w-8" />,
      gridClass: "col-span-1 md:col-span-1 lg:col-span-3",
    },
    {
      description: t("skills.details.apiDevelopment"),
      icon: <Api className="h-8 w-8" />,
      gridClass: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      description: t("skills.details.unitTesting"),
      icon: <Code2 className="h-8 w-8" />,
      gridClass: "col-span-1 md:col-span-1 lg:col-span-2",
    },
  ];

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "inset 1px 1px 2px #0e0702, inset -1px -1px 2px #fcefde8b",
      transition: {
        type: "spring",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full min-h-screen py-16 px-4 flex items-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
          {t("skills.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`${skill.gridClass} overflow-hidden rounded-xl shadow-[1px_1px_2px_#0e0702,-1px_-1px_2px_#fcefde8b]`}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="transition-all duration-300 ease-in-out">
                <CardContent className="p-2 lg:p-6 flex flex-col items-center justify-center h-full text-center">
                  <motion.div
                    className="rounded-full p-1 mb-1 lg:p-4 lg:mb-4 shadow-[inset_3px_3px_6px_#1c1c1c,inset_-3px_-3px_6px_#2c2c2c]"
                    whileHover={{ scale: 1.2 }}
                  >
                    {React.cloneElement(skill.icon, {
                      className: "text-secondary",
                    })}
                  </motion.div>
                  <p className="text-sm lg:text-base text-secondary">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
