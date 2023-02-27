import React from "react";
import styles from "./IconList.module.scss";
import IconListItem from "../IconListItem/IconListItem";
import tsLogo from "../../assets/images/ts-logo.png";
import jsLogo from "../../assets/images/js-logo.png";
import rtlLogo from "../../assets/images/rtl-logo.png";
import jestLogo from "../../assets/images/jest-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";
import reduxLogo from "../../assets/images/redux-logo.png";
import scssLogo from "../../assets/images/scss-logo.png";

const IconList = () => {
  const skills = [
    {
      imgSrc: htmlLogo,
      text: "HTML",
    },
    { imgSrc: jsLogo, text: "JavaScript" },
    {
      icon: (
        <i
          className="fa-brands fa-git-alt"
          style={{ color: "rgb(241, 80, 47)" }}
        ></i>
      ),
      text: "git",
    },
    {
      imgSrc: cssLogo,
      text: "CSS",
    },
    { imgSrc: tsLogo, text: "TypeScript" },
    { imgSrc: jestLogo, text: "Jest" },
    { imgSrc: scssLogo, text: "SCSS" },

    {
      icon: (
        <i
          className="fa-brands fa-react"
          style={{ color: "rgb(97, 219, 251)" }}
        ></i>
      ),
      text: "React",
    },

    // { imgSrc: reduxLogo, text: "Redux" },

    { imgSrc: rtlLogo, text: "React Testing Library" },
  ];

  // DODAĆ SCSS!
  const listItems = skills.map(
    (item, index) =>
      (item.imgSrc || item.icon) && (
        <li key={index}>
          <IconListItem
            img={item.imgSrc && item.imgSrc}
            icon={item.icon && item.icon}
            text={item.text}
          />
        </li>
      )
  );
  return <ul className={styles.list}>{listItems}</ul>;
};

export default IconList;
