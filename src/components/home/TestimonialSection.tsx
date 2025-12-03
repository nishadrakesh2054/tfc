import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section
      className="testimonial-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url('/assets/img/testimonial/testimonial-bg.jpg')",
      }}
    >
      <div className="testimonial-wrapper">
        <div className="container">
          <div className="row g-4">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="swiper tetsimonial-slider">
                  <div className="swiper-wrapper">
                    {/* Testimonial 1 */}
                    <div className="swiper-slide">
                      <div className="testimonial-box-slider">
                        <div className="quote-icon">
                          <Image
                            src="/assets/img/testimonial/quote.svg"
                            alt="Quote Icon"
                            width={50}
                            height={50}
                          />
                        </div>
                        <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                          Thunderbolts FC has given me the platform to grow as a
                          player. The coaching staff and facilities are
                          world-class!
                        </p>
                        <div className="client-info-items">
                          <div className="client-info">
                            <Image
                              src="/assets/img/testimonial/client.png"
                              alt="Rajesh Shrestha"
                              width={60}
                              height={60}
                              style={{ width: "auto", height: "60px" }}
                            />
                            <div className="content">
                              <h4 style={{ fontSize: "16px", fontWeight: "600" }}>Rajesh Shrestha</h4>
                              <span>Youth Academy Player</span>
                            </div>
                          </div>
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="swiper-slide">
                      <div className="testimonial-box-slider">
                        <div className="quote-icon">
                          <Image
                            src="/assets/img/testimonial/quote.svg"
                            alt="Quote Icon"
                            width={50}
                            height={50}
                          />
                        </div>
                        <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                          Being a fan of TFC is more than just football. The
                          passion, energy, and community make every match
                          unforgettable!
                        </p>
                        <div className="client-info-items">
                          <div className="client-info">
                            <Image
                              src="/assets/img/testimonial/client.png"
                              alt="Sarita Karki"
                              width={60}
                              height={60}
                              style={{ width: "auto", height: "60px" }}
                            />
                            <div className="content">
                              <h4 style={{ fontSize: "16px", fontWeight: "600" }}>Sarita Karki</h4>
                              <span>Season Ticket Holder</span>
                            </div>
                          </div>
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="swiper-slide">
                      <div className="testimonial-box-slider">
                        <div className="quote-icon">
                          <Image
                            src="/assets/img/testimonial/quote.svg"
                            alt="Quote Icon"
                            width={50}
                            height={50}
                          />
                        </div>
                        <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                          Proud to support TFC! The club&apos;s commitment to
                          developing local talent and competitive excellence is
                          inspiring.
                        </p>
                        <div className="client-info-items">
                          <div className="client-info">
                            <Image
                              src="/assets/img/testimonial/client.png"
                              alt="Anil Tamang"
                              width={60}
                              height={60}
                              style={{ width: "auto", height: "60px" }}
                            />
                            <div className="content">
                              <h4 style={{ fontSize: "16px", fontWeight: "600" }}>Anil Tamang</h4>
                              <span>Club Sponsor</span>
                            </div>
                          </div>
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="swiper-slide">
                      <div className="testimonial-box-slider">
                        <div className="quote-icon">
                          <Image
                            src="/assets/img/testimonial/quote.svg"
                            alt="Quote Icon"
                            width={50}
                            height={50}
                          />
                        </div>
                        <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                          TFC brought football back to our community. The
                          academy programs and fan engagement are exceptional!
                        </p>
                        <div className="client-info-items">
                          <div className="client-info">
                            <Image
                              src="/assets/img/testimonial/client.png"
                              alt="Priya Adhikari"
                              width={60}
                              height={60}
                              style={{ width: "auto", height: "60px" }}
                            />
                            <div className="content">
                              <h4 style={{ fontSize: "16px", fontWeight: "600" }}>Priya Adhikari</h4>
                              <span>Community Member</span>
                            </div>
                          </div>
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-right-items">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">What Our Fans Say</h6>
                    <h2 className="text-white hero_title tv_hero_title hero_title_1">
                      Loved by Players, <span>fans,</span> <br />
                      and families
                    </h2>
                  </div>
                  <div className="row g-4">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="testi-count">
                        <Image
                          src="/assets/img/testimonial/ratting-box.png"
                          alt="5 Star Rating"
                          width={200}
                          height={100}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                      <div className="array-button d-flex align-items-center">
                        <button className="array-prev">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="24"
                            viewBox="0 0 20 24"
                            fill="none"
                          >
                            <g opacity="0.72">
                              <path
                                d="M15.814 19.4316C16.2646 19.8822 16.9952 19.8822 17.4458 19.4316C17.8964 18.981 17.8964 18.2504 17.4458 17.7998L16.6299 18.6157L15.814 19.4316ZM3.37029 4.20228C2.73304 4.20228 2.21644 4.71887 2.21644 5.35613L2.21644 15.7407C2.21644 16.378 2.73303 16.8946 3.37029 16.8946C4.00754 16.8946 4.52413 16.378 4.52413 15.7407V6.50997H13.7549C14.3922 6.50997 14.9087 5.99338 14.9087 5.35613C14.9087 4.71887 14.3922 4.20228 13.7549 4.20228L3.37029 4.20228ZM16.6299 18.6157L17.4458 17.7998L4.18618 4.54023L3.37029 5.35613L2.55439 6.17202L15.814 19.4316L16.6299 18.6157Z"
                                fill="#464E5E"
                              />
                            </g>
                          </svg>
                        </button>
                        <button className="array-next">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                          >
                            <g opacity="0.72">
                              <path
                                d="M4.56838 15.814C4.11778 16.2646 4.11778 16.9952 4.56838 17.4458C5.01899 17.8964 5.74956 17.8964 6.20017 17.4458L5.38428 16.6299L4.56838 15.814ZM19.7977 3.37029C19.7977 2.73304 19.2811 2.21644 18.6439 2.21644L8.25926 2.21644C7.62201 2.21644 7.10541 2.73303 7.10541 3.37029C7.10541 4.00754 7.62201 4.52413 8.25926 4.52413H17.49V13.7549C17.49 14.3922 18.0066 14.9087 18.6439 14.9087C19.2811 14.9087 19.7977 14.3922 19.7977 13.7549L19.7977 3.37029ZM5.38428 16.6299L6.20017 17.4458L19.4598 4.18618L18.6439 3.37029L17.828 2.55439L4.56838 15.814L5.38428 16.6299Z"
                                fill="#464E5E"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="image">
                        <Image
                          src="/assets/img/football.png"
                          alt="Testimonial"
                          width={300}
                          height={400}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
