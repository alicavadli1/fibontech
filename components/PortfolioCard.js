import Link from 'next/link';

export default function PortfolioCard({ image, category, title, link = "#" }) {
  return (
    <div className="col-lg-6">
      <div className="item">
        <div className="img">
          <img src={image} alt={title} />
        </div>
        <div className="cont d-flex align-items-center">
          <div>
            <span className="tag">{category}</span>
            <h6>{title}</h6>
          </div>
          <div className="ml-auto">
            <Link href={link} className="rmore">
              <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 