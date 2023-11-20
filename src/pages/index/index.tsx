import React from "react";
import "./index-style.css";
import { Button } from "../../widgets/button/button";
import { Link } from "react-router-dom";

type sectionsMenuType = {
  section: string;
  number: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  link: string;
}[];

export const Index = () => {
  const sectionsMenu: sectionsMenuType = [
    {
      section: "basic",
      number: "01",
      title: "Basics Math",
      image: {
        src: "./images/images-math.svg",
        alt: "Basic math image",
      },
      description:
        "Calculator for Basic Math operations, you can enter to perform addition, subtraction, multiplication and division.",
      link: "/math",
    },
    {
      section: "geometry",
      number: "02",
      title: "Geometry",
      image: {
        src: "./images/images-geometry.svg",
        alt: "Geometry image",
      },
      description:
        "Calculator for Geometry operations, you can enter to perform area, perimeter and volume operations.",
      link: "/geometry",
    },
    {
      section: "algebra",
      number: "03",
      title: "Algebra",
      image: {
        src: "./images/images-algebra.svg",
        alt: "Algebra image",
      },
      description:
        "Calculator for Algebra operations, you can enter to perform operations...",
      link: "/algebra",
    },
    {
      section: "statistic",
      number: "04",
      title: "Statistic",
      image: {
        src: "./images/images-statistic.svg",
        alt: "Statistic image",
      },
      description:
        "Calculator for statistic operations, you can enter to perform operations...",
      link: "/statistic",
    },
    {
      section: "metrics",
      number: "05",
      title: "Metrics",
      image: {
        src: "./images/images-metrics.svg",
        alt: "Metrics image",
      },
      description:
        "Calculator for metrics operations, you can enter to perform operations...",
      link: "/metrics",
    },
  ];

  return (
    <div className="index">
      {sectionsMenu.map((section, index) => {
        return (
          <div className={`section ${section.section}`} key={section.section}>
            <h1 className="number">{section.number}</h1>
            <h3 className="title">{section.title}</h3>
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="descriptionImage"
            />
            <p className="text">{section.description}</p>
            <Link to={section.link}>
              <Button text="Calculate" section={section.number} width="260px" size="large"/>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
