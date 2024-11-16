import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  return (
    <div className="bg-primary/50 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl text-secondary mb-6 font-semibold">{category}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center space-x-2 text-secondary/90 hover:text-secondary transition-colors duration-300"
          >
            <i className={`${skill.icon} text-xl`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};