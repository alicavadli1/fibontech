export default function Contact() {
  return (
    <section className="contact-sa section-padding">
      <div className="container">
        <div className="sec-head mb-100">
          <div className="row">
            <div className="col-lg-5">
              <h6 className="sub-head">Get In Touch</h6>
            </div>
            <div className="col-lg-7">
              <h4>Ready to bring your vision to life?
                <span className="sub-color inline"> Let's collaborate and create something amazing together.</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 offset-lg-1">
            <div className="contact-form">
              <form id="contact-form" method="post">
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="form_name">Full Name <span className="star">*</span></label>
                      <input id="form_name" type="text" name="name" placeholder="Your full name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="form_email">Email Address <span className="star">*</span></label>
                      <input id="form_email" type="email" name="email" placeholder="Your email address" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="form_subject">Subject <span className="star">*</span></label>
                      <input id="form_subject" type="text" name="subject" placeholder="subject" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <label htmlFor="form_budget">Your Budget <span className="opt sub-color">(Optional)</span></label>
                      <input id="form_budget" type="text" name="budget" placeholder="A range of budget for project" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="form_message">Message</label>
                      <textarea id="form_message" name="message" placeholder="Write your message here..." rows="4" required></textarea>
                    </div>
                    <div className="mt-60">
                      <button type="submit" className="butn butn-md butn-bord butn-rounded">
                        <span className="text">Send Your Message</span>
                        <span className="icon invert ml-10">
                          <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 