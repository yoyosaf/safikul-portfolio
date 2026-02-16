
import React from 'react';
import { PortfolioItem, Service } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'The Urban Explorer - Tokyo Vlog',
    category: 'Vlog',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aspectRatio: '16:9'
  },
  {
    id: '2',
    title: 'Minimalist Branding Teaser',
    category: 'Commercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aspectRatio: '9:16'
  },
  {
    id: '3',
    title: 'Summer Music Festival 2025',
    category: 'Event',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aspectRatio: '1:1'
  },
  {
    id: '4',
    title: 'Corporate Identity - Vision 2030',
    category: 'Commercial',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aspectRatio: '16:9'
  },
  {
    id: '5',
    title: 'Cinematic Wedding Highlights',
    category: 'Highlight',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aspectRatio: '9:16'
  },
  {
    id: '6',
    title: 'Tech Review Montage',
    category: 'Vlog',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    aspectRatio: '16:9'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Fluid Storytelling & Cuts',
    description: 'Transforming raw footage into seamless narratives that grip your audience from the first frame.',
    icon: '✂️'
  },
  {
    title: 'Professional Color Grading',
    description: 'Applying cinematic LUTs and custom grading to give your content a professional, high-end look.',
    icon: '🎨'
  },
  {
    title: 'Motion Graphics',
    description: 'Engaging After Effects animations that add dynamic energy and clarity to your visuals.',
    icon: '✨'
  },
  {
    title: 'Brand Intros/Outros',
    description: 'Signature openings and endings that reinforce your brand identity across all platforms.',
    icon: '🎬'
  }
];
