import { Brain, Cog, Code, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "Machine Learning",
      description: "Exploratory Data Analysis, Feature Engineering, Model Building"
    },
    {
      icon: <Cog className="w-8 h-8 text-accent" />,
      title: "ML Deployment", 
      description: "Model deployment, testing, monitoring and integration into software solutions"
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Software Development",
      description: "Python, PyTorch, fastai, sklearn, HTML, CSS, JavaScript, React"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Web Development",
      description: "Over 6 years of experience developing web applications with modern technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I integrate machine learning models into general software solutions, all in the 
            context of solving real-world problems. My expertise spans the entire machine 
            learning lifecycle, from data analysis to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-300">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">My Background</h3>
          <p className="text-gray-300 leading-relaxed">
            With a strong foundation in Software Engineering, I specialize in the 
            intersection of machine learning and software development. My work encompasses 
            various stages of the machine learning lifecycle:
          </p>
          <ul className="mt-4 gradient-text-300 space-y-2">
          {/*<ul className="mt-4 text-gray-300 space-y-2">*/}
            <li>• Exploratory Data Analysis and Data Wrangling</li>
            <li>• Feature Engineering and Selection</li>
            <li>• Model Building and Evaluation</li>
            <li>• Deployment, Testing, and Monitoring</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            I am proficient with Python, PyTorch, and many other libraries such as fastai and 
            sklearn. Additionally, I have over 6 years of experience developing software 
            applications using HTML, CSS, Javascript, React JS, and other modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;