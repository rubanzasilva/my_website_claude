import { Brain, Rocket, Code, Globe } from 'lucide-react';

const SkillsBar = () => {
  const skills = [
    {
      icon: <Brain className="w-5 h-5" />,
      bgColor: 'bg-ploy-accent-primary',
      title: 'Machine Learning',
      description: 'EDA, feature engineering, model building',
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      bgColor: 'bg-ploy-accent-primary',
      title: 'ML Deployment',
      description: 'Serving, testing, monitoring, integration',
    },
    {
      icon: <Code className="w-5 h-5" />,
      bgColor: 'bg-ploy-accent-secondary/60',
      title: 'Software Development',
      description: 'Python, PyTorch, fastai, sklearn',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      bgColor: 'bg-ploy-accent-secondary/60',
      title: 'Web Development',
      description: 'React, Next.js, 9+ years shipping',
    },
  ];

  return (
    <section className="pt-24 pb-24">
      <div className="w-full mx-auto max-md:px-4 md:max-lg:max-w-screen-md md:max-lg:px-6 lg:max-w-screen-2xl lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 px-6 py-4 ${
                index < skills.length - 1 ? 'lg:border-r lg:border-ploy-border-primary' : ''
              }`}
            >
              <div className={`w-11 h-11 rounded-full ${skill.bgColor} flex items-center justify-center shrink-0`}>
                {skill.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-ploy-text-primary mb-1">
                  {skill.title}
                </h3>
                <p className="text-sm text-ploy-text-secondary leading-snug">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBar;
