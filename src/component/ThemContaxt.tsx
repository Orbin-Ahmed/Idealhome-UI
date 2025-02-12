"use client";

import AboutUs from "@/element/AboutUs";
import { useSearchParams } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  Suspense,
  createContext,
  useEffect,
  useState,
} from "react";

interface AppContextValue {
  //   show: boolean;
  //   setShow: Dispatch<SetStateAction<boolean>>;
  //   modabox: boolean;
  //   setModabox: Dispatch<SetStateAction<boolean>>;
  //   searchbox: boolean;
  //   setSearchbox: Dispatch<SetStateAction<boolean>>;
  //   sidebar: boolean;
  //   setSidebar: Dispatch<SetStateAction<boolean>>;
  //   switcheData: object;
  //   setSwitcheData: Dispatch<SetStateAction<object>>;
  //   headerLogo: string;
  leftSidebar: boolean;
  setleftSidebar: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const defaultState: AppContextValue = {
  // show: false,
  // setShow: () => {},
  // modabox: false,
  // setModabox: () => {},
  // searchbox: false,
  // setSearchbox: () => {},
  // sidebar: false,
  // setSidebar: () => {},
  // switcheData: {},
  // setSwitcheData: () => {},
  // headerLogo: "",
  leftSidebar: false,
  setleftSidebar: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {},
};

export const Context = createContext(defaultState);

interface AppContextProvider {
  children: ReactNode;
}

export const ThemContaxt: React.FC<AppContextProvider> = ({ children }) => {
  const [leftSidebar, setleftSidebar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const darkMode = document.getElementById('body');
  //     if (isDarkMode) {
  //         darkMode?.classList.add('layout-dark');
  //         darkMode?.classList.remove('layout-light');
  //     } else {
  //       darkMode?.classList.add('layout-light');
  //       darkMode?.classList.remove('layout-dark');
  //     }
  // }, [isDarkMode]);

  //   useEffect(() => {
  //     const skin = document.body.getAttribute("data-color");
  //     switch (skin) {
  //       case "color_1":
  //         setHeaderLogo(IMAGES.logo);
  //         break;
  //       case "color_2":
  //         setHeaderLogo(IMAGES.logo3);
  //         break;
  //       case "color_3":
  //         setHeaderLogo(IMAGES.logo4);
  //         break;
  //       case "color_4":
  //         setHeaderLogo(IMAGES.logo5);
  //         break;
  //       case "color_5":
  //         setHeaderLogo(IMAGES.logo5);
  //         break;
  //       case "color_6":
  //         setHeaderLogo(IMAGES.logo7);
  //         break;
  //       case "color_7":
  //         setHeaderLogo(IMAGES.logo8);
  //         break;
  //       case "color_8":
  //         setHeaderLogo(IMAGES.logo6);
  //         break;
  //       default:
  //         break;
  //     }
  //   }, [headerLogo]);

  //page path in welcome page

  // "default page path"?theme=light
  // ?theme=light
  //?theme=dark

  // const searchParams = useSearchParams()
  // const search = searchParams.get('theme')
  // console.log(search);

  useEffect(() => {
    let searchParams = window.location.search;
    // console.log(searchParams);
    if (searchParams) {
      localStorage.setItem("Mode", searchParams);
    }
    const TemMode = localStorage.getItem("Mode");
    if (TemMode) {
      switch (TemMode) {
        case "?light":
          document.body.setAttribute("class", "layout-light");
          break;
        case "?dark":
          document.body.setAttribute("class", "layout-dark");
          break;
        default:
          break;
      }
    }
  }, []);

  const contextValue: AppContextValue = {
    // show,
    // setShow,
    // modabox,
    // setModabox,
    // searchbox,
    // setSearchbox,
    // sidebar,
    // setSidebar,
    // switcheData,
    // setSwitcheData,
    // headerLogo,
    leftSidebar,
    setleftSidebar,
    isDarkMode,
    setIsDarkMode,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const MenuList = [
  {
    menu: "Home",
    to: "/",
  },
  {
    menu: "Team",
    className: "menu-down",
    child: [
      { children: "About Us", to: "/about-us" },
      { children: "Team", to: "/team" },
    ],
  },
  {
    menu: "Portfolio",
    className: "menu-down",
    child: [
      { children: "Portfolio", to: "/portfolio" },
      { children: "Portfolio Details", to: "/portfolio-details" },
    ],
  },
];
export const MenuList2 = [
  {
    menu: "Products",
    className: "menu-down",
    child: [
      { children: "Schüco uPVC", to: "/services" },
      { children: "Bespoke Joinery", to: "/services-details" },
    ],
  },

  {
    menu: "Blog",
    to: "/blog-details",
  },
  { menu: "Contact Us", to: "/contact-us" },
];
