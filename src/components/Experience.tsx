const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "AI Research Lab",
      period: "2021 - Present",
      location: "Remote",
      description: [
        "Developed and deployed machine learning models for various classification and regression tasks",
        "Implemented end-to-end ML pipelines from data preprocessing to model deployment",
        "Collaborated with cross-functional teams to integrate ML solutions into existing software systems",
        "Utilized PyTorch, fastai, and scikit-learn for model development and BentoML for deployment"
      ]
    },
    {
      title: "Software Engineer", 
      company: "Tech Solutions Inc.",
      period: "2018 - 2021",
      location: "Kampala, Uganda",
      description: [
        "Developed web applications using React, JavaScript, HTML, and CSS",
        "Created and maintained RESTful APIs for client-server communication",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with UX/UI designers to implement user-friendly interfaces"
      ]
    },
    {
      title: "Web Developer",
      company: "Digital Creations",
      period: "2016 - 2018", 
      location: "Kampala, Uganda",
      description: [
        "Designed and developed websites for various clients across different industries"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Technology",
      period: "2019 - 2021",
      description: "Specialized in Machine Learning and Artificial Intelligence. Thesis focused on optimizing neural networks for resource-constrained environments."
    },
    {
      degree: "Bachelor of Science in Software Engineering", 
      school: "National University",
      period: "2015 - 2019",
      description: "Graduated with honors. Coursework included data structures, algorithms, software design patterns, and web development."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background in software engineering 
            and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                💼
              </span>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30">
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-2 top-0"></div>
                  <div className="bg-secondary/10 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">
                      {exp.period} • {exp.location}
                    </p>
                    <ul className="text-gray-300 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                🎓
              </span>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30">
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-2 top-0"></div>
                  <div className="bg-secondary/10 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-accent font-medium">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;