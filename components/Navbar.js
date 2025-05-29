import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link href="/" className="logo">
            <img src="/assets/imgs/Logo-light.svg" alt="logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">Studio</Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" className="nav-link">Works</Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link">News</Link>
              </li>
            </ul>
          </div>
          <div className="topnav d-flex align-items-center">
            <Link href="/contact" className="butn butn-rounded">
              <div className="d-flex align-items-center">
                <span>Start Project</span>
                <span className="icon ml-10">
                  <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                </span>
              </div>
            </Link>
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu">
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container-fluid rest d-flex">
          <div className="menu-links">
            <ul className="main-menu rest">
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Home">Home</span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="/" className="sub-link">Startup Agency</Link>
                    </li>
                    <li>
                      <Link href="/creative-studio" className="sub-link">Creative Studio</Link>
                    </li>
                    <li>
                      <Link href="/creative-agency" className="sub-link">Creative Agency</Link>
                    </li>
                    <li>
                      <Link href="/digital-marketing" className="sub-link">Digital Marketing</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Pages">Pages</span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="/about" className="sub-link">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services" className="sub-link">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/team" className="sub-link">Our Team</Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="sub-link">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="sub-link">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Portfolio">Portfolio</span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="/portfolio-standard" className="sub-link">Standard</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-gallery" className="sub-link">Gallery</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-cards" className="sub-link">Card</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <div className="link cursor-pointer dmenu">
                    <span className="fill-text" data-text="Blog">Blog</span>
                    <i></i>
                  </div>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <Link href="/blog-grid" className="sub-link">Blog Grid</Link>
                    </li>
                    <li>
                      <Link href="/blog-standard" className="sub-link">Blog Standard</Link>
                    </li>
                    <li>
                      <Link href="/blog-details" className="sub-link">Blog Details</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="o-hidden">
                  <Link href="/contact" className="link">
                    <span className="fill-text" data-text="Contact Us">Contact Us</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="cont-info valign">
            <div className="text-center full-width">
              <div className="logo">
                <img src="/assets/imgs/Logo-light.svg" alt="" />
              </div>
              <div className="social-icon mt-40">
                <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                <a href="#"> <i className="fab fa-instagram"></i> </a>
              </div>
              <div className="item mt-30">
                <h5>541 Melville Geek, <br /> Palo Alto, CA 94301</h5>
              </div>
              <div className="item mt-10">
                <h5><a href="#0">Hello@email.com</a></h5>
                <h5 className="underline"><a href="#0">+1 840 841 25 69</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 