import React from "react";
import AUSLogo from "@/public/ausLogo.png";
import InlogicLogo from "@/public/InlogicLogo.png";
import DigitalLogo from "@/public/DigitalLogo.png";
import SpotiiLogo from "@/public/SpotiiLogo.png";
import ArabUnityLogo from "@/public/ArabUnityLogo.png";
import happyRoutesPic from "@/public/happyRoutes.png";
import weatherWidgetPic from "@/public/weatherWidget.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT tech support",
    location: "Sharjah, UAE",
    nameOfCompany: "American University of Sharjah",
    description:
      "Worked as part of the AUS IT tech support for approximately 2.5 years until my graduation in May 2021. Responsibilities include troubleshooting network, software, and hardware issues in classrooms, auditoriums and faculty offices and more.",
    imageUrl: AUSLogo,
    date: "Jan 2019 - May 2021",
  },
  {
    title: "iOS Developer Intern",
    location: "Dubai, UAE",
    nameOfCompany: "Inlogic IT Solutions",
    description:
      "Worked as an intern in as a part of a winter internship lasting for a month. Responsibilities include creating an HR system for easier access of employee details using SwiftUI",
    imageUrl: InlogicLogo,
    date: "Dec 2019 - Jan 2020",
  },
  {
    title: "Java Developer Intern",
    location: "Dubai, UAE",
    nameOfCompany: "UAE Digital Labs",
    description:
      "Worked as an intern for a month. Responsibilities include working on making Liferay projects using DXP and Spring boot.",
    imageUrl: DigitalLogo,
    date: "Sep 2021 - Oct 2021",
  },
  {
    title: "Integrations and Operations Associate",
    location: "Dubai, UAE",
    nameOfCompany: "Spotii",
    description:
      "Worked in the Integrations and Operations team at UAE's top BNPL companies, Spotii. Responsibilities include helping merchants/clients with the integration process regardless of whatever E-commerce web service the client used and more.",
    imageUrl: SpotiiLogo,
    date: "Sep 2022 - Mar 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Happy Routes",
    description:
      "My final year project at AUS as an undergraduate. Aimed for tourists, the app aims to deliver a 'happy route' based on the user's metric which they describe when they register. Metrics range from heritage, nature and urban views (skyscrapers etc).",
    role: "Part of the routing algorithm team and API integration",
      tags: ["Swift", "Python", "cosmoDB", "Data Cleaning", "Geolocation"],
    imageUrl: happyRoutesPic,
  },
  {
    title: "Weather Widget",
    description:
      "Created a weather widget which takes in a user location and sends relevant weather data such as temperature, humidity and the type of day (cloudy, clear etc).",
    tags: ["React", "HTML" , "CSS" ,"WeatherAPI", "ContextAPI", "Geocoding"],
    imageUrl: weatherWidgetPic,
  },
] as const;
export const educationData = [
    {
      nameOfSchool: "Arab Unity School",
      typeOfDegree: "Primary to High School",
      location: "Dubai, UAE",
      description: "A-levels in Physics, Chemistry and Math (2013-2015). O-levels in Physics, Chemistry, Environmental Management, Math, English, Biology, Information and Technology, and Urdu (2012-2013).",
      imageUrl: ArabUnityLogo,
      date: "Sep 2002 - June 2015"
    },
    {
        nameOfSchool: "American University of Sharjah",
        typeOfDegree: "Bachelors of Science",
        location: "Sharjah, UAE",
        description: "Major: Computer Engineering, Minor: Computer Science",
        imageUrl: AUSLogo,
        date: "Jan 2017 - June 2021"
    },
  ] as const;

export const skillsData = [
  "Java",
  "Hibernate",
  "Springboot",
  "Android Studio",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "NoSQL",
  "MySQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;