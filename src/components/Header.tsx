"use client";

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

function Header() {
  return (
    <>
      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo2.png"
                      alt="Thunderbolts FC Logo"
                      width={150}
                      height={65}
                      style={{ width: "auto", height: "65px" }}
                      loading="eager"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Thunderbolts Football Club (TFC) - A dynamic football club
                dedicated to developing talent, achieving competitive
                excellence, and inspiring the next generation of footballers in
                Nepal.
              </p>
              <div className="mobile-menu fix mb-3"></div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Dhapakhel, Lalitpur, Nepal
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@thunderbolts.com.np">
                        <span className="mailto:info@thunderbolts.com.np">
                          info@thunderbolts.com.np
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mon-Fri, 09am - 05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+9779801973975">+977 980 197 3975</a>
                    </div>
                  </li>
                </ul>
                <Link href="/academy" className="theme-btn mt-4 rounded-pill">
                  JOIN ACADEMY <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* Header Section Start */}
      <header id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/" className="logo">
                <Image
                  src="/assets/img/logo2.png"
                  alt="Thunderbolts FC Logo"
                  width={150}
                  height={65}
                  style={{ width: "auto", height: "65px" }}
                  priority
                  loading="eager"
                />
              </Link>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link href="/"> Home </Link>
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <Link href="/" className="border-none">
                            {" "}
                            Home{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="/about"> About Us </Link>
                        </li>

                        <li>
                          <Link href="/academy"> Academy </Link>
                        </li>
                        <li>
                          <Link href="/event"> Events </Link>

                          <ul className="submenu">
                            <li>
                              <Link href="/tournaments"> Tournaments </Link>
                            </li>
                            <li>
                              <Link href="/workshops"> Workshops </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/team">Teams</Link>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/news"> Blog </Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center rounded-pill">
                <Link
                  href="/academy"
                  className="theme-btn d-none d-xl-block rounded-pill"
                >
                  JOIN ACADEMY <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
                <div className="header__hamburger d-xl-block my-auto">
                  <div className="sidebar__toggle">
                    <div className="header-bar">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
