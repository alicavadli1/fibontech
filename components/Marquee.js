export default function Marquee() {
  const marqueeItems = [
    "Modern Design",
    "Flexiable Price", 
    "User Centric Design",
    "AI-Driven Solutions",
    "Flexiable Price"
  ];

  return (
    <section className="marquee-sa">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-marq">
              <div className="slide-har st1">
                <div className="box">
                  {marqueeItems.map((item, index) => (
                    <div key={index} className="item">
                      <h2><span>{item}</span></h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 