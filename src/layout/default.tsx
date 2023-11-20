import { Link, useLocation } from "react-router-dom";
import "./default-style.css";

type LayoutProps = {
  children: React.ReactNode;
};

type imageType = {
  src: string;
  alt: string;
  link: string;
};

export const DefaultLayout = (props: LayoutProps) => {
  const { children } = props;
  const location = useLocation();


  const iconsMenu: imageType[] = [
    {
      src: "./images/icon-home.svg",
      alt: "Home",
      link: "/",
    },
    {
      src: "./images/icon-math.svg",
      alt: "Math",
      link: "/math",
    },
    {
      src: "./images/icon-geometry.svg",
      alt: "Geometry",
      link: "/geometry",
    },
    {
      src: "./images/icon-algebra.svg",
      alt: "Algebra",
      link: "/algebra",
    },
    {
      src: "./images/icon-statistic.svg",
      alt: "Statistic",
      link: "/statistic",
    },
    {
      src: "./images/icon-metrics.svg",
      alt: "Metrics",
      link: "/metrics",
    },
  ];


  return (
    <div className="container">
      <div className="menu">
        <img src="./images/Logo.svg" alt="logo pagina" className="logo" />
        <div className="menuIcons">
          {iconsMenu.map((icon) => {
            return (
                <Link to={icon.link || ""} key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} className={`icon ${ location.pathname === icon.link && "active"}`} />
                </Link>
            );
          })}
        </div>
      </div>
      <div className="sections">{children}</div>
    </div>
  );
};
