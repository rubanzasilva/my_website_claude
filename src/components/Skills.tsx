const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "fastai", level: 85 },
        { name: "scikit-learn", level: 92 },
        { name: "Data Analysis", level: 88 },
        { name: "Feature Engineering", level: 85 }
      ]
    },
    {
      title: "Web Development", 
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 78 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "DevOps & Deployment",
      skills: [
        { name: "BentoML", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 75 },
        { name: "Cloud Platforms", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My technical skills and areas of expertise in machine learning, software 
            development, and web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-secondary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent to-blue-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;