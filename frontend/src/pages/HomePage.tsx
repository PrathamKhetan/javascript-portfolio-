import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { Hero } from '../components/home/Hero';
import { AboutStatement } from '../components/home/AboutStatement';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { GiantCTA } from '../components/home/GiantCTA';

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="w-full">
        <Hero />
        <AboutStatement />
        <FeaturedProjects />
        <GiantCTA />
      </div>
    </PageTransition>
  );
};
