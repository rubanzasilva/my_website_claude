import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-2xl border border-ploy-border-primary overflow-hidden flex flex-col">
      <div className="relative h-52 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="font-eyebrow bg-ploy-accent-secondary/80 text-ploy-text-on-accent-secondary px-3 py-1.5 rounded-full text-[11px] leading-[17px] uppercase tracking-wider font-medium">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-[700] text-[20px] leading-[28px] text-ploy-text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-[16px] leading-[26px] text-ploy-text-secondary mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="font-eyebrow text-[11px] leading-[17px] uppercase tracking-wider text-ploy-text-secondary bg-ploy-neutral-primary-s3 rounded-full px-3 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.links.article && (
            <a
              href={project.links.article}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${project.title}`}
              className="inline-flex items-center gap-1.5 text-[14px] leading-[20px] font-[500] text-ploy-text-primary hover:opacity-70 transition-opacity"
            >
              Read more
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] leading-[20px] font-[500] border border-ploy-border-primary rounded-full px-4 py-1.5 text-ploy-text-primary hover:bg-ploy-neutral-primary-s2 transition-colors"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] leading-[20px] font-[500] border border-ploy-border-primary rounded-full px-4 py-1.5 text-ploy-text-primary hover:bg-ploy-neutral-primary-s2 transition-colors"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
