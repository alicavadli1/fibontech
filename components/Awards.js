export default function Awards() {
  const awards = [
    {
      host: "Awwwards",
      title: "SOTY 2023 - 1st Winner",
      date: "May 2023"
    },
    {
      host: "css awards",
      title: "Top 5 Best of eCommerce Websites 2022",
      date: "Dec 2022"
    },
    {
      host: "Awwwards",
      title: "Honor SOTD November, 2022r",
      date: "Nov 2022"
    },
    {
      host: "Behance Portfolio",
      title: "Winner - US Behance Portfolio Review 2021",
      date: "Aug 2021"
    },
    {
      host: "ui/ux global award",
      title: "Top 10 Best of Mobile App Design 2021",
      date: "Mar 2021"
    },
    {
      host: "fwa us award",
      title: "FWA of the Day - March 2021",
      date: "Mar 2021"
    }
  ];

  return (
    <section className="awards-sa section-padding">
      <div className="container">
        <div className="sec-head mb-100">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="sub-head">Awards & Recognition</h6>
            </div>
            <div className="col-lg-7">
              <h4>Efforts to receive worthy rewards, awards & recognition
                <span className="sub-color inline"> help us affirm our brand.</span>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="item-title row">
            <div className="col-md-4">
              <div>
                <h6 className="sub-title">hosted</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h6 className="sub-title">Award title</h6>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-end">
              <div>
                <h6 className="sub-title">Date</h6>
              </div>
            </div>
          </div>
          {awards.map((award, index) => (
            <div key={index} className="item-line row">
              <div className="col-md-4">
                <div className="honors">
                  <h6>{award.host}</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="project-title">
                  <h6>{award.title}</h6>
                </div>
              </div>
              <div className="col-md-2">
                <div className="project-date">
                  <span>{award.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 