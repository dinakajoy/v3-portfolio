export interface IGuide {
  slug: string;
  metadata: {
    title: string;
    description: string;
    date: string;
    tags: string[];
  };
}

export interface GuideMetadata {
  [key: string]: string | string[];
}

export interface GuideProps {
  metadata: GuideMetadata;
  content: string;
}

export interface Params {
  params: { slug: string };
}

export interface Heading {
  id: string;
  text: string;
  level: string;
}
