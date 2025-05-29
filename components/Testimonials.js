export default function Testimonials() {
  const testimonials = [
    {
      rating: "5.0",
      text: "A studio with passionate, professional and full creativity. Much more than i'm expect. Great services, high quality products & affordable prices. I'm extremly satisfied!.",
      author: "Bradley Gordon",
      position: "CEO & Founder, Archin Studio",
      avatar: "/assets/imgs/testim/avatar1.jpg"
    },
    {
      rating: "5.0",
      text: "Thank you so much for the suppot of Hubfolio team, who have been with our business for more than 3 years. A long journey with many exciting experiences and moments. Hubfolio will alway be our 1st choice.",
      author: "Bradley Gordon",
      position: "CEO & Founder, Archin Studio",
      avatar: "/assets/imgs/testim/avatar2.jpg"
    },
    {
      rating: "5.0",
      text: "Hubfolio ability to create a high-quality user interface stands out. It's something we placed a premium on. Recommended!.",
      author: "Bradley Gordon",
      position: "CEO & Founder, Archin Studio",
      avatar: "/assets/imgs/testim/avatar3.jpg"
    }
  ];

  return (
    <section className="testimonials-sa section-padding">
      <div className="container">
        <div className="sec-head mb-100">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="sub-head">Testimonials</h6>
            </div>
            <div className="col-lg-7">
              <h4>We've helped hundreds of partners, <br /> to achieve their goals and
                <span className="sub-color inline"> stellar feedback, <br /> is our reward!</span>
              </h4>
              <div className="gl-rate d-flex align-items-center mt-60">
                <div className="icon">
                  <img src="/assets/imgs/logo-clutch.svg" alt="" />
                </div>
                <div className="cont">
                  <h6>4.9/5
                    <span className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </h6>
                  <p>Based on 24 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper testim-swiper swiper-container">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="item">
                  <div>
                    <div className="rate">
                      <h5>{testimonial.rating}
                        <span className="stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </span>
                      </h5>
                    </div>
                    <div className="mt-30">
                      <h6>{testimonial.text}</h6>
                    </div>
                  </div>
                  <div className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                    <div>
                      <div className="img-author">
                        <img src={testimonial.avatar} alt="" />
                      </div>
                    </div>
                    <div className="info-text">
                      <span>{testimonial.author}</span>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 