import ProjectCard from './ProjectCard';
import { Project } from '@/types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'modal-deployment',
      title: 'ML model deployment with Modal',
      description: 'Serving and deploying a sticker sales forecasting machine learning model using Modal.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/ss.png',
      category: 'ML/AI Serving & Deployment',
      links: {
        article: 'https://sticker-sales.flexiblefunctions.com/'
      },
      tags: ['Modal', 'Sales Forecasting', 'Deployment', 'FastAI']
    },
    {
      id: 'matmul',
      title: 'Matrix Multiplication from scratch',
      description: 'Doing Matrix Multiplication from scratch (using just python , its standard library, matplotlib) in Solveit.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/matmul.png',
      category: 'Python Development',
      links: {
        article: 'https://share.solveit.pub/d/067cca734a432d5446798dae58863b90'
      },
      tags: ['Python', 'First Principles', 'Solveit']
    },
    {
      id: 'bentoml-deployment',
      title: 'ML model deployment with BentoML',
      description: 'Serving and deploying a binary classification machine learning model using BentoML.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/dalle_deployment.webp',
      category: 'ML/AI Serving & Deployment',
      links: {
        article: 'https://nbsanity.com/static/64b506b80020adafd31defb4d6afb508/load.html'
      },
      tags: ['BentoML', 'Machine Learning', 'Deployment', 'FastAI']
    },
    {
      id: 'medical-llm',
      title: 'Building an AI medical assistant',
      description: 'An AI system for assisted differential diagnosis based on the Uganda Clinical Guidelines.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/symtd.webp',
      category: 'AI in Healthcare',
      links: {
        article: 'https://fsdp-qdora-ucg.flexiblefunctions.com/'
      },
      tags: ['AI in Healthcare', 'Machine Learning', 'Medical-LLM']
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
      description: 'A regression model to predict the price of used cars based on various attributes.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/used_cars.jpg',
      category: 'Machine Learning',
      links: {
        article: 'https://www.kaggle.com/code/rubanzasilva/used-cars-eda-fastai-gradient-boosting',
        demo: 'https://www.kaggle.com/competitions/playground-series-s4e9/discussion/544513'
      },
      tags: ['Regression', 'FastAI', 'EDA', 'Automotive']
    },
    {
      id: 'mushroom-classification',
      title: 'Binary Prediction of Poisonous Mushrooms',
      description: 'A classification model to predict whether a mushroom is edible or poisonous from its physical characteristics.',
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
      description: 'A trained model deployed with a clean UI so stakeholders can see real results — not notebooks — and evaluate the work.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/antelopes.jpeg',
      category: 'Computer Vision',
      links: {
        article: 'https://rubanzasilva.github.io/antelope-classifier-documentation/',
        demo: 'https://huggingface.co/spaces/silvaKenpachi/antelopeClassifier?logs=build'
      },
      tags: ['Computer Vision', 'FastAI', 'Deployment', 'UI/UX']
    },
    {
      id: 'ff',
      title: 'Flexible Functions',
      description: 'An AI lab building practical AI use cases in the most cost-effective way possible.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/ff_logo.webp',
      category: 'Artificial Intelligence',
      links: {
        demo: 'https://www.flexiblefunctions.com/'
      },
      tags: ['AI', 'Machine Learning', 'Dataset']
    },
    {
      id: 'zicofe',
      title: 'Zigoti Coffee Website',
      description: 'A Ugandan coffee house covering the whole value chain — growing, buying, processing, roasting, and export of coffee beans.',
      image: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/ZICOFE.JPG',
      category: 'Web Development',
      links: {
        demo: 'https://www.zicofe.com/'
      },
      tags: ['React', 'E-commerce', 'Coffee', 'Uganda']
    },
    {
      id: 'aoc',
      title: 'Advent of Code',
      description: 'Solving programming puzzles and challenges from the Advent of Code series.',
      image: 'https://d322abd807wvow.cloudfront.net/suwik-photos/aoc-compressed.png',
      category: 'Coding Challenges',
      links: {
        code: 'https://share.solveit.pub/d/c466bf1dc4223a48266da51268442646'
      },
      tags: ['Python', 'Coding Challenges', 'Algorithms', 'Puzzles']
    }
  ];

  return (
    <section id="projects" className="pt-24 pb-24">
      <div className="w-full mx-auto max-md:px-4 md:max-lg:max-w-screen-md md:max-lg:px-6 lg:max-w-screen-2xl lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-heading font-[900] text-[48px] leading-[46px] text-ploy-text-primary mb-4">
            Selected work
          </h2>
          <p className="text-[18px] leading-[29px] text-ploy-text-secondary max-w-2xl mb-12">
            A selection of recent work across machine learning, data science, and web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
