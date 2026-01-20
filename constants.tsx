
import React from 'react';
import { NavItem, Program, SchoolEvent } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'primary',
    title: 'Primary Education',
    description: 'Nurturing curiosity and fundamental skills in a supportive environment for grades 1-5.',
    icon: '🌱',
    image: 'https://picsum.photos/seed/school1/600/400'
  },
  {
    id: 'middle',
    title: 'Middle School',
    description: 'Fostering critical thinking and independence during pivotal developmental years for grades 6-8.',
    icon: '📚',
    image: 'https://picsum.photos/seed/school2/600/400'
  },
  {
    id: 'high',
    title: 'High School',
    description: 'Preparing students for global leadership and university excellence through rigorous AP/IB tracks.',
    icon: '🎓',
    image: 'https://picsum.photos/seed/school3/600/400'
  }
];

export const EVENTS: SchoolEvent[] = [
  {
    id: '1',
    title: 'Annual Science Fair',
    date: 'Oct 15, 2024',
    category: 'Academic',
    description: 'Our students showcase innovative projects spanning robotics to biology.'
  },
  {
    id: '2',
    title: 'Inter-School Sports Meet',
    date: 'Nov 02, 2024',
    category: 'Sports',
    description: 'Competitive track and field events with neighboring academies.'
  },
  {
    id: '3',
    title: 'Winter Gala Concert',
    date: 'Dec 12, 2024',
    category: 'Arts',
    description: 'A magical evening featuring our symphony orchestra and choir.'
  }
];
