import codLogo1 from './COD-01.png';
import codlogo2 from './COD_logo_2.png';
import codround from './COD_2.png';
import dee1 from './dee1.png';
import ai from './png/adobeAI.png';
import xd from './png/adobeXD.png';
import canva from './png/canva.png';
import css from './png/css.png';
import docker from './png/docker.png';
import expressjs from './png/expressjs.png';
import figma from './png/figma.png';
import git from './png/git.png';
import github from './png/github.png';
import graphql from './png/graphql.png';
import html from './png/html.png';
import js from './png/js.png';
import jwt from './png/jwt.png';
import mongo from './png/mongo.png';
import nodejs from './png/nodejs.png';
import npm from './png/npm.png';
import postgresql from './png/postgresql.png';
import ps from './png/ps.png';
import react from './png/react.png';
import redis from './png/redis.png';
import sass from './png/sass.png';
import tailwind from './png/tailwind.png';
import ts from './png/ts.png';

export const assets = {
    codLogo1,
    codlogo2,
    codround,
    dee1,
    ai, xd, canva, css, docker, expressjs, figma, git, github, graphql, html, js, jwt, mongo, nodejs, npm, postgresql, ps, react, redis, sass, tailwind, ts
};

export const project = [
  {
    "title": "Netflix Clone",
    "type": "development",
    "subType": "frontend",
    "description": "A streaming platform UI with Firebase auth and movie categories from TMDB.",
    "stack": ["React", "Firebase", "TMDB API", "Tailwind CSS"],
    "image": "/images/netflix-clone.jpg",
    "liveUrl": "https://netflix-clone.vercel.app",
    "repoUrl": "https://github.com/CODonnie/netflix-clone",
    "tags": ["frontend", "auth", "api"],
    "isFeatured": true,
    "status": "completed"
  },
  {
    "title": "Jabb Job Board API",
    "type": "development",
    "subType": "backend",
    "description": "A job posting and management API with tag filters and RBAC.",
    "stack": ["TypeScript", "Express", "MongoDB", "JWT"],
    "image": "/images/jabb-api.jpg",
    "liveUrl": "",
    "repoUrl": "https://github.com/CODonnie/jabb-api",
    "tags": ["backend", "RBAC", "jobs"],
    "isFeatured": false,
    "status": "completed"
  },
  {
    "title": "CGPA Calculator App",
    "type": "development",
    "subType": "frontend",
    "description": "A responsive tool to compute university GPAs with user-friendly inputs.",
    "stack": ["React", "JavaScript", "Tailwind CSS"],
    "image": "/images/cgpa-calculator.png",
    "liveUrl": "",
    "repoUrl": "https://github.com/CODonnie/cgpa-calculator",
    "tags": ["frontend", "calculator", "education"],
    "isFeatured": false,
    "status": "completed"
  },
  {
    "title": "WeTransfer Clone API",
    "type": "development",
    "subType": "backend",
    "description": "File upload and sharing API with link generation, versioning, and analytics.",
    "stack": ["Express", "TypeScript", "MongoDB"],
    "image": "/images/wetransfer-clone.png",
    "liveUrl": "",
    "repoUrl": "https://github.com/CODonnie/wetransfer-api",
    "tags": ["file-sharing", "backend", "REST"],
    "isFeatured": true,
    "status": "in-progress"
  },
  {
    "title": "Portfolio Website",
    "type": "development",
    "subType": "full-stack",
    "description": "A personal portfolio with admin dashboard and dynamic project management.",
    "stack": ["React", "Express", "MongoDB", "TypeScript"],
    "image": "/images/portfolio-site.png",
    "liveUrl": "https://donald.vercel.app",
    "repoUrl": "",
    "tags": ["full-stack", "personal-site", "admin"],
    "isFeatured": true,
    "status": "in-progress"
  },
  {
    "title": "Budget Tracker API",
    "type": "development",
    "subType": "backend",
    "description": "RESTful API to manage expenses, income, and financial goals with user auth.",
    "stack": ["Node.js", "Express", "MongoDB"],
    "image": "/images/budget-api.png",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["finance", "API", "backend"],
    "isFeatured": false,
    "status": "planned"
  },
  {
    "title": "SME Flyer Design",
    "type": "design",
    "subType": "graphics design",
    "description": "A vibrant flyer promoting African SMEs and economic empowerment.",
    "stack": ["Photoshop", "Illustrator"],
    "image": "/images/sme-flyer.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["branding", "flyer", "print"],
    "isFeatured": true,
    "status": "completed"
  },
  {
    "title": "E-Commerce API",
    "type": "development",
    "subType": "full-stack",
    "description": "Full e-commerce backend with product management, cart, orders, and auth.",
    "stack": ["Express", "TypeScript", "MongoDB"],
    "image": "/images/ecommerce-api.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["ecommerce", "full-stack", "auth"],
    "isFeatured": false,
    "status": "planned"
  },
  {
    "title": "Brand Identity Design",
    "type": "design",
    "subType": "graphics design",
    "description": "A logo and branding system for a tech startup.",
    "stack": ["Illustrator", "Photoshop"],
    "image": "/images/brand-identity.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["branding", "logo", "identity"],
    "isFeatured": false,
    "status": "completed"
  },
  {
    "title": "URL Shortener API",
    "type": "development",
    "subType": "backend",
    "description": "Backend service to shorten URLs with tracking and user auth.",
    "stack": ["TypeScript", "Express", "MongoDB"],
    "image": "/images/url-shortener.jpg",
    "liveUrl": "",
    "repoUrl": "https://github.com/CODonnie/url-shortener-api",
    "tags": ["shortener", "backend", "tracking"],
    "isFeatured": false,
    "status": "completed"
  },
  {
    "title": "Onboarding UI Design",
    "type": "design",
    "subType": "product design",
    "description": "Onboarding screens for a mobile fintech app with a clean, modern interface.",
    "stack": ["Figma"],
    "image": "/images/onboarding-ui.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["ui", "mobile", "fintech"],
    "isFeatured": true,
    "status": "completed"
  },
  {
    "title": "Slack-Style Chat API",
    "type": "development",
    "subType": "backend",
    "description": "Role-based real-time chat API with message history and user management.",
    "stack": ["Express", "TypeScript", "Socket.IO"],
    "image": "/images/chat-api.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["chat", "real-time", "RBAC"],
    "isFeatured": false,
    "status": "planned"
  },
  {
    "title": "Hero Section Product Mockup",
    "type": "design",
    "subType": "product design",
    "description": "High-converting hero section mockup for a SaaS landing page.",
    "stack": ["Figma", "Photoshop"],
    "image": "/images/hero-mockup.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["ui", "web", "saas"],
    "isFeatured": false,
    "status": "completed"
  },
  {
    "title": "Admin Dashboard UI",
    "type": "design",
    "subType": "product design",
    "description": "A dashboard interface design for managing job posts and user permissions.",
    "stack": ["Figma"],
    "image": "/images/admin-dashboard-ui.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["ui", "admin", "dashboard"],
    "isFeatured": false,
    "status": "in-progress"
  },
  {
    "title": "Social Campaign Poster",
    "type": "design",
    "subType": "graphics design",
    "description": "Poster design for a social impact campaign promoting youth empowerment.",
    "stack": ["Photoshop", "Canva"],
    "image": "/images/social-poster.jpg",
    "liveUrl": "",
    "repoUrl": "",
    "tags": ["poster", "campaign", "print"],
    "isFeatured": false,
    "status": "completed"
  }
]


