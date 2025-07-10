export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  links: {
    demo?: string;
    code?: string;
    article?: string;
  };
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}