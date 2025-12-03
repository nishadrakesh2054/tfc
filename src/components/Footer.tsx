import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="footer-section section-padding pb-0 bg-cover"
      style={{ backgroundImage: "url('/assets/img/home-1/footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row justify-content-between">
            <div
              className="col-xl-4 col-lg-8 col-md-8 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="footer-widget-items">
                <div className="widget-head">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo3.png"
                      alt="img"
                      width={150}
                      height={80}
                      style={{ width: "auto", height: "80px" }}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p className="mb-3">
                    More than a club - a movement for excellence.
                  </p>
                  <p>
                    Thunderbolts Football Club (TFC) stands for power, ambition,
                    and competitive excellence. We&apos;re dedicated to
                    developing talent, achieving success at the highest levels,
                    and inspiring the next generation of footballers.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-5 col-lg-4 col-md-4 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="footer-widget-items">
                <div className="widget-head">
                  <h3>Our Club</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/about">Mission & Vision</Link>
                  </li>
                  <li>
                    <Link href="/about">Membership</Link>
                  </li>
                  <li>
                    <Link href="/about">Sponsorships/Partner</Link>
                  </li>
                  <li>
                    <Link href="/team">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="footer-widget-items">
                <div className="widget-head">
                  <h3>Location</h3>
                </div>
                <ul className="footer-contact-list">
                  <li>Dhapakhel, Lalitpur, Nepal</li>
                  <li>
                    <a href="tel:+9779801973975">+977 980 197 3975</a>
                  </li>
                  <li>
                    <a href="mailto:info@thunderbolts.com.np">
                      info@thunderbolts.com.np
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="footer-widget-items">
                <div className="widget-head">
                  <h3>Football Clubs</h3>
                </div>
                <div className="app-items">
                  <div className="row g-2" style={{ maxWidth: "200px" }}>
                    <div className="col-6">
                      <Image
                        src="/assets/img/tfclogo/noc.png"
                        alt="Football Club 1"
                        width={80}
                        height={80}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "60px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="col-6">
                      <Image
                        src="/assets/img/tfclogo/tbc.png"
                        alt="Football Club 2"
                        width={80}
                        height={80}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "60px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="col-6">
                      <Image
                        src="/assets/img/tfclogo/pinklogo.png"
                        alt="Football Club 3"
                        width={80}
                        height={80}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "60px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="col-6">
                      <Image
                        src="/assets/img/logo3.png"
                        alt="Football Club 4"
                        width={80}
                        height={80}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "60px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="wow fadeInLeft" data-wow-delay=".3s">
            © 2025<b> Thunderbolts Football Club (TFC)</b>. All Rights Reserved.
          </p>
          <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
            <li>
              <Link href="/contact"> Cookies </Link>
            </li>
            <li>
              <Link href="/contact"> Privacy </Link>
            </li>
            <li>
              <Link href="/contact"> Terms </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
