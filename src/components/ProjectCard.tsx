import Image from 'next/image';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-secondary/50 rounded-lg overflow-hidden card-hover border border-secondary/20">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary text-gray-300 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.links.article && (
            <a
              href={project.links.article}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <FileText size={16} />
              Read More
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-500 text-gray-400 hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;