
export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Vlog' | 'Commercial' | 'Event' | 'Highlight';
  thumbnailUrl: string;
  videoUrl: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
