import Image from "next/image";

export default function SponsorSection() {
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
          <div style={{ overflow: "hidden" }}>
            <div className="sponsor-wrap" style={{ gap: "0", rowGap: "0" }}>
              {/* Row 1: 3 logos */}
              <div
                className="sponsor-box-items"
                style={{
                  margin: "0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/pinklogo.png"
                    alt="Pink Logo Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/tbc.png"
                    alt="TBC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/noc.png"
                    alt="NOC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>

              {/* Row 2: 4 logos */}
              <div
                className="sponsor-box-items"
                style={{
                  margin: "0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/logo3.png"
                    alt="TFC Logo"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/pinklogo.png"
                    alt="Pink Logo Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/tbc.png"
                    alt="TBC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/noc.png"
                    alt="NOC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>

              {/* Row 3: 3 logos */}
              <div
                className="sponsor-box-items"
                style={{
                  margin: "0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/pinklogo.png"
                    alt="Pink Logo Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/tfclogo/tbc.png"
                    alt="TBC Partner"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
                <div
                  className="sponsor-img"
                  style={{ padding: "8px", margin: "0" }}
                >
                  <Image
                    src="/assets/img/logo3.png"
                    alt="TFC Logo"
                    width={110}
                    height={75}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "75px",
                      maxWidth: "110px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
