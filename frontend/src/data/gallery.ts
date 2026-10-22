import { GalleryPhoto } from '../types';

export const initialGalleryPhotos: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "National Hackathon 1st Place Podium Ceremony",
    category: "Hackathon",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[4/3]",
    description: "Accepting the 1st Place Trophy at the National Smart India Hackathon after 36 hours of rigorous product architecture and pitch defense."
  },
  {
    id: "gal-2",
    title: "Delivering Keynote at GDSC Tech Summit",
    category: "Speaking",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[3/4]",
    description: "Keynote presentation on Modern Web Systems & Scalable Microservices to an auditorium filled with 200+ engineering enthusiasts."
  },
  {
    id: "gal-3",
    title: "Late Night Team Sprint & Architecture Review",
    category: "Engineering",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[16/9]",
    description: "Collaborative whiteboard brainstorm dissecting Redis caching invalidation strategies and WebSocket ring buffer topologies."
  },
  {
    id: "gal-4",
    title: "Dean's Honor Roll Academic Felicitation",
    category: "Academic",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[4/3]",
    description: "Honored on the University Dean's List for consistent academic excellence and semester rank in the top 5% of the computer science department."
  },
  {
    id: "gal-5",
    title: "Hands-on TypeScript & React 19 Workshop",
    category: "Mentorship",
    date: "August 2023",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[3/4]",
    description: "Mentoring junior undergraduate students through component lifecycle hooks, state management, and type-safe API consumption."
  },
  {
    id: "gal-6",
    title: "Engineering Hackathon Workstation Setup",
    category: "Behind the Scenes",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "aspect-[16/9]",
    description: "The multi-monitor control desk where our team stress-tested transaction concurrency and deployed our live demo cluster."
  }
];
