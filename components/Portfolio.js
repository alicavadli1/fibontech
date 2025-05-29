import Link from 'next/link';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Unerio Residential Complex Landing page",
      description: "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
      image: "/assets/imgs/works/1.jpg",
      tags: ["Development", "UI/UX", "illustration"],
      link: "/project-details"
    },
    {
      title: "Archin Architecture Studio",
      description: "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
      image: "/assets/imgs/works/2.jpg",
      tags: ["Mobile Responsive", "UX Design"],
      link: "/project-details"
    },
    {
      title: "Jorger Clarkson - Architect Personal Portfolio",
      description: "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
      image: "/assets/imgs/works/3.jpg",
      tags: ["UI/UX", "Webflow"],
      link: "/project-details"
    },
    {
      title: "DS Freelance Developer",
      description: "This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project",
      image: "/assets/imgs/works/4.jpg",
      tags: ["Development", "UI/UX", "illustration"],
      link: "/project-details"
    }
  ];

  return (
    <section className="work-card">
      <div className="container section-padding bord-thin-top-light">
        <div className="sec-head mb-100">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="sub-head">Featured Works</h6>
            </div>
            <div className="col-lg-7">
              <h4>Our user-centered design encourages
                <span className="sub-color inline"> productivity & boosts revenue.</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="cards">
          {portfolioItems.map((item, index) => (
            <div key={index} className="card-item">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont md-mb50">
                    <div>
                      <h5>
                        <Link href={item.link}>{item.title}</Link>
                      </h5>
                    </div>
                    <div>
                      <p>{item.description}</p>
                      <div className="mt-40">
                        {item.tags.map((tag, tagIndex) => (
                          <a key={tagIndex} href="#0" className="tag">{tag}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-80">
          <Link href="/portfolio" className="butn butn-md butn-bord butn-rounded">
            <div className="d-flex align-items-center">
              <span>Check Our Portfolio</span>
              <span className="icon invert ml-10">
                <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
} 