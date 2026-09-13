type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "7+ yrs", label: "Machine learning" },
  { value: "9+ yrs", label: "Software development" },
  { value: "Kaggle", label: "Competitions expert" },
  { value: "HF", label: "Models on HuggingFace" },
];

const background: string[] = [
  "Exploratory Data Analysis and Data Wrangling",
  "Feature Engineering",
  "Model Building and Evaluation",
  "Deployment, Testing, and Monitoring",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="w-full mx-auto max-md:px-4 md:max-lg:max-w-screen-md md:max-lg:px-6 lg:max-w-screen-2xl lg:px-8">
        <div className="max-w-screen-xl mx-auto rounded-[2rem] bg-ploy-accent-secondary/40 border border-ploy-border-primary p-8 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12">
            <div>
              <h2 className="font-heading font-black text-ploy-text-primary tracking-tight max-md:text-4xl md:text-5xl leading-[0.95] text-balance">
                About me
              </h2>
              <p className="mt-6 text-lg text-ploy-text-primary leading-relaxed">
                Over the years, Ive worked across the full lifecycle of ML products, which includes translating business problems into performance metrics tied to business objectives,data engineering and analysis, building simple baselines before introducing machine learning, model building, serving, deployment, and integrating these model predictions into software, while setting up monitoring and the retraining feedback loop needed to keep models accurate and useful over time.
Depending on the project, this has meant owning that process end to end, or focusing specifically on model development, serving, and deployment within an existing pipeline.
              </p>
              <p className="mt-4 text-lg text-ploy-text-secondary leading-relaxed">
                I&rsquo;ve built predictive and generative models with Python, PyTorch, fastai, sklearn and various other common algorithms. In addition, I have 9+ years building software applications with HTML, CSS, JavaScript, React, Next.js, and other modern web technologies.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-heading font-black text-3xl text-ploy-text-primary">
                      {s.value}
                    </div>
                    <div className="mt-1 font-eyebrow text-[0.7rem] uppercase tracking-[0.06em] text-ploy-text-secondary">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-ploy-neutral-primary-s0 border border-ploy-border-primary p-8">
              <h3 className="font-heading font-bold text-2xl text-ploy-text-primary">
                My background
              </h3>
              <p className="mt-3 text-ploy-text-secondary leading-relaxed">
                A strong foundation in software engineering, and I apply these principles while working across the machine learning lifecycle.
              </p>
              <ul className="mt-5 space-y-3">
                {background.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ploy-text-primary">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-ploy-accent-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
