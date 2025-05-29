import ServiceCard from './ServiceCard';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Strategy and <br> Design",
      description: "We provide digital solutions as Website Design,Mobile App Design, Landing Page design, Illustration, Animation increase company's values",
      icon: "/common/imgs/icons/bezier-curve-solid.svg",
      image: "/assets/imgs/services/1.png"
    },
    {
      title: "Coding and <br> Implementation",
      description: "We implement coding with new tech React, Webflow, Wordpress, Shopify, Flutter, iOS, Android and AI-driven applications",
      icon: "/common/imgs/icons/code-solid.svg",
      image: "/assets/imgs/services/2.png"
    },
    {
      title: "SEO/Marketing and <br> Advertisment",
      description: "We deliver traffic & sales-driven marketing strategies that drive significant business growth with Online Visibility",
      icon: "/common/imgs/icons/chart-line-solid.svg",
      image: "/assets/imgs/services/3.png"
    }
  ];

  return (
    <section className="services-sa section-padding">
      <div className="container">
        <div className="sec-head mb-100">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="sub-head">Our Services</h6>
            </div>
            <div className="col-lg-7">
              <h4>As a tight-knit team of experts, we create memorable and emotional websites,
                <span className="sub-color inline"> digital experiences, and native apps.</span>
              </h4>
              <Link href="/services" className="butn butn-md butn-bord butn-rounded mt-40">
                <div className="d-flex align-items-center">
                  <span>Learn More</span>
                  <span className="icon pe-7s-angle-right ml-10 fz-30"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              className={index === 2 ? '' : 'md-mb50'}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 