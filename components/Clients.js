export default function Clients() {
  const clients = [
    { id: 1, logo: "/assets/imgs/brands/1.svg" },
    { id: 2, logo: "/assets/imgs/brands/2.svg" },
    { id: 3, logo: "/assets/imgs/brands/3.svg" },
    { id: 4, logo: "/assets/imgs/brands/4.svg" },
    { id: 5, logo: "/assets/imgs/brands/5.svg" },
    { id: 6, logo: "/assets/imgs/brands/6.svg" }
  ];

  return (
    <section className="clients-sa">
      <div className="container">
        <div className="sec-head mb-100">
          <h6 className="sub-head">Our Clients & Partners</h6>
        </div>
        <div className="row">
          {clients.map((client, index) => (
            <div key={client.id} className={`col-lg-2 col-md-4 col-6 ${index < 4 ? 'md-mb30' : index < 5 ? 'sm-mb30' : ''}`}>
              <div className="item d-flex align-items-center justify-content-center">
                <div className="img">
                  <img src={client.logo} alt="" />
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item d-flex align-items-center justify-content-center">
              <div className="cont sub-color">
                <div className="icon invert">
                  <img src="/common/imgs/icons/global.svg" alt="" />
                </div>
                <span>125+ clients <br /> worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 