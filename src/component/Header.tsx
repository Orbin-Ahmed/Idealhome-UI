"use client";
import { useContext, useEffect, useReducer, useState } from "react";
import Image from "next/image";
import IMAGES from "./theme";
import Link from "next/link";
import { Context, MenuList, MenuList2 } from "./ThemContaxt";
import { usePathname } from "next/navigation";

const reducer = (previousState: Element, updatedState: any) => {
  return {
    ...previousState,
    ...updatedState,
  };
};

const initialState = {
  activeSubmenu: "",
};

const Header = () => {
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [subscribeModel, setSubscribeModel] = useState<boolean>(false);
  const [mobileSidebar, setMobileSidebar] = useState<boolean>(false);
  const [headerfix, setHeaderfix] = useState<number>(0);
  // const location = useLocation();
  const [menuactive, setMenuactive] = useState("");

  const [state, setState] = useReducer(reducer, initialState);
  const menuHandler = (status: string) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  const { setleftSidebar } = useContext(Context);

  const FixesHeader = () => {
    setHeaderfix(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", FixesHeader);
    return () => {
      window.removeEventListener("scroll", FixesHeader);
    };
  }, [headerfix]);

  //for active menu
  const pathName = usePathname();
  useEffect(() => {
    MenuList.map((item) => {
      item.child?.map((data) => {
        if (data.to === pathName) {
          setMenuactive(item.menu);
        }
      });
    });
    MenuList2.map((item) => {
      item.child?.map((data) => {
        if (data?.to === pathName) {
          setMenuactive(item.menu);
        }
      });
    });
  }, [pathName]);
  return (
    <>
      <header className="site-header mo-left header center style-1 header-transparent">
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerfix > 50 ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix ">
            <div className="container-fluid clearfix">
              <div className="logo-header mostion logo-dark logo-resize mt-3">
                <Link href="#" scroll={false}>
                  <Image
                    src={IMAGES.logo4white}
                    className="logo-main logo-dark"
                    alt=""
                    width={500}
                    height={45}
                  />
                  <Image
                    src={IMAGES.logo4}
                    className="logo-show-fix logo-resize"
                    alt=""
                    width={500}
                    height={45}
                  />
                </Link>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileSidebar(!mobileSidebar);
                }}
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  mobileSidebar ? "open" : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div className="sidebar-menu">
                <div
                  className="menu-btn navicon"
                  onClick={() => setleftSidebar(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse justify-content-center ${
                  mobileSidebar ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header logo-dark">
                  <Link href="/">
                    <Image src={IMAGES.logo} alt="" />
                  </Link>
                </div>
                <div>
                  {/* Left Menu  */}
                  <ul className="nav navbar-nav navbar-left">
                    {MenuList.map((item, ind) => {
                      const { menu, child, className, to } = item;
                      const isActive = menuactive === menu;
                      const isOpen = state.activeSubmenu === menu;

                      if (className === "menu-down") {
                        return (
                          <li
                            className={`sub-menu-down ${
                              isActive ? "active" : ""
                            } ${isOpen ? "open" : ""}`}
                            key={ind}
                          >
                            <Link
                              href="#"
                              scroll={false}
                              onClick={(e) => {
                                e.preventDefault();
                                menuHandler(menu);
                              }}
                            >
                              {menu}
                            </Link>
                            <ul className="sub-menu">
                              {child?.map((data, index) => (
                                <li key={index}>
                                  <Link href={data.to}>{data.children}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      } else {
                        return (
                          <li key={ind}>
                            <Link href={to || "#"}>{menu}</Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                  {/* Left Menu  end */}
                  {/* Right Menu  */}
                  <ul className="nav navbar-nav navbar navbar-right">
                    {MenuList2.map((item, ind) => {
                      const { menu, child, className } = item;
                      if (className === "menu-down") {
                        return (
                          <li
                            className={`sub-menu-down ${
                              menuactive == item.menu ? "active" : ""
                            }
                                                    ${
                                                      state.activeSubmenu ===
                                                      item.menu
                                                        ? "open"
                                                        : ""
                                                    }`}
                            key={ind}
                          >
                            <Link
                              href="#"
                              scroll={false}
                              onClick={() => {
                                menuHandler(item.menu);
                              }}
                            >
                              {menu}
                            </Link>
                            <ul className="sub-menu">
                              {child?.map((data, index) => (
                                <li key={index}>
                                  <Link href={data.to}>{data.children}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
                {/* Right Menu end*/}
                <div className="dz-social-icon">
                  <ul>
                    <li>
                      <Link className="fab fa-facebook-f" href="#"></Link>
                    </li>
                    <li>
                      <Link className="fab fa-twitter" href="#"></Link>
                    </li>
                    <li>
                      <Link className="fab fa-linkedin-in" href="#"></Link>
                    </li>
                    <li>
                      <Link className="fab fa-instagram" href="#"></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={` fade ${subscribeModel ? "modal-backdrop show" : ""}`}
      ></div>
    </>
  );
};

export default Header;
