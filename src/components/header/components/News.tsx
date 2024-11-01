import Marquee from "react-fast-marquee";
import "./styles.css";

const News = () => {
  return (
    <div className="news-container">
      <div></div>
      <p className="news-heading">News:</p>
      <Marquee className="text-secondary">
        <div className="news-item">
          Award Ceremony of UG & PG Engineering Programmes
        </div>
        <div className="news-item">Bsc Msc Programms Admission open 2024</div>
        <div className="news-item">Bsc Msc Programms Admission open 2024</div>
      </Marquee>
    </div>
  );
};

export default News;
