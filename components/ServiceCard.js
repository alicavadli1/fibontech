export default function ServiceCard({ title, description, icon, image, className }) {
  return (
    <div className={`col-lg-4 ${className || ''}`}>
      <div className="item md-mb50">
        <div className="cont">
          <div className="d-flex align-items-center">
            <div>
              <h6 dangerouslySetInnerHTML={{ __html: title }}></h6>
            </div>
            <div className="ml-auto">
              <div className="icon invert">
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
          <div className="text">
            <p>{description}</p>
          </div>
        </div>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
} 