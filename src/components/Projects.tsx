import ProjectCard from './ProjectCard';
import { Project } from '@/types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'modal-deployment',
      title: 'ML model deployment with Modal',
      description: 'Serving and deploying a sticker sales forecasting machine learning model using Modal',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/ss.png',
      category: 'ML/AI model serving and deployment',
      links: {
        article: 'https://sticker-sales.flexiblefunctions.com/'
      },
      tags: ['Modal', 'Sales Forecasting', 'Deployment', 'FastAI']
    },
    {
      id: 'bentoml-deployment',
      title: 'ML model deployment with BentoML',
      description: 'Serving and deploying a binary classification machine learning model using BentoML',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/dalle_deployment.webp',
      category: 'ML/AI model serving and deployment',
      links: {
        article: 'https://nbsanity.com/static/64b506b80020adafd31defb4d6afb508/load.html'
      },
      tags: ['BentoML', 'Machine Learning', 'Deployment', 'FastAI']
    },
    {
      id: 'academic-success',
      title: 'Classification with the Academic Success dataset',
      description: 'A classification model to predict students dropout and academic success rate.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/academic_success.jpg',
      category: 'Machine Learning',
      links: {
        article: 'https://www.kaggle.com/code/rubanzasilva/fastai-gradient-boosting',
        demo: 'https://www.kaggle.com/competitions/playground-series-s4e6/discussion/517020'
      },
      tags: ['Classification', 'FastAI', 'Gradient Boosting', 'Education']
    },
    {
      id: 'used-cars',
      title: 'Regression - Prediction of Used Car Prices',
      description: 'A regression model to predict the price of used cars based on various attributes',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/used_cars.jpg',
      category: 'Machine Learning',
      links: {
        article: 'https://www.kaggle.com/code/rubanzasilva/used-cars-eda-fastai-gradient-boosting',
        demo: 'https://www.kaggle.com/competitions/playground-series-s4e9/discussion/544513'
      },
      tags: ['Regression', 'FastAI', 'EDA', 'Automotive']
    },
    {
      id: 'sd-1',
      title: 'Stable Diffusion from the Foundations',
      description: 'Comprehensive walkthrough of Stable Diffusion, starting from the theoretical foundations and building up to a complete implementation.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/stable-diffusion-ph.webp',
      category: 'Machine Learning',
      links: {
        article: 'https://stable-diffusion-1.flexiblefunctions.com',
      },
      tags: ['Stable Diffusion', 'Generative AI', 'AI Art']
    },
    
    {
      id: 'mushroom-classification',
      title: 'Binary Prediction of Poisonous Mushrooms',
      description: 'A classification model to predict whether a mushroom is edible or poisonous based on its physical characteristics.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/mushroomAnatomy.jpg',
      category: 'Machine Learning',
      links: {
        article: 'https://www.kaggle.com/code/rubanzasilva/fast-ai-gradient-boosting'
      },
      tags: ['Binary Classification', 'FastAI', 'Gradient Boosting', 'Biology']
    },
    {
      id: 'insurance-cross-selling',
      title: 'Binary Classification of Insurance Cross Selling',
      description: 'A classification model to predict which customers respond positively to an automobile insurance offer.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/insuarance_pexels.jpg',
      category: 'Machine Learning',
      links: {
        article: 'https://www.kaggle.com/code/rubanzasilva/fastai-neural-network-gradient-boosting'
      },
      tags: ['Binary Classification', 'Insurance', 'Neural Networks', 'FastAI']
    },
    {
      id: 'antelope-classifier',
      title: 'Antelope Classifier',
      description: 'After training a machine learning model you need to deploy it to show potential stakeholders what the results would look like with a decent UI, not jupyter notebooks to achieve any sort of buyback from the people/business that potentially want and can pay for this type of service.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg',
      category: 'Computer Vision',
      links: {
        article: 'https://rubanzasilva.github.io/antelope-classifier-documentation/',
        demo: 'https://huggingface.co/spaces/silvaKenpachi/antelopeClassifier?logs=build'
      },
      tags: ['Computer Vision', 'FastAI', 'Deployment', 'UI/UX']
    },
    {
      id: 'zicofe',
      title: 'Zigoti Coffee Website',
      description: 'Zigoti Coffee is a Ugandan coffee house that covers the whole value chain from growing, buying, processing, roasting, and export of Ugandan Coffee beans.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/ZICOFE.JPG',
      category: 'Web Development',
      links: {
        demo: 'https://www.zicofe.com/'
      },
      tags: ['React', 'E-commerce', 'Coffee', 'Uganda']
    },
    {
      id: 'suwik',
      title: 'Suwik Investments Website',
      description: 'Suwik aims to be the leading exporter of the freshest, highest quality agricultural products with guaranteed customer satisfaction',
      image: 'https://d322abd807wvow.cloudfront.net/suwik-photos/suwikLogo.jpeg',
      category: 'Web Development',
      links: {
        demo: 'https://www.suwik.xyz/',
        code: 'https://github.com/rubanzasilva/suwikEcommerce'
      },
      tags: ['React', 'E-commerce', 'Agriculture', 'Export']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-primary to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work in machine learning, data science, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;