import Image from "next/image";
import { memo } from "react";

function SponsorSection() {
  return (
    <section
      className="sponsor-section section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/img/home-1/sponsor-bg.jpg')" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">Events & Clubs</h6>
          <h2 className="hero_title tv_hero_title hero_title_1">
            Official Events & <span>valued</span> Clubs
          </h2>
        </div>
        <div className="sponsor-wrapper-21">
          <div
            className="table-responsive"
            style={{ overflowX: "hidden", width: "100%" }}
          >
            <div
              className="sponsor-wrap"
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <div className="sponsor-box-items">
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/pinklogo.png"
                    alt="Pink Logo Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/tbc.png"
                    alt="TBC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/noc.png"
                    alt="NOC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/logo3.png"
                    alt="TFC Logo"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
              </div>
              <div className="sponsor-box-items">
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/logo3.png"
                    alt="TFC Logo"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/pinklogo.png"
                    alt="Pink Logo Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/tbc.png"
                    alt="TBC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/noc.png"
                    alt="NOC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/logo3.png"
                    alt="TFC Logo"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="sponsor-box-items">
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/pinklogo.png"
                    alt="Pink Logo Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/tbc.png"
                    alt="TBC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/tfclogo/noc.png"
                    alt="NOC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
                <div className="sponsor-img">
                  <Image
                    src="/assets/img/logo3.png"
                    alt="TFC Logo"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "110px",
                      maxHeight: "75px",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="sponsor-img bb-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SponsorSection);
