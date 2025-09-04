import {
    RiFacebookBoxFill,
    RiGithubFill,
    RiLinkedinFill,
} from "@remixicon/react";
import { li } from "motion/react-client";

export const navItems = [
    {
        id: 1,
        label: "Home",
        href: "#home",
    },
    {
        id: 2,
        label: "About Me",
        href: "#about",
    },
    {
        id: 3,
        label: "Skills",
        href: "#skills",
    },
    {
        id: 4,
        label: "Projects",
        href: "#projects",
    },
    {
        id: 5,
        label: "Contact",
        href: "#contact",
    },
];

export const heroIcons = [
    {
        id: 1,
        icon: RiLinkedinFill,
    },
    {
        id: 2,
        icon: RiFacebookBoxFill,
    },
    {
        id: 3,
        icon: RiGithubFill,
    },
];

export const ProjectsItems = [
    {
        title: "Device",
        src: "/images/Device.png",
        text: "An E-commerce Mobile Application",
        link: "https://github.com/rom4nz/ecommerce_app.git",
        technologies: ["Flutter", "Firebase", "Stripe", ]
    },
    {
        title: "Sport Nest",
        src: "/images/SportNest.png",
        text: "All in one sport web application which facilitates users to gather socially within their area and many other sport facilities.",
        link: "https://github.com/rom4nz/pusl2021_cgp_official.git",
        technologies: ["React", "Node.js", "Express.js", "MongoDB"]
    },
    {
        title: "Bio Boost",
        src: "/images/portfolio-2.png",
        text: "An Agriculture Waste-to-Profit Mobile Application",
        link: "https://github.com/rom4nz/bio_boost.git",
        technologies: ["Flutter", "Firebase"]
    },
    {
        title: "ABC Cinema",
        src: "/images/ABC Cinema.png",
        text: "An Online ticket purchasing website for a Cinema Company",
        link: "https://github.com/rom4nz/ecommerce_app.git",
        technologies: ["Java", "JSP", "Servlets", "Tomcat"]
    },
    {
        title: "Class Pilot",
        src: "/images/portfolio-2.png",
        text: "Test",
        link: "https://github.com/rom4nz/Class-Pilot.git",
        technologies: ["C#", " .NET Framework", "SQL Server"]
    },
    {
        title: "incelto.co",
        src: "/images/portfolio-2.png",
        text: "An e-commerce website to provide products and services to construct a house",
        link: "https://github.com/rom4nz/incelto.co.git",
        technologies: ["HTML", "Bootstrap", "PHP", "MySQL"]
    },
];

export const contactItems = [
    {
        id: 1,
        label: "Email:",
        link: "kavishkaigalagama@gmail.com",
    },
    {
        id: 2,
        label: "Phone:",
        link: "070 253 6528",
    },
    {
        id: 3,
        label: "Location:",
        link: "Elpitiya, Sri Lanka",
    },
];