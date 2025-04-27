export interface ITalk {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
  poster: string;
  slides: string;
  recording?: string;
  keynote?: string;
}

export interface IProject {
  title: string;
  description: string;
  features: string[];
  reasons: string[];
  techStack: string[];
  link: string;
  liveLink?: string;
}

export interface ISolution {
  id: number;
  shortTitle: string;
  title: string;
  description: string;
  features: string[];
  reasons: string[];
  solution: string[];
  techStack: string[];
  link: string;
  liveLink: string;
}
