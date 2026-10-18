export type Category = 
  | 'Architecture & Design'
  | 'Technology & Society'
  | 'Cultural Theory'
  | 'Fiction & Craft'
  | 'Natural Sciences';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  deck: string;
  content: string;
  coverImage: string;
  coverCaption?: string;
  category: Category;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTimeMinutes: number;
  claps: number;
  isLeadStory?: boolean;
  isFeatured?: boolean;
  curatorNote?: string;
  tableOfContents?: TableOfContentItem[];
}

export interface Comment {
  id: string;
  articleId: string;
  authorName: string;
  content: string;
  createdAt: string;
  likes: number;
}

export type ReadingTheme = 'archival' | 'gallery' | 'ink';
export type ReadingFontSize = 'normal' | 'large' | 'editorial';
export type ReadingFontFamily = 'serif' | 'sans';
