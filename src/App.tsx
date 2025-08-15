import "./App.css";
import { userInfo } from "../src/data";
import nextIcon from "../public/images/icon-next.svg";
import prevIcon from "../public/images/icon-prev.svg";

const App = () => {
  return (
    <main className="main_app">
      <section className="testimonials_section">
        <div className="testimonial_card">
          <div className="image_container">
            <img src={userInfo.img.src} alt={userInfo.img.alt} />
          </div>
          <div className="button_container">
            <button className="prev_button" aria-label="Previous testimonial">
              <img src={prevIcon} alt="Previous icon" />
            </button>
            <button className="next_button" aria-label="Next testimonial">
              <img src={nextIcon} alt="Next icon" />
            </button>
          </div>
        </div>

        <div className="testimonial_info">
          <p className="testimonial_text"></p>
          <p className="testimonial_name"></p>
          <span className="testimonial_role"></span>
        </div>
      </section>
    </main>
  );
};

export default App;
