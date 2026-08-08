export type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  linkedinUrl: string;
  tags: string[];
  body: string;
};

export type BlogFeed = {
  source: string;
  updatedAt: string;
  posts: BlogPost[];
};
